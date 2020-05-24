<template>
  <div
    class="woo-slide"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
    @touchstart.stop="handleTouchStart"
    @touchmove.stop="handleTouchMove"
    @touchend.stop="handleTouchEnd"
  >
    <div class="woo-slide-wrapper" :style="wrapperStyle" ref="slideWrapperRef">
      <div class="woo-slide-arrow-wrapper woo-slide-arrow-wrapper-left">
        <woo-icon
          @click.native="setActiveItem(activeIndex - 1)"
          name="left"
          class="woo-slide-left-arrow"
        ></woo-icon>
      </div>
      <div class="woo-slide-arrow-wrapper woo-slide-arrow-wrapper-right">
        <woo-icon
          @click.native="setActiveItem(activeIndex + 1)"
          name="right"
          class="woo-slide-right-arrow"
        ></woo-icon>
      </div>
      <slot></slot>
    </div>
    <ul
      class="woo-slide-indicator"
      @mouseenter.stop="overIndicator = true"
      @mouseleave.stop="overIndicator = false"
    >
      <li
        v-for="(i, index) in items"
        :key="index"
        class="woo-slide-indicator-item"
        :class="{ 'active-item': index === activeIndex }"
        @click.stop="activeIndex = index"
      ></li>
    </ul>
  </div>
</template>

<script>
import WooSlideItem from "./SlideItem";
import WooIcon from "../Icon";
export default {
  name: "woo-slide",
  data() {
    return {
      items: [],
      activeIndex: -1,
      width: null,
      timer: null,
      overIndicator: false,
      startX: null,
      endX: null,
    };
  },
  props: {
    height: {
      type: String,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    WooSlideItem,
    WooIcon,
  },
  watch: {
    activeIndex: function(newIndex, oldIndex) {
      this.setItemVisible(newIndex, oldIndex);
      if (oldIndex > -1) {
        this.$emit("change", newIndex, oldIndex);
      }
    },
  },
  methods: {
    // 添加子组件到 items 数组
    initItems() {
      this.items = this.$children.filter(
        (i) => i.$options.name === "woo-slide-item"
      );
    },
    // 获取初始状态的 index
    initActiveIndex() {
      if (this.initialIndex !== null) {
        this.activeIndex = this.initialIndex;
      }
    },
    getWidth() {
      this.width = this.$refs.slideWrapperRef.getBoundingClientRect().width;
    },
    // 轮播
    playSlides() {
      const length = this.items.length;
      this.activeIndex++;
      if (this.activeIndex > length - 1) {
        this.activeIndex = 0;
      }
    },
    startTimer() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(this.playSlides, this.interval);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    handleMouseEnter() {
      if (this.autoPlay) {
        this.stopTimer();
      }
    },
    handleMouseLeave() {
      if (this.autoPlay && !this.timer) {
        this.startTimer();
      }
    },
    handleTouchStart(e) {
      this.startX = e.changedTouches[0].pageX;
      // 清除定时器
      this.handleMouseEnter();
    },
    handleTouchEnd(e) {
      this.endX = e.changedTouches[0].pageX;
      const { startX, endX, width } = this;
      if (Math.abs(endX - startX) > 0.15 * width) {
        if (endX > startX) {
          // 右滑 上一张
          this.setActiveItem(this.activeIndex - 1);
        } else {
          // 左滑 下一张
          this.setActiveItem(this.activeIndex + 1);
        }
      }
      // 添加定时器
      this.handleMouseLeave();
    },
    // 手动切换 items API
    setActiveItem(index) {
      // 如果参数 index 是子组件的 name 属性
      if (typeof index === "string") {
        // 找到对应的组件
        const item = this.items.find((i) => i.name === index);
        if (item) {
          // 得到组件在 items 数组中的索引
          index = this.items.indexOf(item);
        } else {
          console && console.error(`index "${index}" could not been found`);
        }
      }
      const length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = length - 1;
      } else if (index >= length) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    },
    // 手动播放下一张 API
    next() {
      this.setActiveItem(this.activeIndex + 1);
    },
    // 手动播放上一张 API
    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },
    // 控制 item
    setItemVisible(activeIndex, oldIndex) {
      this.items.forEach((item, index) => {
        item.toggle(index, activeIndex, oldIndex, this.overIndicator);
      });
    },
  },
  computed: {
    wrapperStyle() {
      return { height: this.height };
    },
  },
  mounted() {
    this.initItems();
    this.initActiveIndex();
    this.getWidth();
    if (this.autoPlay) {
      this.startTimer();
    }
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.woo-slide {
  display: block;
  position: relative;
  overflow-x: hidden;
  &-wrapper {
    position: relative;
  }
  &-arrow-wrapper,
  &-arrow-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    display: inline-flex;
    &-left {
      left: 16px;
    }
    &-right {
      right: 16px;
    }
  }
  &-indicator {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-flex;
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translate(-50%);
    &-item {
      width: 10px;
      height: 10px;
      margin: 0 4px;
      background-color: #000;
      &.active-item {
        background-color: $slide-item-bg-active;
      }
    }
  }
  &-arrow-wrapper,
  &-arrow-wrapper,
  &-indicator-item {
    border-radius: 50%;
    background-color: $button-bg;
    cursor: pointer;
    &:hover {
      box-shadow: $slide-box-shadow;
    }
  }
}
</style>

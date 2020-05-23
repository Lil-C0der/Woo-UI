<template>
  <div
    class="woo-slide"
    @mouseenter.stop="stopTimer"
    @mouseleave.stop="startTimer"
  >
    {{ activeIndex }}
    <woo-icon
      @click.native="debounceArrowClick(activeIndex - 1)"
      name="left"
      class="woo-slide-left-arrow"
    ></woo-icon>
    <woo-icon
      @click.native="debounceArrowClick(activeIndex + 1)"
      name="right"
      class="woo-slide-right-arrow"
    ></woo-icon>
    <div class="woo-slide-window" ref="windowRef" :style="slideWindowStyle">
      <slot></slot>
    </div>
    <ul class="indicator-list">
      <li
        v-for="(i, index) in items"
        :key="index"
        class="indicator-item"
        @click.stop="activeIndex = index"
      ></li>
    </ul>
  </div>
</template>

<script>
import WooSlideItem from "./SlideItem";
import WooIcon from "./Icon";

import { debounce, throttle } from "./utils";

export default {
  name: "woo-slide",
  data() {
    return {
      timer: null,
      activeIndex: 0,
      items: [],
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
  },
  components: {
    WooSlideItem,
    WooIcon,
  },
  methods: {
    // 初始化 items 数组
    initItems() {
      this.items = this.$children.filter(
        (i) => i.$options.name === "woo-slide-item"
      );
    },
    // 初始化 item 的位置
    initItemsPosition() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },
    // 开始轮播
    playSlides() {
      this.activeIndex++;
      if (this.activeIndex > this.items.length - 1) {
        this.activeIndex = 0;
      }
    },
    setActiveIndex(index) {
      const prevActiveIndex = this.activeIndex;
      let length = this.items.length;
      if (index > length - 1) {
        this.activeIndex = 0;
      } else if (index < 0) {
        this.activeIndex = length - 1;
      } else this.activeIndex = index;
      if (prevActiveIndex === this.activeIndex) {
        this.setPosition(prevActiveIndex);
      }
    },
    // 改变 item 的位置
    setPosition(prevActiveIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, prevActiveIndex);
      });
    },
    startTimer() {
      // this.timer = setInterval(this.playSlides, this.interval);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    prev() {
      this.setActiveIndex(this.activeIndex - 1);
      this.stopTimer();
    },
    next() {
      this.setActiveIndex(this.activeIndex + 1);
      this.stopTimer();
    },
  },
  watch: {
    activeIndex: function(activeIndex, prevActiveIndex) {
      this.setPosition(prevActiveIndex);
      // this.setPosition(activeIndex);
    },
  },
  computed: {
    slideWindowStyle() {
      return { height: this.height };
    },
  },
  created() {
    this.debounceArrowClick = debounce((index) => {
      this.setActiveIndex(index);
    }, 300);
  },
  mounted() {
    this.initItems();
    this.initItemsPosition();
    this.startTimer();
  },
};
</script>

<style lang="scss" scoped>
.woo-slide {
  display: block;
  position: relative;
  &-window {
    overflow: hidden;
    position: relative;
  }
  &-left-arrow {
    left: 16px;
  }
  &-right-arrow {
    right: 16px;
  }
  .woo-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
  .indicator-list {
    list-style: none;
    display: flex;
    .indicator-item {
      width: 10px;
      height: 10px;
      margin: 0 4px;
      border-radius: 50%;
      background-color: #000;
    }
  }
}
</style>

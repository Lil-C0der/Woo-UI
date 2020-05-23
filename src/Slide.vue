<template>
  <div
    class="woo-slide"
    @mouseenter.stop="stopTimer"
    @mouseleave.stop="startTimer"
  >
    <woo-icon
      @click.native="setActiveItem(activeIndex - 1)"
      name="left"
      class="woo-slide-left-arrow"
    ></woo-icon>
    <woo-icon
      @click.native="setActiveItem(activeIndex + 1)"
      name="right"
      class="woo-slide-right-arrow"
    ></woo-icon>
    <div class="woo-slide-wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import WooSlideItem from "./SlideItem";
import WooIcon from "./Icon";
export default {
  name: "woo-slide",
  data() {
    return {
      items: [],
      activeIndex: -1,
      timer: null,
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
  },
  components: {
    WooSlideItem,
    WooIcon,
  },
  watch: {
    activeIndex: function(newIndex, oldIndex) {
      this.setItemVisible(newIndex, oldIndex);
    },
  },
  methods: {
    // 添加子组件到 items 数组
    initItems() {
      this.items = this.$children.filter(
        (i) => i.$options.name === "woo-slide-item"
      );
      console.log(this.items);
    },
    // 获取初始状态的 index
    initActiveIndex() {
      if (this.initialIndex !== null) {
        this.activeIndex = this.initialIndex;
      }
    },
    playSlides() {
      const length = this.items.length;
      this.activeIndex++;
      if (this.activeIndex > length - 1) {
        this.activeIndex = 0;
      }
    },
    startTimer() {
      this.timer = setInterval(this.playSlides, this.interval);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 手动切换 items API
    setActiveItem(index) {
      if (typeof index === "string") {
        const item = this.items.find((i) => i.name === index);
        if (item) {
          index = this.items.indexOf(item);
        } else {
          console && console.error(`index "${index}" could not been found`);
        }
      }
      const oldIndex = this.activeIndex;
      this.activeIndex = index;
      this.setItemVisible(index, oldIndex);
    },
    // 控制 item
    setItemVisible(activeIndex, oldIndex) {
      this.items.forEach((item, index) => {
        item.toggle(index, activeIndex, oldIndex);
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
    this.startTimer();
  },
};
</script>

<style lang="scss" scoped>
.woo-slide {
  position: relative;
  display: block;
  &-wrapper {
    overflow-x: hidden;
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
}
</style>

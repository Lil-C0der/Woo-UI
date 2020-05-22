<template>
  <div class="woo-slide">
    {{ activeIndex }}
    <div class="woo-slide-window" ref="windowRef" :style="slideWindowStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import WooSlideItem from "./SlideItem";

export default {
  name: "woo-slide",
  data() {
    return {
      activeIndex: 0,
      items: [],
    };
  },
  props: {
    height: {
      type: String,
    },
  },
  components: {
    WooSlideItem,
  },
  methods: {
    // 初始化 items 数组
    initItems() {
      this.items = this.$children.filter(
        (i) => (i.$options.name = "woo-slide-item")
      );
    },
    // 给每个 item 添加一个递增的索引 index
    initItemsIndex() {
      for (var i = 0; i < this.$children.length; i++) {
        this.items[i].index = i;
      }
    },
    // 初始化 item 的位置
    initItemsPosition() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },
    // 开始轮播
    playSlide() {
      this.activeIndex++;
      if (this.activeIndex > this.items.length - 1) {
        this.activeIndex = 0;
      }
    },
    // 改变 item 的位置
    setPosition(activeIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, activeIndex);
      });
    },
  },
  watch: {
    activeIndex: function(activeIndex, oldIndex) {
      this.setPosition(activeIndex);
    },
  },
  computed: {
    slideWindowStyle() {
      return { height: this.height };
    },
  },
  mounted() {
    this.initItems();
    this.initItemsIndex();
    this.initItemsPosition();
    setInterval(() => {
      this.playSlide();
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.woo-slide {
  display: inline-block;
  position: relative;
  &-wrapper {
  }
  &-window {
    width: 280px;
    // height: 140px;
    overflow: hidden;
    position: relative;
    // display: inline-flex;
  }
}
</style>

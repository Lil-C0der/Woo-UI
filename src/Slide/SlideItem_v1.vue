<template>
  <div
    class="woo-slide-item"
    :style="itemStyle"
    :class="{ transition: transition }"
  >
    {{ distanceToActiveItem }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-slide-item",
  data() {
    return {
      translate: 0,
      distanceToActiveItem: 0,
      transition: false,
    };
  },
  props: {},
  methods: {
    // 计算 index 的偏移
    nextIndex(index, offset) {
      const length = this.$parent.items.length;
      let newIndex = index + offset;
      if (newIndex < 0) {
        newIndex = length + newIndex;
      }
      if (newIndex >= length) {
        newIndex = newIndex - length;
      }
      return newIndex;
    },
    // 根据不同情况来处理 index
    processIndex(index, activeIndex, length) {
      var positiveIndex = 0;
      for (let i = activeIndex; i != index; i = this.nextIndex(i, 1)) {
        positiveIndex++;
      }
      let negativeIndex = 0;
      for (let i = activeIndex; i !== index; i = this.nextIndex(i, -1)) {
        negativeIndex--;
      }
      index =
        Math.abs(positiveIndex) < Math.abs(negativeIndex)
          ? positiveIndex
          : negativeIndex;
      return index;
    },
    // 计算
    translateItem(index, activeIndex, prevActiveIndex) {
      const length = this.$parent.items.length;
      // 重新排列各个 item 的位置
      this.transition = index === activeIndex || index === prevActiveIndex;
      index = this.processIndex(index, activeIndex, length);
      // if (index === 0) {
      //   this.distanceToActiveItem = length + 1;
      // } else if ([1, -1].indexOf(index) !== -1) {
      //   this.distanceToActiveItem = length;
      // } else {
      //   this.distanceToActiveItem = index;
      // }
      this.translate = index * 670;
    },
  },
  computed: {
    itemStyle() {
      return {
        transform: `translateX(${this.translate}px)`,
        zIndex: this.distanceToActiveItem + 98,
      };
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.woo-slide-item {
  width: 100%;
  position: absolute;
  z-index: 98;
  &.top-item {
    z-index: 99;
  }
  &.transition {
    transition: all 8s;
  }
}
</style>

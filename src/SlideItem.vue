<template>
  <div class="woo-slide-item" :style="itemStyle" :class="{ transition: trans }">
    {{ index }}
    <!-- {{ translate }} -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-slide-item",
  data() {
    return {
      index: 0,
      translate: 0,
      // 是否有过渡动画
      trans: true,
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
    processIndex(index, activeIndex) {
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
    translateItem(index, activeIndex) {
      const length = this.$parent.items.length;
      // this.animating = index === activeIndex || index === oldIndex;
      this.trans = activeIndex !== 0 || activeIndex !== 3;
      index = this.processIndex(index, activeIndex);
      this.translate = index * 280;
    },
  },
  computed: {
    itemStyle() {
      return {
        transform: `translateX(${this.translate}px)`,
      };
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.woo-slide-item {
  position: absolute;
  &.transition {
    transition: all 0.3s;
  }
}
</style>

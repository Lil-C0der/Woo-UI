<template>
  <transition :name="animation">
    <div
      class="woo-slide-item"
      :class="itemClass"
      :data-name="name"
      v-show="visible"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "woo-slide-item",
  data() {
    return {
      visible: false,
      reverse: false,
    };
  },
  props: {
    name: {
      type: String,
    },
  },
  components: {},
  methods: {
    toggle(index, activeIndex, oldIndex, overIndicator) {
      const length = this.$parent.items.length;
      // 初始化
      if (oldIndex === -1) {
        this.visible = index === activeIndex;
        return;
      }
      // 反向
      if (activeIndex < oldIndex) {
        this.reverse = true;
      } else {
        this.reverse = false;
      }
      // 如果是通过 indicator 点击切换 不用反向
      if (overIndicator) {
        this.visible = index === activeIndex;
        return;
      }
      // 从第一张切换到最后一张 或者从最后一张切换到第一张
      if (Math.abs(activeIndex - oldIndex) === length - 1) {
        this.reverse = !this.reverse;
      }
      this.visible = index === activeIndex;
    },
  },
  computed: {
    itemClass() {},
    animation() {
      if (this.reverse) {
        return "slide-reverse";
      } else {
        return "slide";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-slide-item {
  width: 100%;
  position: absolute;
}
</style>

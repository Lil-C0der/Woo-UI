<template>
  <transition :name="animation" mode="in-out">
    <div class="woo-slide-item" :class="itemClass" v-show="visible">
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
    toggle(index, activeIndex, oldIndex) {
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active,
.slide-reverse-enter-active,
.slide-reverse-leave-active {
  transition: all 0.4s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-reverse-enter {
  transform: translateX(-100%);
}
.slide-reverse-leave-to {
  transform: translateX(100%);
}

.woo-slide-item {
  width: 100%;
  position: absolute;
}
</style>

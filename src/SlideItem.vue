<template>
  <transition name="slide" mode="in-out">
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
      // visible: true,
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
      this.visible = index === activeIndex;
    },
  },
  computed: {
    itemClass() {},
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.woo-slide-item {
  width: 100%;
  position: absolute;
  &-visible {
    opacity: 1;
  }
  &-invisible {
    opacity: 0;
  }
}
</style>

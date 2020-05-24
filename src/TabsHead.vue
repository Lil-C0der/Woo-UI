<template>
  <div class="woo-tabs-head">
    <slot></slot>
    <div
      class="woo-tabs-slide-bar"
      v-show="getStyle"
      :style="slideBarStyle"
    ></div>
    <div class="extra-actions-wrapper">
      <slot name="extra-actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-head",
  inject: ["eventBus"],
  data() {
    return {
      slideBarWidth: null,
      slideBarOffsetLeft: null,
      getStyle: false,
    };
  },
  methods: {
    getSlideBarPosition(vm) {
      if (!vm.disabled) {
        this.slideBarOffsetLeft = vm.$el?.offsetLeft;
        this.slideBarWidth = vm && window.getComputedStyle(vm.$el).width;
      }
      // 在页面上显示 SlideBar
      this.getStyle = true;
    },
  },
  computed: {
    slideBarStyle() {
      return {
        width: this.slideBarWidth,
        transform: ` translateX(${this.slideBarOffsetLeft}px)`,
      };
    },
  },
  mounted() {
    this.eventBus?.$on("tabChange", (vm) => {
      this.$nextTick(() => {
        this.getSlideBarPosition(vm);
      });
    });
  },
  beforeDestroy() {
    this.eventBus?.$off(["tabChange"]);
  },
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border-bottom: 1px solid $border-color;
  position: relative;
  .woo-tabs-slide-bar {
    background-color: $tab-active-color;
    transition: all 0.3s;
    height: 3px;
    width: 90 px;
    position: absolute;
    bottom: -1px;
  }
  .extra-actions-wrapper {
    margin-left: auto;
    margin-right: 16px;
  }
}
</style>

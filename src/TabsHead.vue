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
    getSlideBarPosition(name, instance) {
      if (!instance.disabled) {
        this.slideBarOffsetLeft = instance?.$el?.offsetLeft;
        this.slideBarWidth =
          instance && window.getComputedStyle(instance.$el).width;
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
    this.eventBus.$on("tabChange", (name, itemInstance) => {
      this.$nextTick(() => {
        this.getSlideBarPosition(name, itemInstance);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$bar-bg-color: #8c8baa;
.woo-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border-bottom: 1px solid #dedde2;
  position: relative;
  .woo-tabs-slide-bar {
    background-color: $bar-bg-color;
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

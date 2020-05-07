<template>
  <div class="woo-tabs-head">
    <slot></slot>
    <div class="woo-tabs-slide-bar" :style="slideBarStyle"></div>
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
    };
  },
  methods: {
    // 初始化SlideBar的位置
    initSlideBarPosition() {
      this.eventBus.$on("tabChange", (name, itemInstance) => {
        console.log(name);
        this.slideBarOffsetLeft = itemInstance?.$el?.offsetLeft;
        this.slideBarWidth =
          itemInstance && window.getComputedStyle(itemInstance.$el).width;
      });
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
    this.initSlideBarPosition();
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
  border: 1px solid red;
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

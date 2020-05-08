<template>
  <div class="woo-popover">
    <div
      ref="contentWrapper"
      class="woo-popover-content"
      :style="contentStyle"
      v-show="visible"
    >
      <slot></slot>
      <div class="woo-popover-arrow" :style="arrowStyle"></div>
    </div>
    <span
      ref="triggerWrapper"
      class="trigger-wrapper"
      @click.stop="handlePopoverClick"
    >
      <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "woo-popover",
  data() {
    return {
      visible: false,
      wrapperLeft: null,
      wrapperTop: null,
      wrapperWidth: null,
    };
  },
  methods: {
    closePopover() {
      this.visible = false;
      console.log("got there");
      document.removeEventListener("click", this.closePopover);
    },
    initPopoverPosition() {
      const triggerEl = this.$refs.triggerWrapper;
      const wrapperEl = this.$refs.contentWrapper;
      const { width, height, top, left } = triggerEl.getBoundingClientRect();
      this.wrapperLeft = left - width / 2 + window.scrollX;
      this.wrapperTop = top + window.scrollY;
      console.log(this.wrapperLeft, this.wrapperTop);
      this.$nextTick(() => {
        this.wrapperWidth = wrapperEl.getBoundingClientRect().width;
      });
    },
    handlePopoverClick() {
      this.visible = !this.visible;
      this.initPopoverPosition();
      document.removeEventListener("click", this.closePopover);
      if (this.visible) {
        document.body.appendChild(this.$refs.contentWrapper);
        document.addEventListener("click", this.closePopover);
      }
    },
  },
  computed: {
    contentStyle() {
      return {
        left: `${this.wrapperLeft}px`,
        top: `${this.wrapperTop}px`,
      };
    },
    arrowStyle() {
      return {
        left: `${this.wrapperWidth / 2}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #dedde2;
.woo-popover {
  display: inline-block;
  vertical-align: top;
  // position: relative;
  .trigger-wrapper {
    display: block;
    height: 100%;
  }
}
.woo-popover-content {
  border: $border-color;
  padding: 16px;
  margin-bottom: 16px;
  position: absolute;
  z-index: 99;
  background-color: #fff;
  transform: translateY(calc(-100% - 8px));
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);
  .woo-popover-arrow {
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: #fff;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);
    position: absolute;
    bottom: -8px;
    left: 0;
    // z-index: 99;
    display: block;
  }
}
</style>

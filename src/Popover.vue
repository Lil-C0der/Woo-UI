<template>
  <div class="woo-popover">
    <div
      ref="contentWrapper"
      class="woo-popover-content"
      :style="contentStyle"
      v-show="visible"
      @click.stop
    >
      <slot></slot>
      <div class="woo-popover-arrow"></div>
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
      arrowLeft: null,
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
      const { width, height, top, left } = triggerEl.getBoundingClientRect();
      this.wrapperTop = top + window.scrollY;
      this.$nextTick(() => {
        const wrapperEl = this.$refs.contentWrapper;
        const { width: wrapperWidth } = wrapperEl.getBoundingClientRect();
        this.wrapperLeft = left - (wrapperWidth - width) / 2 + window.scrollX;
        this.arrowLeft = wrapperWidth / 2;
        console.log(wrapperWidth);
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
  },
};
</script>

<style lang="scss" scoped>
$border-color: #dedde2;
.woo-popover {
  display: inline-block;
  vertical-align: top;
  .trigger-wrapper {
    display: block;
    height: 100%;
  }
}
.woo-popover-content {
  border: 1px solid $border-color;
  border-radius: 4px;
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
    display: block;
    filter: drop-shadow(0 3px 2px rgba(0, 0, 0, 0.15));
    border: 8px solid transparent;
    border-top-color: #dedde2;
    border-bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-100%);
    bottom: -8px;
    z-index: 97;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-color: #fff;
      border-bottom: 0;
      position: absolute;
      bottom: 1px;
      margin-left: -8px;
    }
  }
}
</style>

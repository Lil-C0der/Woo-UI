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
      @click="handlePopoverClick"
    >
      <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "woo-popover",
  model: {
    prop: "",
  },
  data() {
    return {
      visible: false,
      wrapperLeft: null,
      wrapperTop: null,
      wrapperWidth: null,
      arrowLeft: null,
    };
  },
  props: {},
  methods: {
    // 关闭 popover 文本框
    closePopover() {
      this.visible = false;
      this.$emit("hide");
      // 移除 document 的事件监听
      document.removeEventListener("click", this.closePopover);
    },
    // 初始化文本框的位置
    initPopoverPosition() {
      const triggerEl = this.$refs.triggerWrapper;
      const { width, height, top, left } = triggerEl.getBoundingClientRect();
      this.wrapperTop = top + window.scrollY;
      this.$nextTick(() => {
        // 确定文本框 arrow 的位置
        const wrapperEl = this.$refs.contentWrapper;
        const { width: wrapperWidth } = wrapperEl.getBoundingClientRect();
        this.wrapperLeft = left - (wrapperWidth - width) / 2 + window.scrollX;
        this.arrowLeft = wrapperWidth / 2;
      });
    },
    handlePopoverClick() {
      document.removeEventListener("click", this.closePopover);
      this.visible = !this.visible;
      this.initPopoverPosition();
      if (this.visible) {
        this.$emit("show");
        // 将文本框插入到最后
        document.body.appendChild(this.$refs.contentWrapper);
        setTimeout(() => {
          // 添加 document 事件监听器 点击页面其他地方关闭文本框
          document.addEventListener("click", this.closePopover);
        }, 0);
      } else {
        this.$emit("hide");
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
  font-size: 14px;
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

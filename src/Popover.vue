<template>
  <div class="woo-popover">
    <div
      ref="contentWrapper"
      class="woo-popover-content"
      :style="contentStyle"
      v-show="visibleCopy"
      @click.stop
    >
      <slot></slot>
      <div class="woo-popover-arrow"></div>
    </div>
    <span
      ref="triggerWrapper"
      class="trigger-wrapper"
      @click="handleTriggerClick"
    >
      <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "woo-popover",
  model: {
    prop: "visible",
    event: "visible-change",
  },
  data() {
    return {
      visibleCopy: false,
      wrapperLeft: null,
      wrapperTop: null,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 初始化文本框的位置
    initPopoverPosition() {
      const {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.wrapperTop = top + window.scrollY;
      this.$nextTick(() => {
        // 确定文本框的位置
        const {
          width: wrapperWidth,
        } = this.$refs.contentWrapper.getBoundingClientRect();
        this.wrapperLeft = left - (wrapperWidth - width) / 2 + window.scrollX;
      });
    },
    //  触发器被点击
    handleTriggerClick() {
      this.visibleCopy = !this.visibleCopy;
    },
    // 点击空白处 关闭 popover 文本框
    hidePopover() {
      this.visibleCopy = false;
    },
    // 显示文本框
    showPopover() {
      // 将文本框插入到最后
      document.body.appendChild(this.$refs.contentWrapper);
      setTimeout(() => {
        // 添加 document 事件监听器 点击页面其他地方关闭文本框
        document.addEventListener("click", this.hidePopover);
        this.$emit("show");
      }, 0);
    },
    handleVisibleChange() {
      if (this.visibleCopy) {
        this.initPopoverPosition();
        this.showPopover();
      } else {
        // 移除 document 的事件监听
        document.removeEventListener("click", this.hidePopover);
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
  watch: {
    visible: function(newVal) {
      this.visibleCopy = newVal;
    },
    visibleCopy: function(newVal) {
      this.$emit("visible-change", newVal);
      this.handleVisibleChange();
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
    display: inline-block;
  }
}
.woo-popover-content {
  border: 1px solid $border-color;
  border-radius: 4px;
  padding: 1em;
  width: 14.3em;
  margin-top: -2px;
  position: absolute;
  z-index: 99;
  background-color: #fff;
  transform: translateY(calc(-100% - 8px));
  font-size: 14px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  .woo-popover-arrow,
  .woo-popover-arrow::after {
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 0;
    position: absolute;
    z-index: 97;
  }
  .woo-popover-arrow {
    border-top-color: #dedde2;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      content: "";
      border-top-color: #fff;
      bottom: 1px;
      margin-left: -8px;
    }
  }
}
</style>

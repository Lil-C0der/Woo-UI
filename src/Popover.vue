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
      <div class="woo-popover-arrow" :class="`arrow-${placement}`"></div>
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
    placement: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "left", "right"].indexOf(val) !== -1;
      },
    },
  },
  methods: {
    // 初始化文本框的位置
    initPopoverPosition() {
      this.$nextTick(() => {
        const { placement } = this;
        const { contentWrapper, triggerWrapper } = this.$refs;
        const {
          width,
          height,
          top,
          bottom,
          left,
          right,
        } = triggerWrapper.getBoundingClientRect();
        const {
          width: wrapperWidth,
          height: wrapperHeight,
        } = contentWrapper.getBoundingClientRect();
        // 确定文本框的位置
        if (["top", "bottom"].indexOf(placement) !== -1) {
          this.wrapperLeft = left - (wrapperWidth - width) / 2 + window.scrollX;
          this.wrapperTop =
            eval(placement) +
            window.scrollY +
            (placement === "top" ? -wrapperHeight - 10 : 10);
        } else {
          this.wrapperTop = top - (wrapperHeight - height) / 2 + window.scrollY;
          this.wrapperLeft =
            eval(placement) +
            window.scrollX +
            (placement === "left" ? -wrapperWidth - 10 : 10);
        }
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
  position: absolute;
  z-index: 99;
  background-color: #fff;
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
    &::after {
      content: "";
      border-top-color: #fff;
      bottom: 1px;
      margin-left: -8px;
    }
    &.arrow-top,
    &.arrow-bottom {
      left: 50%;
      transform: translateX(-50%);
    }
    &.arrow-top {
      bottom: -8px;
    }
    &.arrow-bottom {
      top: -8px;
      transform: translateX(-50%) rotate(-180deg);
    }
    &.arrow-left,
    &.arrow-right {
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
    &.arrow-left {
      right: -12px;
      transform: translateY(-50%) rotate(-90deg);
    }
    &.arrow-right {
      left: -12px;
    }
  }
}
</style>

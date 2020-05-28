<template>
  <div class="woo-toast" :style="toastStyle" :class="toastClass">
    <div
      class="woo-toast-text"
      v-if="dangerouslyUseHTMLString"
      v-html="$slots.default"
    ></div>
    <div v-else class="woo-toast-text">
      <span>
        <slot></slot>
      </span>
    </div>
    <div v-if="closable" class="toast-close-button" @click="handleCloseClick">
      <span>
        {{ closeOption.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      timer: null,
    };
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false,
    },
    // 关闭的延时 为0时则不会自动关闭
    delay: {
      type: Number,
      default: 3000,
    },
    // 关闭按钮的配置 包括提示文本和一个回调函数
    closeOption: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          // 默认的回调函数
          callback: () => {},
        };
      },
    },
    offset: {
      type: String,
      default: "16px",
    },
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "middle"].indexOf(val) !== -1;
      },
    },
  },
  computed: {
    toastStyle() {
      if (["top", "bottom"].indexOf(this.position) !== -1) {
        return {
          [this.position]: this.offset,
        };
      } else
        return {
          // middle
          top: "50%",
          transform: "translate(-50%, -50%)",
        };
    },
    toastClass() {
      if (["top", "bottom"].indexOf(this.position) !== -1) {
        return `${this.position}-toast`;
      } else return "fade-in";
    },
  },
  methods: {
    close() {
      if (typeof this.closeOption.callback === "function") {
        // 关闭时执行回调函数
        this.closeOption?.callback(this); // this 即为当前的 toast 实例
      }
      this.$el.remove();
      this.$emit("beforeDestroyToast");
      this.$destroy();
    },
    handleCloseClick() {
      this.close();
    },
    execAutoClose() {
      this.timer = setTimeout(() => {
        this.close();
      }, this.delay);
    },
  },
  mounted() {
    if (this.delay) {
      this.execAutoClose();
      // 在 beforeDestroy 生命周期函数中清除定时器
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(this.timer);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "styles/var";

.woo-toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  transition: all 0.6s;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  border-radius: 4px;
  background-color: $toast-bg;
  box-shadow: $toast-box-shadow;
  z-index: 999;
  &.top-toast {
    animation: top-slide-in 0.6s;
  }
  &.bottom-toast {
    animation: bottom-slide-in 0.6s;
  }
  &.fade-in {
    animation: fade-in 0.6s;
  }
  .woo-toast-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  }
  .toast-close-button {
    flex-shrink: 0;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #666;
    cursor: default;
  }
}
</style>

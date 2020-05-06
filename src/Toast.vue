<template>
  <div class="woo-toast" :style="toastStyle" :class="toastClass">
    <div
      class="woo-toast-text"
      v-if="dangerouslyUseHTMLString"
      v-html="$slots.default"
    ></div>
    <div class="woo-toast-text" v-else>
      <span>
        <slot></slot>
      </span>
    </div>
    <div v-if="closable" class="toast-close-text" @click="handleCloseClick">
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
    autoClose: {
      type: Boolean,
      default: true,
    },
    // 关闭的延时
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
          transform: "translateY(-50%)",
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
      // 关闭时执行回调函数
      if (typeof this.closeOption.callback === "function") {
        this.closeOption?.callback(this); // this 即为当前的 toast 实例
      }
      this.$el.remove();
      this.$emit("beforeClose");
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
    if (this.autoClose) {
      this.execAutoClose();
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(this.timer);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes top-slide-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes bottom-slide-in {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
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
  box-shadow: 0 0 3px 0 rgba($color: #000000, $alpha: 0.5);
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
  .toast-close-text {
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

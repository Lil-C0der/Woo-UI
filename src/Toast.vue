<template>
  <div class="woo-toast" :style="toastStyle">
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
    <div class="toast-close-text" @click="handleCloseClick">
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
      msg: "",
    };
  },
  props: {
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
    top: {
      type: String,
      default: "24px",
    },
  },
  computed: {
    toastStyle() {
      return {
        top: this.top,
      };
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    handleCloseClick() {
      this.close();
      if (typeof this.closeOption.callback === "function") {
        this.closeOption?.callback(this); // this即为当前的toast实例
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.delay);
      }
    },
  },
  mounted() {
    this.execAutoClose();
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.woo-toast {
  font-size: $font-size;
  min-height: $toast-min-height;
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

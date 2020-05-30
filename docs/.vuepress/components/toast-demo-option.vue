<template>
  <div class="demo">
    <p>带有关闭按钮的提示</p>
    <woo-button @click="showToast1">显示提示</woo-button>
    <p>配置关闭按钮的文本内容，以及关闭之后的回调函数</p>
    <woo-button @click="showToast2">显示提示</woo-button>
    <p>设置关闭的延时，单位是毫秒</p>
    <woo-button @click="showToast3">显示提示</woo-button>
    <p>设置距离原始位置的偏移</p>
    <woo-button @click="showToast4">显示提示</woo-button>
    <p>使用 HTML 片段</p>
    <woo-button @click="showToast5">显示提示</woo-button>
    <p>
      <strong>
        注意：在网站上动态渲染 HTML 是非常危险的，这样可能导致
        <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a>
        攻击，请务必确保内容是可信的，永远不要将用户提交的内容作为 msg 参数
      </strong>
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import WooButton from "../../../src/Button/Button.vue";
import plugin from "../../../src/plugin";
Vue.use(plugin);

export default {
  components: {
    WooButton,
  },
  methods: {
    showToast1() {
      this.$toast("点击右边的按钮关闭", { closable: true });
    },
    showToast2() {
      this.$toast("Live long and prosper", {
        closable: true,
        closeOption: {
          text: "🖖",
          callback: () => {
            console.log("Live long and prosper!! ");
          },
        },
      });
    },
    showToast3() {
      this.$toast("这条提示一秒后会自动关闭", { closable: true, delay: 1000 });
    },
    showToast4() {
      this.$toast("这条提示距离页面底部 48 像素", {
        position: "bottom",
        offset: "48px",
      });
    },
    showToast5() {
      this.$toast(`<i>这是 HTML 片段<i>`, {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demo {
  padding-top: 10px;
}
</style>

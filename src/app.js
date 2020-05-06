import Vue from "vue";

import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input.vue";
import Row from "./Row.vue";
import Col from "./Col.vue";
import Layout from "./Layout.vue";
import Content from "./Content.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Sider from "./Sider.vue";
import Toast from "./Toast.vue";

import WooPlugin from "./plugin";

Vue.component("woo-button", Button);
Vue.component("woo-icon", Icon);
Vue.component("woo-button-group", ButtonGroup);
Vue.component("woo-input", Input);
Vue.component("woo-row", Row);
Vue.component("woo-col", Col);
Vue.component("woo-layout", Layout);
Vue.component("woo-header", Header);
Vue.component("woo-content", Content);
Vue.component("woo-footer", Footer);
Vue.component("woo-sider", Sider);
Vue.component("woo-toast", Toast);

Vue.use(WooPlugin);

const app = new Vue({
  el: "#app",
  data: {
    isCollapsed: false,
  },
  methods: {
    handleClick() {
      this.msg = "321";
      // this.isCollapsed = !this.isCollapsed;
      this.$toast("toast!!", {
        closable: true,
        autoClose: false,
        closeOption: {
          text: "关闭",
          callback: (toast) => {
            console.log(toast);
          },
        },
        // position: "top",
        // position: "bottom",
        position: "middle",
      });
    },
  },
});

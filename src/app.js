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
    handleClick1() {
      this.$toast("top", {
        closable: true,
        delay: 2000,
        position: "top",
        offset: "100px",
      });
    },
    handleClick2() {
      this.$toast("middle", {
        closable: true,
        position: "middle",
      });
    },
    handleClick3() {
      this.$toast("bottom", {
        closable: true,
        position: "bottom",
        offset: "100px",
      });
    },
  },
});

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
import Tabs from "./Tabs.vue";
import TabsHead from "./TabsHead.vue";
import TabsItem from "./TabsItem.vue";
import TabsPane from "./TabsPane.vue";
import TabsBody from "./TabsBody.vue";
import Popover from "./Popover.vue";

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
Vue.component("woo-tabs", Tabs);
Vue.component("woo-tabs-head", TabsHead);
Vue.component("woo-tabs-item", TabsItem);
Vue.component("woo-tabs-pane", TabsPane);
Vue.component("woo-tabs-body", TabsBody);
Vue.component("woo-popover", Popover);

Vue.use(WooPlugin);

const app = new Vue({
  el: "#app",
  data: {
    // showPop: false,
    showPop: true,
    key: "2",
  },
  methods: {
    popShow() {
      console.log("show");
    },
    popHide() {
      console.log("hide");
    },
    toggle() {
      this.showPop = !this.showPop;
      // console.log(showPop);
    },

    xxx() {
      console.log("xx");
    },
  },
  mounted() {
    // console.log(this.$refs.popRef.$el);
    const callback = () => {
      console.log("enter");
    };
    const callback2 = () => {
      console.log("leave");
    };
    const contentEl = this.$refs.test.$refs.contentWrapper;
    const triggerEl = this.$refs.test.$refs.triggerWrapper;
    const myEvt1 = new Event("mouseenter");
    const myEvt2 = new Event("mouseleave");
    triggerEl.addEventListener("mouseenter", callback);
    triggerEl.addEventListener("mouseleave", callback2);
    triggerEl.dispatchEvent(myEvt1);
    this.$nextTick(() => {
      console.log(contentEl);
      // console.log(window.getComputedStyle(contentEl).display);
      triggerEl.dispatchEvent(myEvt2);
      setTimeout(() => {
        console.log("123");
        console.log(contentEl);
        // console.log(window.getComputedStyle(contentEl).display);
      }, 800);
    });
  },
});

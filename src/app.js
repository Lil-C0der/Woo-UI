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
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

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
Vue.component("woo-collapse", Collapse);
Vue.component("woo-collapse-item", CollapseItem);

Vue.use(WooPlugin);

const app = new Vue({
  el: "#app",
  data: {
    showPop: true,
    key: ["2", "3"],
    // key: "2",
    key2: "title 2",
  },
  methods: {
    toggle() {
      // this.key = ["3"];
      this.key = ["1", "4"];
      // this.key = "3";
    },
    toggle2() {
      this.key2 = "title 1";
    },
    xxx(e) {
      console.log(e);

      // console.log("xx");
    },
    yyy(e) {
      console.log("tab " + e);
    },
  },
});

import Vue from "vue";

import Button from "./Button/Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./Button/ButtonGroup.vue";
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
import Cascader from "./Cascader";
// import CascaderMenuItem from "./CascaderMenuItem";

import WooPlugin from "./plugin";

import Demo from "./Demo.vue";

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
Vue.component("woo-cascader", Cascader);
// Vue.component("woo-cascader-menu-item", CascaderMenuItem);

Vue.use(WooPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Demo),
}).$mount("#app");

import Vue from "vue";

import Button from "./Button/Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./Button/ButtonGroup.vue";
import Input from "./Input.vue";
import Row from "./Grid/Row.vue";
import Col from "./Grid/Col.vue";
import Layout from "./Layout/Layout.vue";
import Content from "./Layout/Content.vue";
import Header from "./Layout/Header.vue";
import Footer from "./Layout/Footer.vue";
import Sider from "./Layout/Sider.vue";
import Toast from "./Toast.vue";
import Tabs from "./Tabs/Tabs.vue";
import TabsHead from "./Tabs/TabsHead.vue";
import TabsItem from "./Tabs/TabsItem.vue";
import TabsPane from "./Tabs/TabsPane.vue";
import TabsBody from "./Tabs/TabsBody.vue";
import Popover from "./Popover.vue";
import Collapse from "./Collapse/Collapse.vue";
import CollapseItem from "./Collapse/CollapseItem.vue";
import Cascader from "./Cascader/Cascader";
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

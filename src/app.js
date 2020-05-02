import Vue from "vue";

import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input.vue";
import Row from "./Row.vue";
import Col from "./Col.vue";

Vue.component("woo-button", Button);
Vue.component("woo-icon", Icon);
Vue.component("woo-button-group", ButtonGroup);
Vue.component("woo-input", Input);
Vue.component("woo-row", Row);
Vue.component("woo-col", Col);

const app = new Vue({
  el: "#app",
  data: {
    isLoading1: false,
    isLoading2: false,
    isLoading3: false,
    msg: "测试",
    msg2: "张三",
  },
  methods: {
    inputChange(value) {
      this.msg2 = value;
    },
  },
});

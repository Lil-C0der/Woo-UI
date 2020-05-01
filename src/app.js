import Vue from "vue";

import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input.vue";

Vue.component("woo-button", Button);
Vue.component("woo-icon", Icon);
Vue.component("woo-button-group", ButtonGroup);
Vue.component("woo-input", Input);

const app = new Vue({
  el: "#app",
  data: {
    isLoading1: false,
    isLoading2: false,
    isLoading3: false,
    msg: "测试",
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
  },
});

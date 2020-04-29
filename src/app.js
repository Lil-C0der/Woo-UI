import Vue from "vue";
import Button from "../Button.vue";
import Icon from "../Icon.vue";

Vue.component("woo-button", Button);
Vue.component("woo-icon", Icon);

const app = new Vue({
  el: "#app",
});

<template>
  <div class="demo">
    <woo-button @click="$toast('这是一条提示')">顶部弹出</woo-button>
    <woo-button @click="$toast('这是一条提示', { position: 'middle' })"
      >中间弹出</woo-button
    >
    <woo-button @click="$toast('这是一条提示', { position: 'bottom' })"
      >底部弹出</woo-button
    >
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

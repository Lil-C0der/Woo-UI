<template>
  <div class="demo">
    <woo-menu>
      <woo-menu-item index="1">处理中心</woo-menu-item>
      <woo-submenu index="2">
        <template #title>工作台</template>
        <woo-menu-item index="2-1">选项1</woo-menu-item>
        <woo-menu-item index="2-2">选项2</woo-menu-item>
        <woo-menu-item index="2-3">选项3</woo-menu-item>
        <woo-menu-item index="2-4">选项4</woo-menu-item>
      </woo-submenu>
      <woo-menu-item index="3">消息中心</woo-menu-item>
      <woo-menu-item index="4">订单管理</woo-menu-item>
    </woo-menu>
  </div>
</template>

<script>
import WooMenu from "./Menu/Menu";
import WooMenuItem from "./Menu/MenuItem";
import WooSubmenu from "./Menu/Submenu";

export default {
  components: {
    WooMenu,
    WooMenuItem,
    WooSubmenu,
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

.box {
  color: #fefefe;
  text-align: center;
  line-height: 150px;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>

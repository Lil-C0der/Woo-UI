<template>
  <div class="demo">
    <div class="block">
      <h5>这个菜单的宽度是200px</h5>
      <woo-menu
        selected-index="4"
        vertical
        @open="handleOpen"
        @close="handleClose"
        @select="handleItemSelect"
      >
        <woo-menu-item index="1">处理中心</woo-menu-item>
        <woo-submenu index="2">
          <template #title>工作台</template>
          <woo-menu-item index="2-1">选项1</woo-menu-item>
          <woo-menu-item index="2-2">选项2</woo-menu-item>
          <woo-menu-item index="2-3">选项3</woo-menu-item>
          <woo-submenu index="2-4">
            <template #title>选项4</template>
            <woo-menu-item index="2-4-1">选项4-1</woo-menu-item>
            <woo-menu-item index="2-4-2">选项4-2</woo-menu-item>
          </woo-submenu>
        </woo-submenu>
        <woo-menu-item index="3">消息中心</woo-menu-item>
        <woo-menu-item index="4">订单管理</woo-menu-item>
      </woo-menu>
    </div>

    <div class="block">
      <h5>这个菜单的宽度是320px</h5>
      <woo-menu
        selected-index="3"
        vertical
        trigger="hover"
        width="320px"
        @open="handleOpen"
        @close="handleClose"
        @select="handleItemSelect"
      >
        <woo-menu-item index="1">处理中心</woo-menu-item>
        <woo-submenu index="2">
          <template #title>工作台</template>
          <woo-menu-item index="2-1">选项1</woo-menu-item>
          <woo-menu-item index="2-2">选项2</woo-menu-item>
          <woo-menu-item index="2-3">选项3</woo-menu-item>
          <woo-submenu index="2-4">
            <template #title>选项4</template>
            <woo-menu-item index="2-4-1">选项4-1</woo-menu-item>
            <woo-menu-item index="2-4-2">选项4-2</woo-menu-item>
          </woo-submenu>
        </woo-submenu>
        <woo-menu-item index="3">消息中心</woo-menu-item>
        <woo-menu-item index="4">订单管理</woo-menu-item>
      </woo-menu>
    </div>
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
  methods: {
    handleOpen(keyPath) {
      console.log(keyPath);
    },
    handleClose(keyPath) {
      console.log(keyPath);
    },
    handleItemSelect(index) {
      console.log(index);
    },
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

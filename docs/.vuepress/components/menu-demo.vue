<template>
  <div class="demo">
    <p>点击展开 当前选中项的 index 是 {{ selectedIndex1 }}</p>
    <woo-menu v-model="selectedIndex1" @click="handleItemClick">
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

    <p>hover 展开 当前选中项的 index 是 {{ selectedIndex2 }}</p>
    <woo-menu v-model="selectedIndex2" trigger="hover" @click="handleItemClick">
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
</template>

<script>
import WooMenu from "../../../src/Menu/Menu";
import WooMenuItem from "../../../src/Menu/MenuItem";
import WooSubmenu from "../../../src/Menu/Submenu";

export default {
  components: {
    WooMenu,
    WooMenuItem,
    WooSubmenu,
  },
  data() {
    return {
      selectedIndex1: "2-2",
      selectedIndex2: "2-4-2",
    };
  },
  methods: {
    handleItemClick({ item, index, path }) {
      console.log(item, index, path);
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
</style>

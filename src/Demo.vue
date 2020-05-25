<template>
  <div>
    <woo-tabs>
      <woo-tabs-head>
        <woo-tabs-item name="1">1</woo-tabs-item>
        <woo-tabs-item name="2">2</woo-tabs-item>
        <woo-tabs-item name="3">3</woo-tabs-item>
      </woo-tabs-head>
      <woo-tabs-body>
        <woo-tabs-pane name="1">A</woo-tabs-pane>
        <woo-tabs-pane name="2">A</woo-tabs-pane>
        <woo-tabs-pane name="3">A</woo-tabs-pane>
      </woo-tabs-body>
    </woo-tabs>

    <div>
      {{ idx }}
    </div>
    <woo-menu v-model="idx" @select="xxx">
      <woo-menu-item index="1">处理中心</woo-menu-item>
      <woo-sub-menu>
        <template #title>我的工作台</template>
        <woo-menu-item index="2-1">选项1</woo-menu-item>
        <woo-menu-item index="2-2">选项2</woo-menu-item>
        <woo-menu-item index="2-3">选项3</woo-menu-item>
        <woo-sub-menu>
          <template #title>选项4</template>
          <woo-menu-item index="4-1">选项4-1111111</woo-menu-item>
          <woo-menu-item index="4-2">选项4-2222222</woo-menu-item>
          <woo-sub-menu>
            <template #title>选项5</template>
            <woo-menu-item index="5-1">选项5-1111111</woo-menu-item>
            <woo-menu-item index="5-2">选项5-2222222</woo-menu-item>
          </woo-sub-menu>
        </woo-sub-menu>
      </woo-sub-menu>
      <woo-menu-item index="3">订单中心</woo-menu-item>
    </woo-menu>
  </div>
</template>

<script>
import WooCascader from "./Cascader/Cascader";
import WooButton from "./Button/Button.vue";
import WooIcon from "./Icon.vue";
import WooToast from "./Toast.vue";
import WooPlugin from "./plugin";
import WooCollapse from "./Collapse/Collapse";
import WooCollapseItem from "./Collapse/CollapseItem";
import WooPopover from "./Popover";

import WooSlide from "./Slide/Slide";
import WooSlideItem from "./Slide/SlideItem";
import WooMenu from "./Menu/Menu";
import WooMenuItem from "./Menu/MenuItem";
import WooSubMenu from "./Menu/SubMenu";

import WooLayout from "./Layout/Layout";
import WooHeader from "./Layout/Header";
import WooContent from "./Layout/Content";
import WooFooter from "./Layout/Footer";
import WooSider from "./Layout/Sider";

import WooTabs from "./Tabs/Tabs";
import WooTabsHead from "./Tabs/TabsHead";
import WooTabsBody from "./Tabs/TabsBody";
import WooTabsItem from "./Tabs/TabsItem";
import WooTabsPane from "./Tabs/TabsPane";

export default {
  methods: {},
  data() {
    return {
      // idx: ["3"],
      idx: ["2-1"],
    };
  },
  methods: {
    xxx(index) {
      console.log(index);
    },
    yyy(newVal, oldVal) {
      // console.log(newVal, oldVal);
    },
  },
  mounted() {},
  components: {
    WooButton,
    WooCascader,
    WooCollapse,
    WooCollapseItem,
    WooIcon,
    WooSlide,
    WooSlideItem,
    WooMenu,
    WooMenuItem,
    WooSubMenu,

    WooLayout,
    WooSider,
    WooContent,
    WooFooter,
    WooHeader,

    WooTabs,
    WooTabsHead,
    WooTabsBody,
    WooTabsItem,
    WooTabsPane,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/var";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before {
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}
#app {
  padding: 20px;
}
html {
  font-size: $font-size;
}

.woo-slide {
  .box {
    height: 220px;
    // border: 1px solid green;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    &.0 {
      transform: translateX(0);
    }
    &.w {
      transform: translateX(280px);
    }
    &.2w {
      transform: translateX(560px);
    }
    &.3w {
      transform: translateX(300%);
    }
  }
}
</style>

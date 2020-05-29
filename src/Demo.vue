<template>
  <woo-layout>
    <woo-sider reverseArrow width="280px">
      <woo-menu
        trigger="click"
        v-model="idx"
        @select="xxx"
        @click="yyy"
        @open="zzz"
        @close="ccc"
        vertical
      >
        <woo-menu-item index="1">处理中心</woo-menu-item>
        <woo-submenu index="gongzuotai">
          <template #title>我的工作台</template>
          <woo-menu-item index="2-1">选项1</woo-menu-item>
          <woo-menu-item index="2-2">选项2</woo-menu-item>
          <woo-menu-item index="2-3">选项3</woo-menu-item>
          <woo-submenu index="4">
            <template #title>选项4</template>
            <woo-menu-item index="4-1">选项4-1111111</woo-menu-item>
            <woo-menu-item index="4-2">选项4-2222222</woo-menu-item>
            <woo-submenu index="5">
              <template #title>选项5</template>
              <woo-menu-item index="5-1">选项5-1111111</woo-menu-item>
              <woo-menu-item index="5-2">选项5-2222222</woo-menu-item>
            </woo-submenu>
          </woo-submenu>
        </woo-submenu>
        <woo-menu-item index="3">订单中心</woo-menu-item>
        <woo-submenu index="5">
          <template #title>选项6</template>
          <woo-menu-item index="6-1">选项6-1111111</woo-menu-item>
          <woo-menu-item index="6-2">选项6-2222222</woo-menu-item>
        </woo-submenu>
      </woo-menu>
    </woo-sider>

    <woo-content>
      <woo-tabs>
        <woo-tabs-head>
          <woo-tabs-item name="1st">1</woo-tabs-item>
          <woo-tabs-item name="2nd">2</woo-tabs-item>
          <woo-tabs-item name="3rd">3</woo-tabs-item>
        </woo-tabs-head>
        <woo-tabs-body>
          <woo-tabs-pane name="1st">A</woo-tabs-pane>
          <woo-tabs-pane name="2nd">B</woo-tabs-pane>
          <woo-tabs-pane name="3rd">C</woo-tabs-pane>
        </woo-tabs-body>
      </woo-tabs>
      <woo-popover v-model="v" trigger="click" placement="right">
        <template #content>123456789</template>
        <woo-button>click</woo-button>
      </woo-popover>

      <woo-slide :auto-play="false" height="200px" @change="change">
        <woo-slide-item name="a" class="box">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box">
          <h3>4</h3>
        </woo-slide-item>
      </woo-slide>

      <woo-collapse :active-name="['key 2']">
        <woo-collapse-item name="key 1" title="test">test 1</woo-collapse-item>
        <woo-collapse-item name="key 2" title="test">test 2</woo-collapse-item>
        <woo-collapse-item name="key 3" title="test">test 3</woo-collapse-item>
      </woo-collapse>

      <woo-cascader :source="source" v-model="selected"> </woo-cascader>

      <div>
        {{ idx }}
      </div>
      <woo-button @click="idx = '6-1'">toggle</woo-button>
      <woo-button @click="show">show</woo-button>

      <woo-menu
        trigger="click"
        @select="xxx"
        @click="yyy"
        @open="zzz"
        @close="ccc"
      >
        <woo-menu-item index="1">处理中心</woo-menu-item>
        <woo-submenu index="gongzuotai">
          <template #title>我的工作台</template>
          <woo-menu-item index="2-1">选项1</woo-menu-item>
          <woo-menu-item index="2-2">选项2</woo-menu-item>
          <woo-menu-item index="2-3">选项3</woo-menu-item>
          <woo-submenu index="4">
            <template #title>选项4</template>
            <woo-menu-item index="4-1">选项4-1111111</woo-menu-item>
            <woo-menu-item index="4-2">选项4-2222222</woo-menu-item>
            <woo-submenu index="5">
              <template #title>选项5</template>
              <woo-menu-item index="5-1">选项5-1111111</woo-menu-item>
              <woo-menu-item index="5-2">选项5-2222222</woo-menu-item>
            </woo-submenu>
          </woo-submenu>
        </woo-submenu>
        <woo-menu-item index="3">订单中心</woo-menu-item>
        <woo-submenu index="5">
          <template #title>选项6</template>
          <woo-menu-item index="6-1">选项6-1111111</woo-menu-item>
          <woo-menu-item index="6-2">选项6-2222222</woo-menu-item>
        </woo-submenu>
      </woo-menu>
      <p>1234564646512345646465123456464651234564646512345646465</p>
    </woo-content>
  </woo-layout>
</template>

<script>
import Vue from "vue";

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
import WooSubmenu from "./Menu/Submenu";

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

Vue.use(WooPlugin);

export default {
  methods: {},
  data() {
    return {
      selected: ["zhinan", "shejiyuanze", "yizhi"],

      source: [
        {
          id: "zhinan",
          name: "指南",
          children: [
            {
              id: "shejiyuanze",
              name: "设计原则",
              children: [
                {
                  id: "yizhi",
                  name: "一致",
                },
                {
                  id: "fankui",
                  name: "反馈",
                },
                {
                  id: "xiaolv",
                  name: "效率",
                },
                {
                  id: "kekong",
                  name: "可控",
                },
              ],
            },
            {
              id: "daohang",
              name: "导航",
              children: [
                {
                  id: "cexiangdaohang",
                  name: "侧向导航",
                },
                {
                  id: "dingbudaohang",
                  name: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          id: "zujian",
          name: "组件",
          children: [
            {
              id: "basic",
              name: "Basic",
              children: [
                {
                  id: "layout",
                  name: "Layout 布局",
                },
                {
                  id: "color",
                  name: "Color 色彩",
                },
                {
                  id: "typography",
                  name: "Typography 字体",
                },
                {
                  id: "icon",
                  name: "Icon 图标",
                },
                {
                  id: "button",
                  name: "Button 按钮",
                },
              ],
            },
            {
              id: "form",
              name: "Form",
              children: [
                {
                  id: "radio",
                  name: "Radio 单选框",
                },
                {
                  id: "checkbox",
                  name: "Checkbox 多选框",
                },
                {
                  id: "input",
                  name: "Input 输入框",
                },
                {
                  id: "input-number",
                  name: "InputNumber 计数器",
                },
                {
                  id: "select",
                  name: "Select 选择器",
                },
                {
                  id: "cascader",
                  name: "Cascader 级联选择器",
                },
                {
                  id: "switch",
                  name: "Switch 开关",
                },
                {
                  id: "slider",
                  name: "Slider 滑块",
                },
                {
                  id: "time-picker",
                  name: "TimePicker 时间选择器",
                },
                {
                  id: "date-picker",
                  name: "DatePicker 日期选择器",
                },
                {
                  id: "datetime-picker",
                  name: "DateTimePicker 日期时间选择器",
                },
                {
                  id: "upload",
                  name: "Upload 上传",
                },
                {
                  id: "rate",
                  name: "Rate 评分",
                },
                {
                  id: "form",
                  name: "Form 表单",
                },
              ],
            },
            {
              id: "data",
              name: "Data",
              children: [
                {
                  id: "table",
                  name: "Table 表格",
                },
                {
                  id: "tag",
                  name: "Tag 标签",
                },
                {
                  id: "progress",
                  name: "Progress 进度条",
                },
                {
                  id: "tree",
                  name: "Tree 树形控件",
                },
                {
                  id: "pagination",
                  name: "Pagination 分页",
                },
                {
                  id: "badge",
                  name: "Badge 标记",
                },
              ],
            },
            {
              id: "notice",
              name: "Notice",
              children: [
                {
                  id: "alert",
                  name: "Alert 警告",
                },
                {
                  id: "loading",
                  name: "Loading 加载",
                },
                {
                  id: "message",
                  name: "Message 消息提示",
                },
                {
                  id: "message-box",
                  name: "MessageBox 弹框",
                },
                {
                  id: "notification",
                  name: "Notification 通知",
                },
              ],
            },
            {
              id: "navigation",
              name: "Navigation",
              children: [
                {
                  id: "menu",
                  name: "NavMenu 导航菜单",
                },
                {
                  id: "tabs",
                  name: "Tabs 标签页",
                },
                {
                  id: "breadcrumb",
                  name: "Breadcrumb 面包屑",
                },
                {
                  id: "dropdown",
                  name: "Dropdown 下拉菜单",
                },
                {
                  id: "steps",
                  name: "Steps 步骤条",
                },
              ],
            },
            {
              id: "others",
              name: "Others",
              children: [
                {
                  id: "dialog",
                  name: "Dialog 对话框",
                },
                {
                  id: "tooltip",
                  name: "Tooltip 文字提示",
                },
                {
                  id: "popover",
                  name: "Popover 弹出框",
                },
                {
                  id: "card",
                  name: "Card 卡片",
                },
                {
                  id: "carousel",
                  name: "Carousel 走马灯",
                },
                {
                  id: "collapse",
                  name: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          id: "ziyuan",
          name: "资源",
          children: [
            {
              id: "axure",
              name: "Axure Components",
            },
            {
              id: "sketch",
              name: "Sketch Templates",
            },
            {
              id: "jiaohu",
              name: "组件交互文档",
            },
          ],
        },
      ],

      idx: "2-1",
      v: true,
    };
  },
  methods: {
    xxx(index) {
      console.log("select: " + index);
    },
    yyy(obj) {
      console.log(obj);
    },
    aaa(index) {
      // console.log(index);
    },
    zzz(path) {
      // console.log('打开了');
    },
    show() {
      this.$toast("issa toast", {
        closable: true,
        // delay: 0,
        closeOption: {
          text: "close",
          callback: () => {
            console.log("closing");
          },
        },
      });
    },
    change(a, b) {
      console.log(a, b);
    },
    ccc() {
      console.log("隐藏了");
    },
  },
  mounted() {},
  components: {
    WooButton,
    WooCascader,
    WooCollapse,
    WooCollapseItem,
    WooPopover,
    WooIcon,
    WooSlide,
    WooSlideItem,
    WooMenu,
    WooMenuItem,
    WooSubmenu,

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
body {
  padding: 0;
  margin: 0;
}
html {
  font-size: $font-size;
}

.woo-slide {
  .box {
    height: 200px;
    // border: 1px solid green;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

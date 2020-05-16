<template>
  <div style="padding:100px">
    <p>{{ selected.map((n) => n.name) }}</p>
    <woo-cascader
      v-model="selected"
      @change="xxx"
      @click="yyy"
      :source.sync="source"
    ></woo-cascader>

    <div style="margin:100px">
      <woo-popover>
        <template v-slot:content>
          <span>pop</span>
        </template>
        <woo-button @click="yyy">button</woo-button>
      </woo-popover>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Cascader from "./Cascader";

import Popover from "./Popover";

import db from "./db";

function getChildren(pid = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((n) => n.p_id === pid);
      result = result.length === 0 ? "" : result;
      if (result) {
        result.map((n) => {
          if (db.filter((i) => i.p_id === n.id).length) {
            n.isLeaf = false;
          } else {
            n.isLeaf = true;
          }
        });
      }
      success(result);
    }, 1000);
  });
}

export default {
  methods: {
    xxx(v) {},
    yyy() {
      this.selected = [];
    },
    getData(node, callback) {
      const { name, id, p_id } = node;
      getChildren(id).then((res) => {
        callback(res);
      });
    },
  },
  data() {
    return {
      // source: [],
      // selected: [],
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
    };
  },
  mounted() {
    // getChildren().then((res) => {
    //   this.source = res;
    //   console.log(res);
    // });
  },
  components: {
    "woo-cascader": Cascader,
    "woo-button": Button,
    "woo-popover": Popover,
  },
};
</script>

<style lang="scss" scoped>
@import "_var";
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
</style>

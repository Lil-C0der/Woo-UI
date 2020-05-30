---
title: "布局 Layout"
sidebarDepth: 2
---

# 布局

用于布局的容器组件，方便快速搭建页面的基本结构。

## 基本用法

`Header` `Footer` 组件可以通过 `height` 属性来设置高度，`Sider` 组件可以通过 `width` 属性来设置宽度。

<ClientOnly>
<layout-demo/>
</ClientOnly>

```vue
<template>
  <div class="layout-demo">
    <woo-layout>
      <woo-header>HEADER</woo-header>
      <woo-content>CONTENT</woo-content>
      <woo-footer>FOOTER</woo-footer>
    </woo-layout>
  </div>

  <div class="layout-demo">
    <woo-layout>
      <woo-header>HEADER</woo-header>
      <woo-layout>
        <woo-sider>SIDER</woo-sider>
        <woo-content>CONTENT</woo-content>
      </woo-layout>
      <woo-footer>FOOTER</woo-footer>
    </woo-layout>
  </div>

  <div class="layout-demo">
    <woo-layout>
      <woo-header>HEADER</woo-header>
      <woo-layout>
        <woo-content>CONTENT</woo-content>
        <woo-sider>SIDER</woo-sider>
      </woo-layout>
      <woo-footer>FOOTER</woo-footer>
    </woo-layout>
  </div>

  <div class="layout-demo">
    <woo-layout>
      <woo-sider>SIDER</woo-sider>
      <woo-layout>
        <woo-header>HEADER</woo-header>
        <woo-content>CONTENT</woo-content>
        <woo-footer>FOOTER</woo-footer>
      </woo-layout>
    </woo-layout>
  </div>
</template>

<style>
.layout-demo {
  margin-bottom: 20px;
  text-align: center;
  color: #333333;
}
.woo-header {
  background-color: #bcc2d7;
}
.woo-content {
  background-color: #eff1fe;
  line-height: 120px;
}
.woo-sider {
  background-color: #8895b1;
  line-height: 160px;
}
.woo-footer {
  background-color: #546c8c;
}
</style>
```

## 可收起的 Sider

设置 `collapsible` 属性为 `true` ，页面横向空间有限时，侧边导航可折叠。可以通过 `collapsed` `collapsedWidth` 和 `reverseArrow` 等属性来设置折叠的状态和相关的样式

<ClientOnly>
<layout-demo-sider/>
</ClientOnly>

```vue
<template>
  <div class="layout-demo">
    <woo-layout>
      <woo-sider collapsible>SIDER</woo-sider>
      <woo-layout>
        <woo-header>HEADER</woo-header>
        <woo-content>CONTENT</woo-content>
        <woo-footer>FOOTER</woo-footer>
      </woo-layout>
    </woo-layout>
  </div>

  <div class="layout-demo">
    <woo-layout>
      <woo-header>HEADER</woo-header>
      <woo-layout>
        <woo-content>CONTENT</woo-content>
        <woo-sider
          collapsible
          reverseArrow
          collapsed-width="100px"
          :collapsed="true"
          >SIDER</woo-sider
        >
      </woo-layout>
      <woo-footer>FOOTER</woo-footer>
    </woo-layout>
  </div>
</template>

<script>
export default {
  methods: {
    handleSiderCollapse(collapsed) {
      console.log("collapsed turn to " + collapsed);
    },
  },
};
</script>

<style>
.layout-demo {
  margin-bottom: 20px;
  text-align: center;
  color: #333333;
}
.woo-header {
  background-color: #bcc2d7;
}
.woo-content {
  background-color: #eff1fe;
  line-height: 120px;
}
.woo-sider {
  background-color: #8895b1;
  line-height: 160px;
}
.woo-footer {
  background-color: #546c8c;
}
</style>
```

## 🌏 API

### Header Attributes

|  参数  |   说明   |  类型  | 可选值 | 默认值 |
| :----: | :------: | :----: | :----: | :----: |
| height | 顶栏高度 | String |   —    |  64px  |

### Footter Attributes

|  参数  |   说明   |  类型  | 可选值 | 默认值 |
| :----: | :------: | :----: | :----: | :----: |
| height | 底栏高度 | String |   —    |  64px  |

### Sider Attributes

|        参数         |                       说明                        |  类型   | 可选值 | 默认值 |
| :-----------------: | :-----------------------------------------------: | :-----: | :----: | :----: |
|        width        |                    侧边栏宽度                     | String  |   —    | 200px  |
|     collapsible     |                    是否可折叠                     | Boolean |   —    | false  |
| collapsed / v-model |              绑定值，当前的折叠状态               | Object  |   —    |   —    |
|   collapsed-width   |                 折叠状态下的宽度                  | String  |   —    | 100px  |
|    reverse-arrow    | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | Boolean |   —    | false  |

### Sider Events

|   参数   |         说明          | 回调参数  |
| :------: | :-------------------: | :-------: |
| collapse | 展开-收起时的回调函数 | collapsed |

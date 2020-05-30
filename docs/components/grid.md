---
title: "栅格系统 Grid"
sidebarDepth: 2
---

# 栅格系统

## 基本用法

<ClientOnly>
<grid-demo/>
</ClientOnly>

```vue
<template>
  <woo-row>
    <woo-col :span="24"><div class="grid-content bg-light">24</div></woo-col>
  </woo-row>
  <woo-row>
    <woo-col :span="12"><div class="grid-content bg-dark">12</div></woo-col>
    <woo-col :span="12"><div class="grid-content bg-light">12</div></woo-col>
  </woo-row>
  <woo-row>
    <woo-col :span="8"><div class="grid-content bg-dark">8</div></woo-col>
    <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
    <woo-col :span="8"><div class="grid-content bg-dark">8</div></woo-col>
  </woo-row>
  <woo-row>
    <woo-col :span="6"><div class="grid-content bg-dark">6</div></woo-col>
    <woo-col :span="6"><div class="grid-content bg-light">6</div></woo-col>
    <woo-col :span="6"><div class="grid-content bg-dark">6</div></woo-col>
    <woo-col :span="6"><div class="grid-content bg-light">6</div></woo-col>
  </woo-row>
  <woo-row>
    <woo-col :span="4"><div class="grid-content bg-dark">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-dark">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-dark">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
  </woo-row>
</template>

<style>
.woo-row {
  margin-bottom: 20px;
}
.grid-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}
.bg-light {
  background-color: #8895b1;
}
.bg-dark {
  background-color: #546c8c;
}
</style>
```

## 混合布局

<ClientOnly>
<grid-demo-mix/>
</ClientOnly>

```vue
<template>
  <woo-row gutter="20">
    <woo-col :span="16"><div class="grid-content bg-light">16</div></woo-col>
    <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
  </woo-row>
  <woo-row gutter="20">
    <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
    <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
  </woo-row>
  <woo-row gutter="20">
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
    <woo-col :span="16"><div class="grid-content bg-light">16</div></woo-col>
    <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
  </woo-row>
</template>

<style>
* {
  box-sizing: border-box;
}
.woo-row {
  margin-bottom: 20px;
}
.grid-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}
.bg-light {
  background-color: #8895b1;
}
</style>
```

## 分栏偏移

<ClientOnly>
<grid-demo-offset/>
</ClientOnly>

```vue
<template>
  <woo-row gutter="20">
    <woo-col :span="6"><div class="grid-content bg-light">6</div></woo-col>
    <woo-col :span="6" :offset="6"
      ><div class="grid-content bg-light">6</div></woo-col
    >
  </woo-row>
  <woo-row gutter="20">
    <woo-col :span="6" :offset="6"
      ><div class="grid-content bg-light">6</div></woo-col
    >
    <woo-col :span="6" :offset="6"
      ><div class="grid-content bg-light">6</div></woo-col
    >
  </woo-row>
  <woo-row gutter="20">
    <woo-col :span="12" :offset="6"
      ><div class="grid-content bg-light">12</div></woo-col
    >
  </woo-row>
</template>

<style>
* {
  box-sizing: border-box;
}
.demo {
  padding-top: 10px;
}
.woo-row {
  margin-bottom: 20px;
}
.grid-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}
.bg-light {
  background-color: #8895b1;
}
</style>
```

## 响应式布局

响应式栅格断点参考 [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/layout/grid/)

<ClientOnly>
<grid-demo-responsive/>
</ClientOnly>

```vue
<template>
  <woo-row gutter="10">
    <woo-col
      :xs="{ span: 8 }"
      :sm="{ span: 6 }"
      :md="{ span: 4 }"
      :lg="{ span: 3 }"
      :xl="{ span: 2 }"
      ><div class="grid-content bg-light"></div
    ></woo-col>
    <woo-col
      :xs="{ span: 4 }"
      :sm="{ span: 6 }"
      :md="{ span: 8 }"
      :lg="{ span: 9 }"
      :xl="{ span: 10 }"
      ><div class="grid-content bg-dark"></div
    ></woo-col>
    <woo-col
      :xs="{ span: 4 }"
      :sm="{ span: 6 }"
      :md="{ span: 8 }"
      :lg="{ span: 9 }"
      :xl="{ span: 10 }"
      ><div class="grid-content bg-dark"></div
    ></woo-col>
    <woo-col
      :xs="{ span: 8 }"
      :sm="{ span: 6 }"
      :md="{ span: 4 }"
      :lg="{ span: 3 }"
      :xl="{ span: 2 }"
      ><div class="grid-content bg-light"></div
    ></woo-col>
  </woo-row>
</template>

<style>
* {
  box-sizing: border-box;
}
.woo-row {
  margin-bottom: 20px;
}
.grid-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}
.bg-light {
  background-color: #8895b1;
}
.bg-dark {
  background-color: #546c8c;
}
</style>
```

## API

#### 🌏 Row Attributes

|  参数  |           说明            |        类型         | 可选值 | 默认值 |
| :----: | :-----------------------: | :-----------------: | :----: | :----: |
| gutter |         栅格间隔          |   String / Number   |   —    |   0    |
| align  | flex 布局下的垂直排列方式 | left, right, center |   —    | center |

#### 🌏 Col Attributes

|  参数  |             说明             |                类型                 | 可选值 | 默认值 |
| :----: | :--------------------------: | :---------------------------------: | :----: | :----: |
|  span  |        栅格占据的列数        |           String / Number           |   —    |   24   |
| offset |        栅格偏移的列数        |           String / Number           |   —    |   0    |
|   xs   | `<576px` 响应式栅格属性对象  | Object (例如：{span: 4, offset: 4}) |   —    |   —    |
|   sm   | `≥576px` 响应式栅格属性对象  |               Object                |   —    |   —    |
|   md   | `≥768px` 响应式栅格属性对象  |               Object                |   —    |   —    |
|   lg   | `≥992px` 响应式栅格属性对象  |               Object                |   —    |   —    |
|   xl   | `≥1200px` 响应式栅格属性对象 |               Object                |   —    |   —    |
|  xxl   | `≥1600px` 响应式栅格属性对象 |               Object                |   —    |   —    |

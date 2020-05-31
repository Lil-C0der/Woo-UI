---
title: "轮播图 Slide"
sidebarDepth: 2
---

# 轮播图

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基本用法

结合使用`woo-slide`和`woo-slide-item`标签就得到了一个轮播图。幻灯片的内容是任意的，放在`woo-slide-item`标签中。鼠标移入幻灯片后自动停止播放，可以通过点击底部的指示器或者左右箭头切换。

可以通过 `auto-play` 属性和 `interval` 属性来设置是否自动播放和播放间隔。

这个组件在移动端可以通过滑动来切换，打开浏览器控制台，切换到移动端后刷新页面后体验。

#### 效果展示

<ClientOnly>
<slide-demo/>
</ClientOnly>

```vue
<template>
  <div class="block">
    <woo-slide height="150px" interval="4000">
      <woo-slide-item v-for="item in 4" :key="item">
        <div class="box">{{ item }}</div>
      </woo-slide-item>
    </woo-slide>
  </div>

  <div class="block">
    <woo-slide height="150px" :auto-play="false">
      <woo-slide-item v-for="item in 4" :key="item">
        <div class="box">{{ item }}</div>
      </woo-slide-item>
    </woo-slide>
  </div>
</template>

<style>
.box {
  color: #fefefe;
  font-weight: 700;
  text-align: center;
  line-height: 150px;
}
.block {
  width: 49%;
  display: inline-block;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>
```

## 设置默认展示的幻灯片

默认从第一张幻灯片开始播放，也可以通过 `initial-index` 属性来指定默认显示的幻灯片，同时为 `woo-slide-item` 组件设置唯一标识符 `name`。

<ClientOnly>
<slide-demo-initial-index/>
</ClientOnly>

```vue
<template>
  <woo-slide height="220px" :initial-index="2" :auto-play="false">
    <woo-slide-item v-for="item in 4" :key="item" :name="item.toString()">
      <div class="box">{{ item }}</div>
    </woo-slide-item>
  </woo-slide>
</template>

<style>
.box {
  color: #fefefe;
  font-weight: 700;
  text-align: center;
  line-height: 220px;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>
```

## 调用组件提供的方法切换

<ClientOnly>
<slide-demo-methods/>
</ClientOnly>

```vue
<template>
  <div class="button-bar" style="margin-bottom:10px">
    <woo-button-group>
      <woo-button icon-name="left" @click="$refs.slide.prev()"
        >上一张</woo-button
      >
      <woo-button @click="$refs.slide.setActiveItem(3)">最后一张</woo-button>
      <woo-button
        icon-name="right"
        icon-position="right"
        @click="$refs.slide.next()"
        >下一张</woo-button
      >
    </woo-button-group>
  </div>

  <woo-slide
    ref="slide"
    height="220px"
    :auto-play="false"
    @change="handleChange"
  >
    <woo-slide-item v-for="item in 4" :key="item" :name="item.toString()">
      <div class="box">{{ item }}</div>
    </woo-slide-item>
  </woo-slide>
</template>

<script>
export default {
  methods: {
    handleChange(current, prev) {
      console.log(`现在幻灯片的索引是 ${current}, 上一张是 ${prev}`);
    },
  },
};
</script>

<style>
.box {
  color: #fefefe;
  font-weight: 700;
  text-align: center;
  line-height: 220px;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>
```

## 🌏 API

### Slide Attributes

|     参数      |                 说明                  |  类型   | 可选值 | 默认值 |
| :-----------: | :-----------------------------------: | :-----: | :----: | :----: |
|    height     |             幻灯片的高度              | String  |   —    |   —    |
|   autoPlay    |             是否自动播放              | Boolean |   —    |  true  |
|   interval    |           播放间隔（毫秒）            | Number  |   —    |  3000  |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | Number  |   —    |   0    |

### SlideItem Attributes

| 参数 |                      说明                       |  类型  | 可选值 | 默认值 |
| :--: | :---------------------------------------------: | :----: | :----: | :----: |
| name | 幻灯片名称，可以作为 `setActiveItem` 方法的参数 | String |   —    |   —    |

### Events

| 事件名称 |       说明       |                回调参数                |
| :------: | :--------------: | :------------------------------------: |
|  change  | 幻灯片切换时触发 | 当前显示的幻灯片的索引，原幻灯片的索引 |

### Methods

|    方法名     |        说明        |                             参数                              |
| :-----------: | :----------------: | :-----------------------------------------------------------: |
| setActiveItem |   手动切换幻灯片   | 需要切换的幻灯片的索引，从 0 开始；或相应 item 的 name 属性值 |
|     prev      | 切换至上一张幻灯片 |                               —                               |
|     next      | 切换至下一张幻灯片 |                               —                               |

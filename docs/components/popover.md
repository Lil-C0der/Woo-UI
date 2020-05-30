---
title: "气泡提示框 Popover"
sidebarDepth: 2
---

# 气泡提示框

## 基本用法

#### 效果展示

<ClientOnly>
<popover-demo-placement/>
</ClientOnly>

```vue
<template>
  <woo-popover>
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>TOP</woo-button>
  </woo-popover>

  <woo-popover placement="bottom">
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>BOTTOM</woo-button>
  </woo-popover>

  <woo-popover placement="left">
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>LEFT</woo-button>
  </woo-popover>

  <woo-popover placement="right">
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>RIGHT</woo-button>
  </woo-popover>
</template>

<style>
h4 {
  margin: 0;
}
</style>
```

## 可选激活方式

设置 `trigger` 属性改变激活方式，

#### 效果展示

<ClientOnly>
<popover-demo-trigger/>
</ClientOnly>

```vue
<template>
  <woo-popover trigger="click">
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>点击激活</woo-button>
  </woo-popover>

  <woo-popover trigger="hover">
    <template #content>
      <h4>Title</h4>
      <span>Content</span>
    </template>
    <woo-button>hover 激活</woo-button>
  </woo-popover>
</template>

<style>
h4 {
  margin: 0;
}
</style>
```

## 提示框中嵌套其他组件

可以在提示框中嵌套其他内容或者组件，实现一些轻量的操作

#### 效果展示

<ClientOnly>
<popover-demo-more/>
</ClientOnly>

```vue
<template>
  <woo-popover v-model="visible" trigger="click" @visible-change="onChange">
    <template #content>
      <div>确认删除吗？</div>
      <woo-button type="danger" @click="visible = false">删除</woo-button>
    </template>
    <woo-button>点击删除</woo-button>
  </woo-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onChange(visible) {
      console.log("visible turn to " + visible);
    },
  },
};
</script>

<style>
.woo-button {
  float: right;
}
</style>
```

## 🌏 API

### Attributes

组件将被渲染为 `button` 标签，因此你可以使用所有的 `button` 原生属性。

|       参数        |           说明           |  类型  |           可选值            | 默认值 |
| :---------------: | :----------------------: | :----: | :-------------------------: | :----: |
| visible / v-model | 绑定值，提示框的显示状态 |   —    |              —              | false  |
|     placement     |     提示框出现的位置     | String | top / bottom / left / right |  top   |
|      trigger      |         触发方式         | String |        click / hover        | click  |

### Events

|    事件名称    |          说明          | 回调参数 |
| :------------: | :--------------------: | :------: |
| visible-change | 提示框显示与隐藏时触发 | visible  |

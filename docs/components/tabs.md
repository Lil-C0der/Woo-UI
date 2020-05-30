---
title: "标签页 Tabs"
sidebarDepth: 2
---

# 标签页

选项卡切换组件。

## 基本用法

Tabs 组件的子组件必须是 TabsHead 和 TabsBody，TabsHead 和 TabsBody 组件的子组件 TabsItem 和 TabsPane 必须通过 `name` 属性设置唯一且对应的索引。

Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `active-name` 属性（或者 `v-model`）来指定当前选中的标签页。

#### 效果展示

<ClientOnly>
<tabs-demo/>
</ClientOnly>

```vue
<template>
  <woo-tabs v-model="activeName" @tab-click="handleClick">
    <woo-tabs-head>
      <woo-tabs-item name="1st">Tab 1</woo-tabs-item>
      <woo-tabs-item name="2nd">Tab 2</woo-tabs-item>
      <woo-tabs-item name="3rd">Tab 3</woo-tabs-item>
      <woo-tabs-item name="4th">Tab 4</woo-tabs-item>
    </woo-tabs-head>
    <woo-tabs-body>
      <woo-tabs-pane name="1st">Content 1</woo-tabs-pane>
      <woo-tabs-pane name="2nd">Content 2</woo-tabs-pane>
      <woo-tabs-pane name="3rd">Content 3</woo-tabs-pane>
      <woo-tabs-pane name="4th">Content 4</woo-tabs-pane>
    </woo-tabs-body>
  </woo-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "2nd",
    };
  },
  methods: {
    handleClick(name) {
      console.log(name);
    },
  },
};
</script>
```

## 可以附加内容的标签栏

通过 [具名插槽的缩写](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99)（字符 `#` ）附加其他内容

#### 效果展示

<ClientOnly>
<tabs-demo-extra/>
</ClientOnly>

```vue
<template>
  <woo-tabs @change="handleItemChange">
    <woo-tabs-head>
      <woo-tabs-item name="1st">1</woo-tabs-item>
      <woo-tabs-item name="2nd">2</woo-tabs-item>
      <template #extra-actions>
        <woo-button>Button</woo-button>
      </template>
    </woo-tabs-head>
    <woo-tabs-body>
      <woo-tabs-pane name="1st">A</woo-tabs-pane>
      <woo-tabs-pane name="2nd">B</woo-tabs-pane>
    </woo-tabs-body>
  </woo-tabs>
</template>

<script>
export default {
  methods: {
    handleItemChange(name) {
      console.log(name);
    },
  },
};
</script>
```

## 禁用某一项标签页

通过 TabsItem 组件的 `disabled` 属性禁用某一个标签

#### 效果展示

<ClientOnly>
<tabs-demo-disabled/>
</ClientOnly>

```vue
<template>
  <woo-tabs>
    <woo-tabs-head>
      <woo-tabs-item name="1st">1</woo-tabs-item>
      <woo-tabs-item name="2nd" disabled>2</woo-tabs-item>
      <woo-tabs-item name="3rd">3</woo-tabs-item>
    </woo-tabs-head>
    <woo-tabs-body>
      <woo-tabs-pane name="1st">A</woo-tabs-pane>
      <woo-tabs-pane name="2nd">B</woo-tabs-pane>
      <woo-tabs-pane name="3rd">C</woo-tabs-pane>
    </woo-tabs-body>
  </woo-tabs>
</template>
```

## 🌏 API

### Tabs Attributes

|         参数          |                 说明                 |  类型  | 可选值 |          默认值          |
| :-------------------: | :----------------------------------: | :----: | :----: | :----------------------: |
| active-name / v-model | 绑定值，默认选中的 item 的 name 属性 | String |   —    | 第一个标签页的 name 属性 |

### TabsItem Attributes

|   参数   |                            说明                             |  类型  | 可选值 | 默认值 |
| :------: | :---------------------------------------------------------: | :----: | :----: | :----: |
|   name   | 与 Tabs 组件绑定值 active-name 对应的标识符，表示组件的索引 | String |   —    |   —    |
| disabled |                         是否被禁用                          | Boole  |   —    | false  |

### TabsItem Attributes

| 参数 |                     说明                     |  类型  | 可选值 | 默认值 |
| :--: | :------------------------------------------: | :----: | :----: | :----: |
| name | 表示组件的索引，和 TabsItem 的 name 属性对应 | String |   —    |   —    |

### Events

| 事件名称  |             说明             |                           回调参数                           |
| :-------: | :--------------------------: | :----------------------------------------------------------: |
| tab-click |      标签页被点击时触发      |                  被点击的标签页的 name 属性                  |
|  change   | 被选中的标签页发生变化时触发 | 上一个被选中标签页的 name 属性，当前被选中标签页的 name 属性 |

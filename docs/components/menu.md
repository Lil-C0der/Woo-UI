---
title: "导航菜单 Menu"
sidebarDepth: 2
---

# 导航菜单

为网站提供导航功能的菜单。

## 水平导航菜单

导航菜单默认为水平模式，通过 `vertical` 属性可以使导航菜单变为垂直模式。

在菜单中通过 `Submenu` 组件可以生成二级菜单，二级菜单的标题可以提供具名插槽来设置。还可以通过 `selected-index` 属性或（`v-model`）来指定默认选中的 `MenuItem`。

默认点击展开二级菜单，可以通过 `trigger` 属性来设置不同的激活菜单方式，可选的方式有 `click` 和 `hover`。

#### 效果展示

<ClientOnly>
<menu-demo/>
</ClientOnly>

```vue
<template>
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
</template>

<script>
export default {
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
```

## 垂直导航菜单

垂直菜单可以通过 `width` 属性来设置菜单的宽度，默认的宽度为 `200px`。

#### 效果展示

<ClientOnly>
<menu-demo-vertical/>
</ClientOnly>

```vue
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
      <woo-menu selected-index="3" vertical trigger="hover" width="320px">
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
export default {
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
```

## 🌏 API

### Menu Attributes

|          参数          |                  说明                   |  类型   |    可选值     | 默认值 |
| :--------------------: | :-------------------------------------: | :-----: | :-----------: | :----: |
| select-index / v-model | 绑定值，默认选中的菜单项的 `index` 属性 | String  |       —       |   —    |
|        trigger         |                触发方式                 | String  | click / hover | click  |
|        vertical        |                是否垂直                 | Boolean |       —       | false  |
|         width          |         垂直状态下导航栏的宽度          | String  |       —       | 200px  |

### MenuItem Attributes

| 参数  |     说明     |  类型  | 可选值 | 默认值 |
| :---: | :----------: | :----: | :----: | :----: |
| index | 菜单项的索引 | String |   —    |   —    |

### Submenu Attributes

| 参数  |      说明      |     类型      | 可选值 | 默认值 |
| :---: | :------------: | :-----------: | :----: | :----: |
| index | 二级菜单的索引 | String / null |   —    |  null  |

### Events

| 事件名称 |         说明         |                                                         回调参数                                                          |
| :------: | :------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|  click   | 点击 MenuItem 时触发 | 参数为一个**对象**，包含 `item`, `index`, `path` 属性，分别表示 item 实例，点击菜单项的 index 和点击菜单项的 index path } |
|   open   |  Submenu 展开时触发  |                                                      Submenu 的 path                                                      |
|  close   |  Submenu 收起时触发  |                                                      Submenu 的 path                                                      |
|  select  |     被选中时触发     |                                                   被选中菜单项的 index                                                    |

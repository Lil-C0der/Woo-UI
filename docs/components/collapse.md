---
title: "折叠面板 Collapse"
sidebarDepth: 2
---

# 折叠面板

可以折叠/展开的内容区域。

## 基本用法

给 Collapse 组件设置 `name` 属性，作为唯一标识符。可以通过 `active-name` 属性（或者 `v-model`）来指定当前展开的面板。

<ClientOnly>
<collapse-demo/>
</ClientOnly>

```vue
<template>
  <woo-collapse @change="handleChange">
    <woo-collapse-item title="title 1" name="pane 1">
      Pane 1
    </woo-collapse-item>
    <woo-collapse-item title="title 2" name="pane 2">
      Pane 2
    </woo-collapse-item>
    <woo-collapse-item title="title 3" name="pane 3">
      Pane 3
    </woo-collapse-item>
    <woo-collapse-item title="title 4" name="pane 4">
      Pane 4
    </woo-collapse-item>
  </woo-collapse>
</template>

<script>
export default {
  methods: {
    handleChange(n) {
      console.log(n);
    },
  },
};
</script>
```

## 同时展开多个面板

当绑定值 `active-name` 为一个数组时，表示展开多个面板。

<ClientOnly>
<collapse-demo-multiple/>
</ClientOnly>

```vue
<template>
  <div class="demo">
    <woo-collapse v-model="activeName" @change="handleChange">
      <woo-collapse-item title="title 1" name="pane 1">
        Pane 1
      </woo-collapse-item>
      <woo-collapse-item title="title 2" name="pane 2">
        Pane 2
      </woo-collapse-item>
      <woo-collapse-item title="title 3" name="pane 3">
        Pane 3
      </woo-collapse-item>
      <woo-collapse-item title="title 4" name="pane 4">
        Pane 4
      </woo-collapse-item>
    </woo-collapse>
  </div>
</template>

<script>
import WooCollapse from "../../../src/Collapse/Collapse.vue";
import WooCollapseItem from "../../../src/Collapse/CollapseItem.vue";

export default {
  components: {
    WooCollapse,
    WooCollapseItem,
  },
  data() {
    return {
      activeName: ["pane 1", "pane 3"],
    };
  },
  methods: {
    handleChange(name) {
      console.log(name);
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
```

## 只允许展开一个面板

设置 Collapse 组件的 `single` 属性，每次只允许展开一个面板

<ClientOnly>
<collapse-demo-single/>
</ClientOnly>

```vue
<template>
  <woo-collapse v-model="activeName" single @change="handleChange">
    <woo-collapse-item title="title 1" name="1">Pane 1</woo-collapse-item>
    <woo-collapse-item title="title 2" name="2">Pane 2</woo-collapse-item>
    <woo-collapse-item title="title 3" name="3">Pane 3</woo-collapse-item>
    <woo-collapse-item title="title 4" name="4">Pane 4</woo-collapse-item>
  </woo-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
  methods: {
    handleChange(name) {
      console.log(name);
    },
  },
};
</script>
```

# 🌏 API

### Collapse Attributes

|         参数          |                  说明                  |      类型      | 可选值 | 默认值 |
| :-------------------: | :------------------------------------: | :------------: | :----: | :----: |
| active-name / v-model |  绑定值，默认展开的 item 的 name 属性  | String / Array |   —    |   —    |
|        single         | 是否只允许展开一个 item （手风琴模式） |    Boolean     |   —    | false  |

### CollapseItem Attributes

| 参数  |                            说明                             |  类型  | 可选值 | 默认值 |
| :---: | :---------------------------------------------------------: | :----: | :----: | :----: |
| name  | 与 Tabs 组件绑定值 active-name 对应的标识符，表示组件的索引 | String |   —    |   —    |
| title |                         面板的标题                          | String |   —    |   —    |

### Events

| 事件名称 |            说明            |                                               回调参数                                               |
| :------: | :------------------------: | :--------------------------------------------------------------------------------------------------: |
|  change  | 被展开的面板发生变化时触发 | 展开面板的 name 属性。在手风琴模式下参数为字符串，否则参数为数组，数组中的元素为展开面板的 name 属性 |

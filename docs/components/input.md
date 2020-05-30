---
title: "输入框 Input"
sidebarDepth: 2
---

# 输入框

Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用 v-model）。

## 基本用法

#### 效果展示

<ClientOnly>
<input-demo/>
</ClientOnly>

```vue
<template>
  <woo-input v-model="input" placeholder="请输入内容"></woo-input>
  <woo-input v-model="readonlyInput" readonly></woo-input>
  <woo-input v-model="disabledInput" disabled></woo-input>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      readonlyInput: "这是一个只读的输入框",
      disabledInput: "这是一个禁用的输入框",
    };
  },
};
</script>
```

## 可以清空的输入框

#### 效果展示

<ClientOnly>
<input-demo-clearable/>
</ClientOnly>

```vue
<template>
  <woo-input
    v-model="input"
    placeholder="输入内容后点击清空"
    clearable
    @clear="handleIptClear"
  ></woo-input>
</template>

<script>
export default {
  components: {
    WooInput,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleIptClear() {
      console.log("clear!!");
    },
  },
};
</script>
```

## 可以设置错误信息的输入框

#### 效果展示

<ClientOnly>
<input-demo-error/>
</ClientOnly>

```vue
<template>
  <woo-input v-model="input" error="重新输入"></woo-input>
</template>

<script>
export default {
  data() {
    return {
      input: "错误的内容",
    };
  },
};
</script>
```

## API

#### 🌏 Attributes

|      参数       |    说明    |      类型       | 可选值 | 默认值 |
| :-------------: | :--------: | :-------------: | :----: | :----: |
| value / v-model |   绑定值   | String / Number |   —    |   —    |
|    clearable    | 是否可清空 |     Boolean     |   —    | false  |
|    disabled     |    禁用    |     boolean     |   —    | false  |
|      error      |  错误信息  |     String      |   —    |   —    |

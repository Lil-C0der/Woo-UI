---
title: "按钮 Button"
sidebarDepth: 2
---

# 按钮

## 基本用法

效果展示
<ClientOnly>
<type-demo/>
</ClientOnly>

```
<template>
  <div>
    <woo-button>NORMAL</woo-button>
    <woo-button disabled>DISABLED</woo-button>
    <woo-button type="dashed">DASHED</woo-button>
    <woo-button type="primary">PRIMARY</woo-button>
    <woo-button type="warn">WARN</woo-button>
    <woo-button type="danger">DANGER</woo-button>
  </div>
</template>
```

## 图标按钮

效果展示

<ClientOnly>
  <icon-demo/>
</ClientOnly>

```
<template>
  <div>
    <woo-button icon-name="home">Home</woo-button>
    <woo-button icon-name="thumbs-up">Likes</woo-button>
    <woo-button icon-name="settings">Settings</woo-button>
    <woo-button icon-name="international"></woo-button>
    <woo-button icon-name="right" icon-position="right">Info</woo-button>
  </div>
</template>
```

## 加载状态

效果展示

<ClientOnly>
  <loading-demo/>
</ClientOnly>

```
<template>
  <div>
    <woo-button
      icon-name="download"
      :loading="isLoading"
      @click="isLoading = !isLoading"
      >Download</woo-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
```

## 包含多个按钮的按钮组

效果展示

<ClientOnly>
  <group-demo/>
</ClientOnly>

```
<template>
  <div>
    <woo-button-group>
      <woo-button icon-name="left">上一页</woo-button>
      <woo-button icon-name="right" icon-position="right">下一页</woo-button>
    </woo-button-group>
    <woo-button-group>
      <woo-button icon-name="download"></woo-button>
      <woo-button icon-name="upload"></woo-button>
    </woo-button-group>
    <woo-button-group>
      <woo-button disabled icon-name="download"></woo-button>
      <woo-button disabled icon-name="upload"></woo-button>
    </woo-button-group>
  </div>
</template>
```

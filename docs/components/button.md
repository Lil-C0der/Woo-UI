---
title: "按钮 Button"
sidebarDepth: 2
---

# 按钮

## 基本用法

<type-demo/>

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
```

## 图标按钮

<icon-demo/>

## 加载状态

<loading-demo/>

## 包含多个按钮的按钮组

<group-demo/>

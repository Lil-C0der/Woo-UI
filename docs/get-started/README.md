---
title: "快速上手"
---

# 快速上手

## 添加 CSS 样式

使用之前，请务必确保你的浏览器支持标准盒模型，即 `border-box`

IE8+ 浏览器支持

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## 按需引入

```js
import Vue from "vue";
import { WooButton, WooIcon } from "woo-ui";
import { Plugin } from "woo-ui";
import "woo-ui/dist/woo.css";

Vue.use(Plugin);

export default {
  name: "App",
  components: {
    WooButton,
    WooIcon,
  },
};
```

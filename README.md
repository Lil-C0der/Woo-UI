# Woo - UI

[![NPM version](https://img.shields.io/npm/v/woo.svg)](https://www.npmjs.com/package/woo-ui)

[![Build Status](https://travis-ci.org/Lil-C0der/Woo-UI.svg?branch=master)](https://travis-ci.org/Lil-C0der/Woo)

[![Coverage Status](https://coveralls.io/repos/github/Lil-C0der/Woo-UI/badge.svg?branch=master)](https://coveralls.io/github/Lil-C0der/Woo-UI?branch=master)

## 开发指南

1. 添加 CSS 样式

   使用之前，确保你的浏览器支持标准盒模型，即 border-box

   IE8+浏览器支持

   ```
   *,
   *::before,
   *::after {
     box-sizing: border-box;
   }
   ```

   同时还需设置一些 CSS 变量（后续会改为 SCSS 变量）

   IE15+浏览器支持

   ```
   :root {
     --button-height: 32px;
     --font-size: 14px;
     --border-radius: 4px;
     --button-bg: #f6f6f6;
     --button-bg-hover: #f1f1f1;
     --button-bg-active: #d0d0d0;
     --color: #333;
     --color-active: #fefefe;
     --border-color: #dcdfe6;
     --border-color-hover: #c0c4cc;
   }
   ```

2. 安装

   推荐使用 npm 安装

   ```
   npm install --save woo-ui
   ```

3. 引入 woo-ui

   ```
   import { Button, Icon } from "woo-ui";
   import "woo-ui/dist/index.css";

   export default {
     name: "App",
     components: {
       "woo-button": Button,
       "woo-icon": Icon,
     },
   };
   ```

## 文档

## Q&A

## 更新日志

## 联系我

## 贡献代码

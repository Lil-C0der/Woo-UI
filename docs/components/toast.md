---
title: "短提示 Toast"
sidebarDepth: 2
---

# 短提示

操作之后的反馈提示。

采用插件的形式开发，全局注册了 `$toast` 方法用于调用，可以通过`this.$toast(msg, option)`的方式调用。

其中 `msg` 参数为提示的内容，`option` 参数为配置选项，关于选项的更多内容见下文 API

## 基本用法

可以通过 `options` 中的 `position` 属性设置提示出现的位置，不同位置的动画效果不同，默认出现在顶部。

<ClientOnly>
<toast-demo/>
</ClientOnly>

```vue
<template>
  <woo-button @click="$toast('这是一条提示')">顶部弹出</woo-button>
  <woo-button @click="$toast('这是一条提示', { position: 'middle' })">
    中间弹出
  </woo-button>
  <woo-button @click="$toast('这是一条提示', { position: 'bottom' })">
    底部弹出
  </woo-button>
</template>
```

## 更多配置选项

<ClientOnly>
<toast-demo-option/>
</ClientOnly>

```vue
<template>
    <woo-button @click="showToast1">显示提示</woo-button>
    <woo-button @click="showToast2">显示提示</woo-button>
    <woo-button @click="showToast3">显示提示</woo-button>
    <woo-button @click="showToast4">显示提示</woo-button>
    <woo-button @click="showToast5">显示提示</woo-button>
  </div>
</template>

<script>
export default {
  components: {
    WooButton,
  },
  methods: {
    showToast1() {
      this.$toast("点击右边的按钮关闭", { closable: true });
    },

    showToast2() {
      this.$toast("Live long and prosper", {
        closable: true,
        closeOption: {
          text: "🖖",
          callback: () => {
            console.log("Live long and prosper!! ");
          },
        },
      });
    },

    showToast3() {
      this.$toast("这条提示一秒后会自动关闭", { closable: true, delay: 1000 });
    },

    showToast4() {
      this.$toast("这条提示距离页面底部 48 像素", {
        position: "bottom",
        offset: "48px",
      });
    },

    showToast5() {
      this.$toast(`<i>这是 HTML 片段<i>`, {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
```

## 🌏 Options

|           参数           |                           说明                           |  类型   |        可选值         |               默认值               |
| :----------------------: | :------------------------------------------------------: | :-----: | :-------------------: | :--------------------------------: |
|         position         |                      提示出现的位置                      | String  | top / bottom / middle |                top                 |
|         closable         |                     是否可以手动关闭                     | Boolean |           —           |               false                |
|       closeOption        | 关闭按钮相关的配置，包括文本内容和关闭之后执行的回调函数 | Object  |           —           | { text: "关闭", callback: () => {} |
|          delay           |       关闭的延时（毫秒），设置为 0 时不会自动关闭        | Number  |           —           |                3000                |
|          offset          |                提示距离指定位置的偏移距离                | String  |           —           |                16px                |
| dangerouslyUseHTMLString |              是否将 msg 作为 HTML 片段处理               | Boolean |           —           |               false                |

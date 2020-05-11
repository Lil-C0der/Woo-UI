module.exports = {
  title: "Woo-UI",
  description: "我自己的 UI 组件库",
  // .vuepress/config.js
  themeConfig: {
    sidebar: [
      {
        title: "指南",
        children: ["/get-started/", "/install/"],
        collapsable: false,
      },
      {
        title: "组件",
        path: "/components/",
        collapsable: false,
        children: ["/components/button"],
      },
    ],
  },
};

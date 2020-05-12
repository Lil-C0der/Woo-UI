module.exports = {
  base: "/Woo-UI/",
  title: "Woo-UI",
  description: "我自己的 UI 组件库",
  themeConfig: {
    sidebar: [
      {
        title: "开发指南",
        children: ["/get-started/", "/install/"],
        collapsable: false,
      },
      {
        title: "组件",
        path: "/components/",
        collapsable: false,
        children: [
          "/components/button",
          "/components/icon",
          "/components/input",
          "/components/grid",
          "/components/layout",
          "/components/toast",
          "/components/popover",
          "/components/tabs",
          "/components/collapse",
        ],
      },
    ],
  },
};

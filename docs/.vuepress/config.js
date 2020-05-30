module.exports = {
  base: "/Woo-UI/",
  title: "🐐 Woo-UI",
  description: "我自己的 UI 组件库",
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
  ],
  themeConfig: {
    sidebar: [
      {
        title: "开发指南",
        children: ["/install/", "/get-started/"],
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

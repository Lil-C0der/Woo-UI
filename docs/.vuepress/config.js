module.exports = {
  base: "/Woo-UI/",
  title: "Woo-UI 🐐",
  description: "我自己的 UI 组件库",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s1.ax1x.com/2020/05/29/tuoTM9.png",
        type: "image/png",
      },
    ],
  ],
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
  ],
  themeConfig: {
    repo: "Lil-C0der/Woo-UI", // 默认是 false, 设置为 true 来启用
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "交流", link: "https://github.com/Lil-C0der/Woo-UI/issues" },
    ],
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
          "/components/cascader",
          "/components/slide",
          "/components/menu",
        ],
      },
    ],
  },
};

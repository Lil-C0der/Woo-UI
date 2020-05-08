<template>
  <div class="woo-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "woo-tabs",
  data() {
    return {
      eventBus: new Vue(),
      activeNameCopy: this.activeName,
      activeItemInstance: null,
    };
  },
  model: {
    prop: "activeName",
    event: "change",
  },
  props: {
    activeName: {
      type: String,
    },
    // TODO 垂直Tabs
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 根据 name 属性获取对应的 tabsItem 组件
    getInstance(name) {
      const tabsHead = this.$children.find(
        (vm) => vm.$options.name === "woo-tabs-head"
      );
      return tabsHead.$children.find(
        (child) => child.name === name && !child.disabled
      );
    },
    // 初始化被选中的tabItem
    initTabItem(name) {
      this.activeNameCopy = name;
      this.activeItemInstance = this.getInstance(name);
    },
    checkTabsChildren() {
      if (!this.$children.length) {
        throw new Error(
          "Component tabs's child components should be tabs-head and tabs-body"
        );
      }
    },
    // 同步
    updateActiveItem(name, instance) {
      this.activeNameCopy = name;
      this.activeItemInstance = instance;
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.checkTabsChildren();
    this.initTabItem(this.activeName);
    if (this.activeItemInstance && !this.activeItemInstance.disabled) {
      this.eventBus.$emit(
        "tabChange",
        this.activeNameCopy,
        this.activeItemInstance
      );
    }

    // 监听item点击事件
    this.eventBus.$on("itemClick", (name, itemInstance) => {
      // 同步
      this.updateActiveItem(name, itemInstance);
      // tab-items 被点击的回调函数
      this.$emit("tab-click", name);
    });
  },
  watch: {
    // props
    activeName: {
      handler: function(val) {
        this.activeNameCopy = val;
        this.activeItemInstance = this.getInstance(val);
      },
    },
    // props 的副本
    activeNameCopy: {
      handler: function(newVal) {
        // 发送 tabChange 事件 TabsItem 和 TabsHead 组件监听
        this.eventBus.$emit(
          "tabChange",
          this.activeNameCopy,
          this.activeItemInstance
        );
        // 双向绑定事件 切换面板的回调函数
        this.$emit("change", newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-tabs {
  color: #194568;
}
</style>

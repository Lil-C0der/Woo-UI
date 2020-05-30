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
  },
  methods: {
    // 根据 name 属性获取对应的 tabsItem 组件
    getInstance(name) {
      const tabsHead = this.$children.find(
        (vm) => vm.$options.name === "woo-tabs-head"
      );
      const items = tabsHead.$children.filter(
        (child) => child.$options.name === "woo-tabs-item"
      );
      return items.find((child) => child.name === name) ?? items[0];
    },
    // 初始化被选中的tabItem
    initTabItem(name) {
      this.activeItemInstance = this.getInstance(name);
      this.activeNameCopy = this.activeItemInstance.name;
      this.eventBus.$emit("tabChange", this.activeItemInstance);
    },
    checkTabsChildren() {
      if (!this.$children.length) {
        throw new Error(
          "Component tabs's child components should be tabs-head and tabs-body"
        );
      }
    },
    // 同步
    updateActiveItem(vm) {
      this.activeItemInstance = vm;
      this.activeNameCopy = vm.name;
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
    // 监听item点击事件
    this.eventBus.$on("itemClick", (vm) => {
      // 同步
      this.updateActiveItem(vm);
      // tab-items 被点击的回调函数
      this.$emit("tab-click", vm.name);
    });
  },
  beforeDestroy() {
    this.eventBus.$off("itemClick");
  },
  watch: {
    // props
    activeName: {
      handler: function(val) {
        if (this.getInstance(val).disabled) {
          return;
        }
        this.activeItemInstance = this.getInstance(val);
        this.activeNameCopy = val;
      },
    },
    // props 的副本
    activeNameCopy: {
      handler: function(newVal, oldVal) {
        // 如果 activeNameCopy 没有被初始化则不会触发事件
        if (!oldVal) {
          return;
        }
        // 发送 tabChange 事件 TabsItem 和 TabsHead 组件监听
        if (!this.activeItemInstance.disabled) {
          this.eventBus.$emit("tabChange", this.activeItemInstance);
        }
        // 双向绑定事件 切换面板的回调函数
        this.$emit("change", newVal, oldVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.woo-tabs {
  color: $color-black;
}
</style>

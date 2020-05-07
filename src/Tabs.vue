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
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 初始化被选中的tabItem
    initTabItem() {
      const tabsHead = this.$children.find(
        (vm) => vm.$options.name === "woo-tabs-head"
      );
      this.activeItemInstance = tabsHead.$children.find(
        (child) => child.name === this.activeName
      );
      if (this.activeItemInstance) {
        this.eventBus.$emit(
          "tabChange",
          this.activeNameCopy,
          this.activeItemInstance
        );
      }
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.initTabItem();
    // 监听item点击事件
    this.eventBus.$on("itemClick", (name, itemInstance) => {
      // 同步
      this.activeNameCopy = name;
      this.activeItemInstance = itemInstance;
      // tab-items 被点击的回调函数
      this.$emit("tab-click", name);
    });
  },
  watch: {
    // props
    activeName: {
      handler: function(val) {
        this.activeNameCopy = val;
      },
    },
    // props 的副本
    activeNameCopy: {
      handler: function(newVal) {
        // 发送 tabChange 事件 TabsItem 组件监听
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
  color: rgba(255, 255, 255, 0.65);
}
</style>

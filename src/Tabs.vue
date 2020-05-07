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
      activeNameCopy: null,
      eventBus: new Vue(),
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
  methods: {},
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  mounted() {
    this.eventBus.$on("itemClick", (name) => {
      this.activeNameCopy = name;
      // tab 被点击的回调函数
      this.$emit("tab-click", name);
    });
  },
  watch: {
    // props
    activeName: function(val) {
      this.activeNameCopy = val;
    },
    // props的副本
    activeNameCopy: function(newVal) {
      // 发送事件 TabsItem组件监听
      this.eventBus.$emit("tabChange", this.activeNameCopy);
      // 双向绑定事件 切换面板的回调函数
      this.$emit("change", newVal);
    },
  },
};
</script>

<style lang="scss" scoped></style>

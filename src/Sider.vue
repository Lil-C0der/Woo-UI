<template>
  <div class="woo-sider" :style="siderStyle">
    <slot></slot>
    <div
      v-if="collapsible"
      class="sider-trigger"
      :style="siderStyle"
      @click="handleTriggerClick"
    >
      <woo-icon v-show="showLeftArrow" name="woo-icon-left"></woo-icon>
      <woo-icon v-show="showRightArrow" name="woo-icon-right"></woo-icon>
    </div>
  </div>
</template>

<script>
import WooIcon from "./Icon";

export default {
  name: "woo-sider",
  model: {
    prop: "collapsed",
    event: "collapse",
  },
  data() {
    return {
      isCollapsed: this.collapsed || this.defaultCollapsed,
      currentWidth:
        this.collapsed || this.defaultCollapsed
          ? this.collapsedWidth
          : this.width,
      rotate: false,
    };
  },
  props: {
    width: {
      type: [String, Number],
      default: "200",
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    collapsedWidth: {
      type: [String, Number],
      default: "80",
    },
    collapsed: {
      type: Boolean,
    },
    defaultCollapsed: {
      type: Boolean,
      default: false,
    },
    // 翻转 值为true时表示sider在右边
    reverseArrow: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    WooIcon,
  },
  methods: {
    handleTriggerClick() {
      this.currentWidth = this.newWidth;
      this.isCollapsed = !this.isCollapsed;
      this.$emit("collapse", this.isCollapsed);
    },
    handleChange() {},
  },
  computed: {
    siderStyle() {
      return { width: this.currentWidth + "px" };
    },
    newWidth() {
      if (this.isCollapsed) return this.width;
      else return this.collapsedWidth;
    },
    showLeftArrow() {
      const { reverseArrow, isCollapsed } = this;
      return (reverseArrow && isCollapsed) || !isCollapsed;
    },
    showRightArrow() {
      const { reverseArrow, isCollapsed } = this;
      return (reverseArrow && !isCollapsed) || isCollapsed;
    },
  },
  mounted() {
    console.log(this.$options.data.isCollapsed);
  },
};
</script>

<style lang="scss" scoped>
.woo-sider {
  transition: all 0.3s;
  .sider-trigger {
    position: fixed;
    bottom: 0;
    text-align: center;
  }
}
</style>

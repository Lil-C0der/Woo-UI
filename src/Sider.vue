<template>
  <div class="woo-sider" :style="siderStyle">
    <slot></slot>
    <div v-if="collapsible" class="sider-trigger" @click="handleTriggerClick">
      <woo-icon v-if="collapsible" :name="iconName"></woo-icon>
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
      collapsedCopy: this.collapsed,
      currentWidth: this.collapsed ? this.collapsedWidth : this.width,
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
    // 当前收起状态(v-model)
    collapsed: {
      type: Boolean,
    },
    // 是否默认收起
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
      this.collapsedCopy = !this.collapsedCopy;
      this.$emit("collapse", this.collapsedCopy);
      this.currentWidth = this.newWidth;
    },
  },
  computed: {
    siderStyle() {
      return { width: this.currentWidth + "px" };
    },
    newWidth() {
      if (this.collapsedCopy) return this.collapsedWidth;
      else return this.width;
    },
    iconName() {
      const { reverseArrow, collapsedCopy, collapsed } = this;
      if (!reverseArrow) {
        if (!collapsedCopy) {
          return "left";
        } else return "right";
      } else {
        if (!collapsedCopy) {
          return "right";
        } else return "left";
      }
    },
  },
  watch: {
    collapsed: function(val) {
      this.collapsedCopy = val;
      this.currentWidth = this.newWidth;
    },
  },
  mounted() {
    if (this.defaultCollapsed) {
      this.collapsedCopy = true;
      this.currentWidth = this.collapsedWidth;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-sider {
  transition: all 0.3s;
  position: relative;
  background: $sider-bg-color;
  .sider-trigger {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    line-height: 1.5;
  }
}
</style>

<template>
  <div class="woo-sider" :class="siderClass" :style="siderStyle">
    <slot></slot>
    <div
      v-if="collapsible"
      class="woo-sider-trigger"
      @click="handleTriggerClick"
    >
      <woo-icon
        v-if="collapsible"
        :name="iconName"
        :class="{ 'sider-icon-reverse': reverseArrow }"
      ></woo-icon>
    </div>
  </div>
</template>

<script>
import WooIcon from "../Icon";

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
      type: String,
      default: "200px",
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    collapsedWidth: {
      type: String,
      default: "80px",
    },
    // 当前收起状态(v-model)
    collapsed: {
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
      return { width: this.currentWidth };
    },
    siderClass() {
      return {
        "sider-collapsed": this.collapsedCopy,
      };
    },
    newWidth() {
      if (this.collapsedCopy) return this.collapsedWidth;
      else return this.width;
    },
    iconName() {
      return this.collapsedCopy ? "right" : "left";
    },
  },
  watch: {
    collapsed: function(val) {
      this.collapsedCopy = val;
      this.currentWidth = this.newWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.woo-sider {
  transition: all 0.3s;
  position: relative;
  background: $sider-bg-color;
  .woo-sider-trigger {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    line-height: 1.5;
    .sider-icon-reverse {
      transform: rotate(180deg);
    }
  }
}
</style>

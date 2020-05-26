<template>
  <li
    class="woo-menu-item"
    :class="menuItemClass"
    @click.stop="handleItemClick"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "woo-menu-item",
  inject: ["root"],
  data() {
    return {
      isActive: null,
    };
  },
  props: {
    index: {
      type: String,
    },
  },
  methods: {
    handleItemClick() {
      this.$emit("itemClick", this.index);
      if (this.$parent.$options.name === "woo-sub-menu") {
      }
    },
  },
  computed: {
    menuItemClass() {
      return { "active-menu-item": this.isActive };
    },
  },
  mounted() {
    // 将所有的 item 添加到 Menu 组件的 items 中
    this.root.initItems(this);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-menu-item {
  @extend .menu-item-title;
  cursor: pointer;
  position: relative;
  &:hover {
    color: $tab-active-color;
  }
}
// 顶部被选中的 item 的样式
.woo-menu {
  > .woo-menu-item {
    &.active-menu-item {
      @extend .active-menu-item-title;
    }
  }
}
</style>

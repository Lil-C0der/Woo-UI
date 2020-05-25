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
  cursor: pointer;
  padding: 0 20px;
  line-height: 48px;
  font-size: 14px;
  color: $color-grey;
  &.active-menu-item {
    font-weight: 700;
    color: $color-black;
  }
  &:hover {
    color: $color-black;
  }
}
</style>

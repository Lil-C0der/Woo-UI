<template>
  <li class="woo-submenu" @click.stop="visible = !visible">
    <div class="woo-submenu-title">
      <slot name="title"></slot>
    </div>
    <ul class="woo-submenu-popper" v-show="visible">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "woo-submenu",
  data() {
    return {
      visible: false,
    };
  },
  props: {
    index: {
      type: String,
      default: null,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-submenu {
  position: relative;
  .woo-submenu-title {
    padding: 0 20px;
    line-height: 48px;
    font-size: 14px;
  }
  .woo-submenu-popper {
    border: 1px solid $border-color;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    white-space: nowrap;
    .woo-menu-item {
      line-height: 30px;
    }
    .woo-submenu-title {
      line-height: 30px;
    }
  }
}
</style>

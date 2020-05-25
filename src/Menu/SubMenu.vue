<template>
  <li class="woo-submenu" @click.stop="handleClick">
    <!-- @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave" -->
    <div class="woo-submenu-title">
      <slot name="title"></slot>
      <woo-icon :name="iconName" class="woo-submenu-title-icon"></woo-icon>
    </div>
    <ul class="woo-submenu-popper" v-show="isOpen">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import WooIcon from "../Icon";
export default {
  name: "woo-submenu",
  data() {
    return {
      items: [],
      isOpen: false,
    };
  },
  props: {
    index: {
      type: String,
      default: null,
    },
  },
  components: { WooIcon },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
    handleMouseEnter() {
      this.isOpen = true;
    },
    handleMouseLeave() {
      this.isOpen = false;
    },
  },
  computed: {
    iconName() {
      if (this.$parent.$options.name === "woo-submenu") {
        return this.isOpen ? "left" : "right";
      } else {
        return this.isOpen ? "up" : "down";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-submenu {
  position: relative;
  cursor: pointer;
  .woo-submenu-title {
    padding: 0 20px;
    line-height: 48px;
    font-size: 14px;
    color: $color-grey;
    &-icon {
      font-size: 0.8em;
      margin-left: 0.5em;
    }
  }
  .woo-submenu-popper {
    transform: translateY(5px);
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
    // 第二层的 Popper
    .woo-submenu-popper {
      left: 100%;
      top: 0;
      transform: translateX(5px);
    }
  }
}
</style>

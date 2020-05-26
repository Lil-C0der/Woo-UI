<template>
  <li class="woo-submenu" @click.stop="handleClick" :class="submenuClass">
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
  inject: ["root"],

  data() {
    return {
      items: [],
      subItems: [],
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
    // 收集子组件中的 MenuItem 组件
    initItems() {
      this.items = this.$children.filter(
        (i) => i.$options.name === "woo-menu-item"
      );
    },
    // 收集子组件中的 Submenu 组件
    initSubItems() {
      this.subItems = this.$children.filter(
        (i) => i.$options.name === "woo-submenu"
      );
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
    hasActiveItem() {
      // 有被选中的 MenuItem 组件 或者有被选中的 Submenu 组件
      return (
        this.items.some((item) => item.isActive === true) ||
        this.subItems.some((subItem) => subItem.hasActiveItem === true)
      );
    },
    submenuClass() {
      return { "has-active-item": this.hasActiveItem };
    },
  },
  mounted() {
    this.initItems();
    this.initSubItems();
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
    font-size: $font-size;
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
    background-color: $layout-bg-color;
    white-space: nowrap;
    box-shadow: $button-box-shadow;
    border-radius: $border-radius;
    z-index: 99;
    padding: 5px 0;
    min-width: 136px;
    .woo-menu-item {
      line-height: 30px;
    }
    .woo-submenu {
      .woo-submenu-title {
        line-height: 30px;
        &-icon {
          position: absolute;
          right: 0.5em;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &.has-active-item {
        > .woo-submenu-title {
          color: $tab-active-color;
          background-color: lighten($tab-active-color, 20.5%);
        }
      }
    }
    .active-menu-item {
      background-color: lighten($tab-active-color, 20.5%);
    }
    // 第二层的 Popper
    .woo-submenu-popper {
      left: 100%;
      top: 0;
      transform: translateX(5px);
    }
  }
}
.woo-menu {
  > .has-active-item {
    > .woo-submenu-title {
      font-weight: 700;
      &::after {
        content: "";
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: $tab-active-color;
      }
    }
  }
}
</style>

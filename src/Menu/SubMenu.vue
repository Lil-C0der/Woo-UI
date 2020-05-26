<template>
  <li class="woo-submenu" :class="submenuClass">
    <div
      class="woo-submenu-title"
      @click.stop="handleClick"
      v-click-outside="hidePopper"
      @mouseenter.stop="handleMouseEnter"
      @mouseleave.stop="handleMouseLeave"
    >
      <slot name="title"></slot>
      <woo-icon :name="iconName" class="woo-submenu-title-icon"></woo-icon>
    </div>
    <ul
      class="woo-submenu-popper"
      v-show="isOpen"
      @mouseenter.stop="handlePopperMouseEnter"
      @mouseleave.stop="handleMouseLeave"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import WooIcon from "../Icon";

import clickOutside, { removeListener } from "../click-outside.js";

export default {
  name: "woo-submenu",
  inject: ["root"],
  data() {
    return {
      items: [],
      subItems: [],
      isOpen: false,
      timer: null,
    };
  },
  directives: {
    clickOutside,
  },
  props: {
    index: {
      type: String,
      default: null,
    },
  },
  components: { WooIcon },
  watch: {
    isOpen: function(val) {
      this.root.handleIsOpenChange(val, this);
    },
  },
  methods: {
    handleClick() {
      if (this.root.trigger === "click") {
        if (this.isOpen) {
          this.hidePopper();
        } else this.showPopper();
      }
    },
    // 鼠标移进 title, 延迟 300ms 显示 Popper
    handleMouseEnter() {
      if (this.root.trigger === "hover") {
        // 清空隐藏 Popper 的定时器
        this.clearTimeout();
        setTimeout(() => {
          this.showPopper();
        }, 300);
      }
    },
    // 鼠标移进 title 或 Popper, 延迟 300ms 隐藏 Popper
    handleMouseLeave() {
      if (this.root.trigger === "hover") {
        this.clearTimeout();
        this.timer = setTimeout(() => {
          this.hidePopper();
        }, 300);
      }
    },
    // 鼠标移进 Popper, 清空隐藏 Popper 的定时器
    handlePopperMouseEnter() {
      if (this.root.trigger === "hover") {
        this.clearTimeout();
      }
    },
    clearTimeout() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    showPopper() {
      this.isOpen = true;
    },
    hidePopper() {
      this.isOpen = false;
    },
    // 收集子组件中的 MenuItem 组件
    initItems() {
      this.items = this.$children.filter(
        (i) => i.$options.name === "woo-menu-item"
      );
    },
    // 收集子组件中的 Submenu 组件
    initSubmenu() {
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
    this.initSubmenu();
    this.root.initSubmenu(this);
  },
  beforeDestroy() {
    removeListener();
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-submenu {
  position: relative;
  cursor: pointer;
  .woo-submenu-title {
    @extend .menu-item-title;
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
      // popper 里面被选中的 title
      &.has-active-item {
        > .woo-submenu-title {
          @extend .active-menu-item-bg;
        }
      }
    }
    // popper 里面被选中的 item
    .active-menu-item {
      @extend .active-menu-item-bg;
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
  // 外面被选中的 title
  > .has-active-item {
    > .woo-submenu-title {
      @extend .active-menu-item-title;
    }
  }
}
</style>

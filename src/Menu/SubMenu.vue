<template>
  <li
    class="woo-submenu"
    :class="submenuClass"
    @click.stop="handleClick"
    v-click-outside="hidePopper"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="woo-submenu-title">
      <slot name="title"></slot>
      <woo-icon :name="iconName" class="woo-submenu-title-icon"></woo-icon>
    </div>
    <ul
      class="woo-submenu-list"
      :class="listClass"
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
      isOpen: false,
      timer: null,
      children: [],
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
      // 内层的 submenu 同时是水平 menu 时, 显示向右箭头
      if (this.$parent.$options.name === "woo-submenu" && !this.root.vertical) {
        return "right";
      } else {
        return "down";
      }
    },
    hasActiveItem() {
      // 有被选中的 MenuItem 组件 或者有被选中的 Submenu 组件
      return this.children.some((vm) => vm.isActive || vm.hasActiveItem);
    },
    submenuClass() {
      return {
        "has-active-item": this.hasActiveItem,
        "submenu-opened": this.isOpen,
      };
    },
    listClass() {
      return this.root.vertical
        ? "woo-submenu-list-vertical"
        : "woo-submenu-list-popper";
    },
  },
  created() {
    this.children = this.$children;
  },
  mounted() {
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
      transition: all 0.3s;
      font-size: 0.8em;
      margin-left: 0.5em;
    }
  }

  .woo-submenu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    &.woo-submenu-list-popper {
      @extend .submenu-list-popper;
      .woo-submenu {
        .woo-submenu-title {
          line-height: 30px;
          position: relative;
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
        &.submenu-opened {
          > .woo-submenu-title {
            .woo-submenu-title-icon {
              transform: translateY(-50%) rotate(180deg);
            }
          }
        }
      }
    }

    &.woo-submenu-list-vertical {
      @extend .submenu-list-vertical;
      .woo-submenu {
        .woo-submenu-title {
          line-height: 30px;
          position: relative;
          padding-left: 40px;
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
        &.submenu-opened {
          > .woo-submenu-title {
            .woo-submenu-title-icon {
              transform: translateY(-50%) rotate(180deg);
            }
          }
        }
      }
    }
    .woo-menu-item {
      line-height: 30px;
    }

    // popper 里面被选中的 item
    .active-menu-item {
      @extend .active-menu-item-bg;
    }
    // 第二层的 Popper
    .woo-submenu-list-popper {
      left: 100%;
      top: 0;
      transform: translateX(5px);
    }
  }
  &.submenu-opened {
    .woo-submenu-title {
      &-icon {
        transform: rotate(180deg);
      }
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

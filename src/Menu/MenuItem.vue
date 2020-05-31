<template>
  <li
    class="woo-menu-item"
    :class="menuItemClass"
    :data-index="index"
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
    handleItemClick(e) {
      this.$emit("itemClick", this);
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
  a {
    color: inherit;
    text-decoration: none;
  }
  @extend .menu-item-title;
  cursor: pointer;
  position: relative;
  &:hover {
    color: $tab-active-color;
  }
}
// 水平menu, 顶部被选中 item 的样式
.woo-menu:not(.woo-menu-vertical) {
  > .woo-menu-item {
    &.active-menu-item {
      @extend .active-menu-item-title;
    }
  }
  .woo-submenu-list-popper {
    .woo-menu-item {
      line-height: 30px;
    }
  }
}

// 垂直 menu
.woo-menu-vertical {
  // 被选中的 menu-item
  > .woo-menu-item {
    &.active-menu-item {
      @extend .active-menu-item-title-vertical;
    }
  }
  .woo-submenu-list-vertical {
    > .woo-menu-item {
      padding-left: 40px;
    }
    .woo-menu-item {
      line-height: 40px;
    }
    .woo-submenu {
      .woo-menu-item {
        padding-left: 60px;
      }
    }
  }
}
.woo-submenu-list {
  .active-menu-item {
    @extend .active-menu-item-bg;
  }
}
</style>

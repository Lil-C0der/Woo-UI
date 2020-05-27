<template>
  <ul
    class="woo-menu"
    :class="{ 'woo-menu-vertical': vertical }"
    :style="menuStyle"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "woo-menu",
  data() {
    return {
      items: [],
      submenus: [],
    };
  },
  provide: function() {
    return {
      root: this,
    };
  },
  model: {
    prop: "selectedIndex",
    event: "select",
  },
  props: {
    selectedIndex: {
      type: String,
    },
    trigger: {
      type: String,
      default: "click",
      validator: (val) => ["click", "hover"].indexOf(val) !== -1,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "200px",
    },
  },
  watch: {
    selectedIndex: function(newIndex) {
      this.items.forEach((vm) => {
        vm.isActive = newIndex === vm.index;
      });
    },
  },

  methods: {
    initItems(item) {
      this.items.push(item);
      item.$on("itemClick", this.handleMenuItemClick);
      item.isActive = this.selectedIndex === item.index;
    },
    initSubmenu(submenu) {
      this.submenus.push(submenu);
    },
    hideAllSubmenu() {
      this.submenus.forEach((vm) => {
        vm.isOpen = false;
      });
    },
    // 获取 index 的完整路径
    getIndexPath(vm) {
      let path = [];
      const traverse = (vm) => {
        path.unshift(vm.index);
        if (vm.$parent.$options.name !== "woo-menu") {
          traverse(vm.$parent);
        } else {
          return path;
        }
        return path;
      };
      return traverse(vm);
    },
    handleMenuItemClick(vm) {
      const { index } = vm;
      const path = this.getIndexPath(vm);
      this.$emit("click", { item: vm, index, path });
      // 水平状态下, 点击 menu-item 之后关闭 submenu
      if (!this.vertical) {
        this.hideAllSubmenu();
      }
      if (this.selectedIndex === index) {
        return;
      } else {
        let selectedCopy = index;
        this.$emit("select", selectedCopy);
      }
    },
    handleIsOpenChange(val, vm) {
      const path = this.getIndexPath(vm);
      if (val) {
        // submenu 打开的回调 参数为 submenu 的 index path
        this.$emit("open", path);
      } else {
        // submenu 关闭的回调 参数为 submenu 的 index path
        this.$emit("close", path);
      }
    },
  },
  computed: {
    menuStyle() {
      return this.vertical ? { width: this.width, minHeight: "400px" } : "";
    },
  },
  beforeDestroy() {
    // 移除监听
    this.items.forEach((vm) => {
      vm.$off("itemClick");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-menu {
  transition: all 0.3s;
  border-bottom: 1px solid $border-color;
  list-style: none;
  padding-left: 32px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  &.woo-menu-vertical {
    flex-direction: column;
    border-right: 1px solid $border-color;
    border-bottom: none;
    align-items: flex-start;
    text-align: left;
    padding-left: 0;
    .woo-menu-item,
    .woo-submenu {
      width: 100%;
    }
  }
}
</style>

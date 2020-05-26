<template>
  <ul class="woo-menu">
    <slot></slot>
    <!-- <div class="woo-menu-slide-bar"></div> -->
  </ul>
</template>

<script>
export default {
  name: "woo-menu",
  data() {
    return {
      items: [],
    };
  },
  provide: function() {
    return {
      root: this,
    };
  },
  model: {
    prop: "selectedIndexes",
    event: "select",
  },
  props: {
    selectedIndexes: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    selectedIndexes: function(newIndex, oldIndex) {
      this.items.forEach((vm) => {
        vm.isActive = newIndex.indexOf(vm.index) !== -1;
      });
    },
  },

  methods: {
    initItems(item) {
      this.items.push(item);
      item.$on("itemClick", this.handleMenuItemClick);
      item.isActive = this.selectedIndexes.indexOf(item.index) !== -1;
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
      if (this.selectedIndexes.indexOf(index) !== -1) {
        return;
      } else {
        let selectedCopy;
        if (this.multiple) {
          selectedCopy = this.selectedIndexes.splice(0);
          selectedCopy.push(index);
        } else {
          selectedCopy = [index];
        }
        this.$emit("select", selectedCopy);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-menu {
  border-bottom: 1px solid $border-color;
  list-style: none;
  padding-left: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>

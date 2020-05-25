<template>
  <ul class="woo-menu">
    <slot></slot>
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
    handleMenuItemClick(index) {
      if (this.selectedIndexes.indexOf(index) !== -1) {
        return;
      } else {
        let copy;
        if (this.multiple) {
          copy = this.selectedIndexes.splice(0);
          copy.push(index);
        } else {
          copy = [index];
        }
        this.$emit("select", copy);
      }
    },
  },
  mounted() {
    // this.initItems();
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.woo-menu {
  border: 1px solid red;
  list-style: none;
  padding-left: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // color: $font-blue;
  // position: relative;
}
</style>

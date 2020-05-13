<template>
  <div class="woo-cascader-menu-wrapper">
    <ul class="cascader-menu-left">
      <li @click="handleItemClick" v-for="item in items" :key="item.value">
        {{ item.label }}
      </li>
    </ul>
    <div class="woo-cascader-menu-wrapper" v-if="childrenItems">
      <woo-cascader-menu :items="childrenItems"></woo-cascader-menu>
    </div>
  </div>
</template>

<script>
import CascaderMenu from "./CascaderMenu";

export default {
  name: "woo-cascader-menu",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      selectedItem: null,
      selectedItemLabel: null,
    };
  },
  methods: {
    handleItemClick(e) {
      // this.selectedItem = e;
      this.selectedItemLabel = e.target.innerText;
    },
  },
  computed: {
    childrenItems() {
      const obj =
        this.items.find((n) => n.label === this.selectedItemLabel) ?? [];
      return obj.children;
      // return this.selectedItem?.children;
    },
  },
  components: {
    "woo-cascader-menu": CascaderMenu,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.woo-cascader-menu-wrapper {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  .cascader-menu-left {
    border: 1px solid red;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: 0.5em;
    li {
      border: 1px solid green;
      list-style: none;
      padding: 1em;
    }
  }
}
</style>

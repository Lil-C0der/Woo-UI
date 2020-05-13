<template>
  <div class="woo-cascader-menu-wrapper">
    <ul class="woo-cascader-menu-left">
      <li
        class="woo-cascader-menu-item"
        @click="handleItemClick(item)"
        v-for="item in items"
        :data-isLeaf="item.children"
        :key="item.value"
      >
        <span class="cascader-menu-item-text">
          {{ item.label }}
        </span>
        <woo-icon
          v-if="item.children"
          name="right"
          class="item-icon"
        ></woo-icon>
      </li>
    </ul>
    <woo-cascader-menu
      :items="childrenItems"
      v-if="childrenItems"
    ></woo-cascader-menu>
  </div>
</template>

<script>
import Icon from "./Icon";
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
      isActive: false,
      isLeaf: false,
    };
  },
  methods: {
    // handleItemClick(e) {
    handleItemClick(item) {
      // this.selectedItemLabel = e.target.innerText;
      // console.log(this.selectedItemLabel);
      this.selectedItem = item;
      console.log(this.selectedItem);

      // this.isActive = true;
    },
  },
  computed: {
    childrenItems() {
      // const obj =
      //   this.items.find((n) => n.label === this.selectedItemLabel) ?? [];
      // return obj.children;
      return this.selectedItem?.children;
    },
  },
  components: {
    "woo-icon": Icon,
    "woo-cascader-menu": CascaderMenu,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-cascader-menu-wrapper {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  color: $color-black;
  font-size: $font-size;
  overflow: hidden;
  .woo-cascader-menu-left:last-child {
    border-right: none;
  }
  .woo-cascader-menu-left {
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 136px;
    border-right: 1px solid $border-color;
    .woo-cascader-menu-item {
      overflow: hidden;
      list-style: none;
      padding: 0.5em 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: bottom;
      .cascader-menu-item-text {
        padding: 0 1em 0 0.3em;
        flex: 1;
      }
      .item-icon {
        position: relative;
        right: 0em;
      }
      &:hover {
        background-color: $button-bg-hover;
      }
      &.cascader-menu-item-active {
        background-color: $button-bg-active;
      }
    }
  }
}
</style>

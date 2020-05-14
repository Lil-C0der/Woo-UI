<template>
  <div class="woo-cascader-menu-wrapper">
    <div>{{ level }}</div>
    <ul class="woo-cascader-menu-left">
      <li
        class="woo-cascader-menu-item"
        @click="handleItemClick(item)"
        v-for="item in items"
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
      :level="level + 1"
      :selected="selected"
      @itemChange="handleItemChange"
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
    selected: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedCopy: this.selected,
      selectedItems: this.selected,
    };
  },
  methods: {
    handleItemClick(i) {
      console.log(this.selected);
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = i;
      this.selectedItems = copy;
      this.$emit("itemChange", copy);
    },
    handleItemChange(newArr) {
      this.$emit("itemChange", newArr);
    },
  },
  computed: {
    childrenItems() {
      let currentSelectedItem = this.selected[this.level];
      return currentSelectedItem?.children;
    },
  },
  watch: {
    selected: function() {
      this.selectedCopy = this.selected;
    },
  },
  components: {
    "woo-icon": Icon,
    "woo-cascader-menu": CascaderMenu,
  },
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
    border-right: 1px solid $border-color-light;
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

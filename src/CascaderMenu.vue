<template>
  <div class="woo-cascader-menu-wrapper">
    <ul class="woo-cascader-menu-left">
      <li
        class="woo-cascader-menu-item"
        :class="selectedItem(item)"
        @click.stop="handleItemClick(item)"
        v-for="item in items"
        :key="item.value"
      >
        <span class="cascader-menu-item-text">
          {{ item.name }}
        </span>
        <!-- loading 图标 -->
        <template v-if="loadingIconVisible(item)">
          <woo-icon name="loading"></woo-icon>
        </template>
        <!-- 右箭头 -->
        <template v-else>
          <woo-icon
            v-if="arrowVisible(item)"
            name="right"
            class="item-icon"
          ></woo-icon>
        </template>
      </li>
    </ul>
    <woo-cascader-menu
      :items="childrenItems"
      :level="level + 1"
      :selected="selected"
      :selected-items="selectedItems"
      :loading-item="loadingItem"
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
    // 对象数组 选中的items
    selectedItems: {
      type: Array,
      default: () => [],
    },
    // id数组
    selected: {
      type: Array,
      default: () => [],
    },
    // 所有的items
    items: {
      type: Array,
    },
    // 当前层级
    level: {
      type: Number,
      default: 0,
    },
    // 正在加载的item
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {
    handleItemClick(i) {
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      copy[this.level] = i;
      copy.splice(this.level + 1);
      this.$emit("itemChange", copy);
    },
    handleItemChange(newArr) {
      this.$emit("itemChange", newArr);
    },
    // 控制小箭头的显示
    arrowVisible(item) {
      if ("isLeaf" in item) {
        return !item.isLeaf;
      } else return item.children;
    },
    // 控制 loading 图标的显示
    loadingIconVisible(item) {
      // 不为叶子节点 且当前 item 为 loadingItem
      return this.arrowVisible(item) && this.loadingItem.id === item.id;
    },
    // 是否为选中项
    selectedItem(item) {
      const { selected, level } = this;
      if (selected[level] === item.id) {
        return "selected-item";
      }
    },
  },
  computed: {
    childrenItems() {
      const item = this.items.find(
        (i) => i.id === this.selectedItems[this.level]?.id
      );
      return item?.children;
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
  .woo-cascader-menu-left:last-child {
    border-right: none;
  }
  .woo-cascader-menu-left {
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 136px;
    white-space: nowrap;
    border-right: 1px solid $border-color-light;
    min-height: 120px;
    max-height: 200px;
    overflow-y: auto;
    .woo-cascader-menu-item {
      overflow: hidden;
      list-style: none;
      padding: 0.5em 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: bottom;
      user-select: none;
      .cascader-menu-item-text {
        padding: 0 1em 0 0.3em;
        flex: 1;
      }
      .item-icon {
        position: relative;
        right: 0em;
      }
      .woo-icon-loading {
        animation: spin 0.8s linear infinite;
      }
      &:hover {
        background-color: $button-bg-hover;
      }
      &.cascader-menu-item-active {
        background-color: $button-bg-active;
      }
    }
    .selected-item {
      background-color: $button-bg-active;
    }
  }
}
</style>

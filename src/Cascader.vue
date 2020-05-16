<template>
  <div class="woo-cascader" @click="handleClick" v-click-outside="hidePopper">
    <div class="woo-cascader-wrapper">
      <woo-input
        readonly
        :value="inputVal"
        ref="inputRef"
        class="woo-cascader-picker"
      />
      <div class="popper-arrow" v-show="popperVisible"></div>
      <div class="woo-cascader-popper" v-show="popperVisible">
        <woo-cascader-menu
          :items="source"
          :selected="selected"
          :selected-items="selectedItems"
          :loading-item="loadingItem"
          @itemChange="handleItemChange"
        ></woo-cascader-menu>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import CascaderMenu from "./CascaderMenu";

import clickOutside from "./click-outside.js";
import { removeListener } from "./click-outside.js";

export default {
  name: "woo-cascader",
  components: {
    "woo-cascader-menu": CascaderMenu,
  },
  model: {
    prop: "selected",
    event: "change",
  },
  directives: {
    clickOutside,
  },
  props: {
    // id
    selected: {
      type: Array,
      default: () => [],
    },
    source: {
      type: Array,
    },
    // 动态加载数据源的方法
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popperVisible: false,
      // obj
      selectedItems: [],
      // 正在加载的item
      loadingItem: {},
    };
  },
  methods: {
    handleClick() {
      if (!this.popperVisible) {
        this.showPopper();
      } else {
        this.hidePopper();
      }
    },
    showPopper() {
      this.popperVisible = true;
    },
    hidePopper() {
      this.popperVisible = false;
    },
    handleItemChange(items) {
      const str1 = this.selected.toString();
      const str2 = items.toString();
      if (str1 !== str2) {
        const lastItem = items[items.length - 1];
        let simple = (children, id) => {
          return children.find((i) => i.id === id);
        };
        let complex = (children, id) => {
          let noChildren = [];
          let hasChildren = [];
          children.forEach((i) => {
            if (i.children) {
              hasChildren.push(i);
            } else {
              noChildren.push(i);
            }
          });
          let item = simple(noChildren, id);
          if (item) {
            return item;
          } else {
            let item = simple(hasChildren, id);
            if (item) {
              return item;
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                let item = complex(hasChildren[i].children, id);
                if (item) {
                  return item;
                }
              }
              return undefined;
            }
          }
        };
        const updateChildren = (res) => {
          if (res) {
            const copy = JSON.parse(JSON.stringify(this.source));
            const toUpdateItem = complex(copy, lastItem.id);
            toUpdateItem.children = res;
            this.$emit("update:source", copy);
            this.loadingItem = {};
          } else {
            this.loadingItem = {};
            return false;
          }
        };
        if (this.loadData) {
          this.loadData(lastItem, updateChildren);
          this.loadingItem = lastItem;
        }
        this.selectedItems = items;
        const ids = items.map((n) => n.id);
        this.$emit("change", ids);
      }
    },
    getItems(items, ids) {
      this.selectedItems = [];
      const getItemById = (items, ids) => {
        const idsCopy = ids.slice(0);
        const item = items.find((i) => idsCopy.includes(i.id));
        if (item) {
          idsCopy.splice(idsCopy.indexOf(item.id), 1);
          this.selectedItems.push(item);
          if (item.children) {
            getItemById(item.children, idsCopy);
          } else return false;
        } else return false;
      };
      getItemById(items, ids);
    },
  },
  watch: {
    popperVisible: function(visible) {
      this.$emit("visible-change", visible);
    },
    selected: function() {
      this.getItems(this.source, this.selected);
    },
  },
  computed: {
    inputVal() {
      return this.selectedItems?.map((i) => i.name).join(" / ");
    },
  },
  mounted() {
    if (this.selected.length) {
      this.getItems(this.source, this.selected);
    }
  },
  beforeDestroy() {
    removeListener();
  },
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-cascader {
  position: relative;
  display: inline-block;
  .woo-cascader-wrapper {
    height: 100%;
    .woo-cascader-picker {
    }
  }
  .woo-cascader-popper {
    border: 1px solid $border-color;
    background-color: $layout-bg-color;
    border-radius: $border-radius;
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(10px);
    z-index: 97;
    box-shadow: $cascader-box-shadow;
  }
  .popper-arrow {
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top: 0;
    border-bottom-color: $border-color;
    position: absolute;
    z-index: 98;
    left: 10px;
    top: 100%;
    transform: translateY(2px);
    &::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      border: 8px solid transparent;
      border-top: 0;
      border-bottom-color: $layout-bg-color;
      transform: translate(-8px, 1px);
    }
  }
}
</style>

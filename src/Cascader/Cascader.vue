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
          :selected="selectedCopy"
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
import WooCascaderMenu from "./CascaderMenu";
import WooInput from "../Input";

import clickOutside, { removeListener } from "../click-outside.js";

export default {
  name: "woo-cascader",
  components: {
    WooCascaderMenu,
    WooInput,
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
      // obj 数组
      selectedItems: [],
      // id 数组
      selectedCopy: this.selected,
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
    // 参数为所有选中的对象
    handleItemChange(items) {
      const str1 = this.selected?.toString();
      const str2 = items.toString();
      // 只有点击了不同选项才执行之后的操作
      if (str1 !== str2) {
        const lastItem = items[items.length - 1];
        // 只遍历第一层
        let traverse = (children, id) => {
          // 根据 id 来查找 children 中的元素
          return children.find((i) => i.id === id);
        };
        // 更深层的遍历
        let deepTraverse = (children, id) => {
          // 不含 children 属性的节点数组
          let noChildren = [];
          // 含有 children 属性的节点数组
          let hasChildren = [];
          children.forEach((i) => {
            if (i.children) {
              hasChildren.push(i);
            } else {
              noChildren.push(i);
            }
          });
          // 在 noChildren 节点数组中遍历一次
          let item = traverse(noChildren, id);
          if (item) {
            return item;
          } else {
            // 找不到则遍历 hasChildren 节点数组
            let item = traverse(hasChildren, id);
            if (item) {
              return item;
            } else {
              // 找不到则对 hasChildren 数组中每一个元素继续进行深层遍历
              for (let i = 0; i < hasChildren.length; i++) {
                let item = deepTraverse(hasChildren[i].children, id);
                if (item) {
                  return item;
                }
              }
              return undefined;
            }
          }
        };
        // 动态加载子节点
        const updateChildren = (res) => {
          if (res) {
            // 深拷贝 source 数组
            const copy = JSON.parse(JSON.stringify(this.source));
            // 深层遍历 根据节点的 id 来找出节点对象
            const toUpdateItem = deepTraverse(copy, lastItem.id);
            // 给节点对象添加 children 属性 其值为动态返回的res
            toUpdateItem.children = res;
            this.$emit("update:source", copy);
            // 停止 loading 动画
            this.loadingItem = {};
          } else {
            this.loadingItem = {};
            return false;
          }
        };
        if (this.loadData) {
          // 调用传入的动态加载子节点函数
          this.loadData(lastItem, updateChildren);
          // loading 动画
          this.loadingItem = lastItem;
        }

        this.selectedItems = items;
        this.selectedCopy = items.map((n) => n.id);
        // 修改对象数组
        this.getItems(this.source, this.selectedCopy);
        // 对外发出 change 事件 参数为所有选中项的 id 数组
        this.$emit("change", this.selectedCopy);
      }
    },
    getItems(items, ids) {
      // 根据传入的 id 数组来找到与之对应的节点对象
      const getItemById = (items, ids) => {
        // 深拷贝 id 数组
        const idsCopy = ids.slice(0);
        // 找出对应的对象
        const item = items.find((i) => idsCopy.includes(i.id));
        if (item) {
          // 从 id 数组中删掉已经找到的 id，避免不同层级相同 id 的情况使出现 Bug
          idsCopy.splice(idsCopy.indexOf(item.id), 1);
          // 添加到对象数组中
          this.selectedItems.push(item);
          if (item.children) {
            // 继续在第一级选项的 children 数组中查找下一级的对象
            getItemById(item.children, idsCopy);
          } else return false;
        } else return false;
      };
      this.selectedItems = [];
      getItemById(items, ids);
    },
  },
  watch: {
    popperVisible: function(visible) {
      this.$emit("visible-change", visible);
    },
    selected: function() {
      this.selectedCopy = this.selected;
      this.getItems(this.source, this.selectedCopy);
    },
  },
  computed: {
    inputVal() {
      return this.selectedItems?.map((i) => i.name).join(" / ");
    },
  },
  mounted() {
    if (this.selected?.length) {
      this.getItems(this.source, this.selected);
    }
  },
  beforeDestroy() {
    removeListener();
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.woo-cascader {
  position: relative;
  display: inline-block;
  .woo-cascader-wrapper {
    height: 100%;
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

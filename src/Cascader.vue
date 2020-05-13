<template>
  <div class="woo-cascader">
    <div class="woo-cascader-wrapper">
      <woo-input class="woo-cascader-picker" @click.native="handleClick" />
      <div class="woo-cascader-popper" v-show="popperVisible">
        <div>
          <woo-cascader-menu :items="source"></woo-cascader-menu>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import CascaderMenu from "./CascaderMenu";

export default {
  name: "woo-cascader",
  components: {
    "woo-cascader-menu": CascaderMenu,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popperVisible: false,
      level1Item: null,
    };
  },
  methods: {
    handleClick() {
      this.popperVisible = !this.popperVisible;
    },
    selectLevel1(e) {
      this.level1Item = e.target.innerText;
    },
  },
  computed: {
    levelItems() {
      const obj = this.source.find((n) => n.label === this.level1Item) ?? [];
      return obj.children;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-cascader {
  .woo-cascader-wrapper {
    height: 100%;
  }
  .woo-cascader-picker {
  }
  .woo-cascader-popper {
    height: 200px;
    position: relative;
    left: 0;
    top: 0;
  }
}
</style>

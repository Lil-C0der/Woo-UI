<template>
  <div class="woo-cascader">
    <div class="woo-cascader-wrapper">
      <woo-input
        readonly
        :value="inputVal"
        ref="inputRef"
        class="woo-cascader-picker"
        @click.native.stop="handleClick"
      />
      <div class="woo-cascader-popper" v-show="popperVisible">
        <woo-cascader-menu
          :items="source"
          :selected="selected"
          @itemChange="handleItemChange"
        ></woo-cascader-menu>
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
  model: {
    prop: "selected",
    event: "change",
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popperVisible: false,
      selectedCopy: this.selected,
    };
  },
  methods: {
    handleClick() {
      this.popperVisible = !this.popperVisible;
      document.addEventListener("click", () => {
        this.popperVisible = false;
      });
    },
    handleItemChange(arr) {
      console.log(arr.map((n) => n.label));
      const str1 = this.selected.map((n) => n.value).toString();
      const str2 = arr.map((n) => n.value).toString();
      if (str1 !== str2) {
        this.$emit("change", arr);
      }
    },
  },
  watch: {},
  computed: {
    inputVal() {
      return this.selected.map((n) => n.label).join(" / ");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "_var";

.woo-cascader {
  position: relative;
  .woo-cascader-wrapper {
    height: 100%;
  }
  .woo-cascader-popper {
    border: 1px solid $border-color;
    background-color: $layout-bg-color;
    border-radius: $border-radius;
    overflow: hidden;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(10px);
    z-index: 97;
    box-shadow: $cascader-box-shadow;
    // filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.15));
  }
}
</style>

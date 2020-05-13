<template>
  <div class="woo-cascader">
    <div class="woo-cascader-wrapper">
      <woo-input class="woo-cascader-picker" @click.native="handleClick" />
      <div class="woo-cascader-popper" v-show="popperVisible">
        <div>
          {{ source[0].label }}
        </div>
        <div>
          {{ source[1].label }}
        </div>
        <!-- <ul class="woo-cascader-menu" v-for="i in source" :key="i.value">
          <cascader-menu-item :source-item="i"></cascader-menu-item>
        </ul> -->
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
// import CascaderMenuItem from "./CascaderMenuItem";

export default {
  name: "woo-cascader",
  components: {
    // CascaderMenuItem,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popperVisible: false,
    };
  },
  methods: {
    handleClick() {
      this.popperVisible = !this.popperVisible;
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
    border: 1px solid red;
    height: 20px;
    width: 200%;
  }
  ul {
    list-style: none;
  }
}
</style>

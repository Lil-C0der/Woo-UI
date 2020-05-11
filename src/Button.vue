<template>
  <button
    @click="$emit('click')"
    class="woo-button"
    :class="`icon-${iconPosition}`"
  >
    <span class="content">
      <slot></slot>
    </span>
    <woo-icon v-show="loading" name="loading"></woo-icon>
    <woo-icon v-show="!loading" v-if="iconName" :name="iconName"></woo-icon>
  </button>
</template>

<script>
import WooIcon from "./Icon";

export default {
  name: "woo-button",
  data() {
    return {};
  },
  props: {
    iconName: {
      type: String,
      default: null,
    },
    // icon位置 left or right
    iconPosition: {
      type: String,
      default: "left",
      // 校验函数
      validator: function(val) {
        return val === "left" || val === "right";
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    WooIcon,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$border-radius: 4px;
$button-bg: #f5f5f5;
$button-bg-hover: #f1f1f1;
$button-bg-active: #d0d0d0;
$color: #333;
$color-active: #fefefe;
$border-color: #dedde2;
$border-color-hover: #c0c4cc;

.woo-button {
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.14em;
  font-size: $font-size;
  height: $button-height;
  background-color: $button-bg;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  &:hover {
    background-color: $button-bg-hover;
    border-color: $border-color-hover;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.15);
  }
  &:active {
    background-color: $button-bg-active;
    color: $color-active;
  }
  &:focus {
    outline: none;
  }
  .woo-icon {
    margin: 0 0.3em 0 0;
    order: 1;
  }
  .content {
    order: 2;
  }
  &.icon-right {
    .woo-icon {
      margin: 0 0 0 0.3em;
      order: 2;
    }
    .content {
      order: 1;
    }
  }
}
</style>

<template>
  <button @click="$emit('click')" class="woo-button" :class="buttonClass">
    <span class="content">
      <slot></slot>
    </span>
    <woo-icon v-show="loading" name="loading"></woo-icon>
    <woo-icon v-show="!loading" v-if="iconName" :name="iconName"></woo-icon>
  </button>
</template>

<script>
import WooIcon from "../Icon";

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
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "normal",
      validator(val) {
        return (
          ["normal", "primary", "dashed", "success", "danger", "warn"].indexOf(
            val
          ) !== -1
        );
      },
    },
  },
  computed: {
    buttonClass() {
      const { iconPosition, type, disabled } = this;
      return {
        [`icon-${iconPosition}`]: iconPosition,
        ["woo-button-disabled"]: disabled,
        [`woo-button-${type}`]: type,
      };
    },
  },
  components: {
    WooIcon,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.woo-button {
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.14em;
  font-size: $font-size;
  height: $height;
  background-color: $button-bg;
  color: $color-black;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  &:hover {
    background-color: $button-bg-hover;
    border-color: $border-color-hover;
    box-shadow: $button-box-shadow;
  }
  &:active {
    background-color: $button-bg-active;
    color: $color-white;
  }
  &:focus {
    outline: none;
  }
  &.woo-button-disabled,
  &.woo-button-disabled:hover,
  &.woo-button-disabled:active {
    color: $disabled-color;
    border-color: $border-color-disabled;
    background-color: $button-bg-disabled;
    box-shadow: none;
    cursor: not-allowed;
  }
  &.woo-button-dashed {
    border-style: dashed;
  }
  &.woo-button-primary {
    background-color: $button-bg-primary;
    &.woo-button-primary:hover {
      background-color: $button-bg-primary-hover;
    }
    &.woo-button-primary:active {
      background-color: $button-bg-primary-active;
    }
  }
  &.woo-button-success {
    background-color: $button-bg-success;
    &.woo-button-success:hover {
      background-color: $button-bg-success-hover;
    }
    &.woo-button-success:active {
      background-color: $button-bg-success-active;
    }
  }
  &.woo-button-warn {
    background-color: $button-bg-warn;
    &.woo-button-warn:hover {
      background-color: $button-bg-warn-hover;
    }
    &.woo-button-warn:active {
      background-color: $button-bg-warn-active;
    }
  }
  &.woo-button-danger {
    background-color: $button-bg-danger;
    &.woo-button-danger:hover {
      background-color: $button-bg-danger-hover;
    }
    &.woo-button-danger:active {
      background-color: $button-bg-danger-active;
    }
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

  .woo-icon-loading {
    animation: spin 0.8s linear infinite;
  }
}
</style>

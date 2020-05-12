<template>
  <div class="woo-input-wrapper" :class="{ error }">
    <input
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    />
    <template v-if="showClear">
      <woo-icon
        @click="clearInput"
        v-show="clearVisible"
        name="clear"
      ></woo-icon>
    </template>
    <template v-if="error">
      <div class="woo-input-tip">
        <woo-icon name="error"></woo-icon>
        <span class="message">
          {{ error }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import WooIcon from "./Icon";

export default {
  name: "woo-input",
  data() {
    return {
      modelVal: "",
      hovering: false,
      focused: false,
    };
  },
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  components: {
    WooIcon,
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleFocus(e) {
      this.focused = true;
      this.$emit("focus", e.target.value);
    },
    handleBlur(e) {
      this.focused = false;
      this.$emit("blur", e.target.value);
    },
    clearInput() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
  },
  computed: {
    showClear() {
      return this.clearable && !this.readonly && !this.disabled;
    },
    clearVisible() {
      return this.value && (this.hovering || this.focused);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "var";

.woo-input-wrapper {
  display: inline-flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  font-size: $font-size;
  > .woo-icon-clear {
    position: absolute;
    right: 1em;
    color: $border-color;
    &:hover {
      cursor: default;
      color: $border-color-hover;
    }
  }
  > :not(:last-child) {
    margin-right: 0.33em;
  }
  input {
    border: none;
    outline: none;
    height: $height;
    padding: 9px 8px;
    font-size: inherit;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    color: $color-black;
    flex: 1;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-hover;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
    }
    &[disabled],
    &[readonly] {
      color: $disabled-color;
      border-color: $border-color-disabled;
      background-color: $bg-disabled;
      cursor: not-allowed;
    }
    &[readonly] {
      cursor: default;
    }
  }
  &.error {
    color: $color-red;
    input {
      border-color: $color-red;
      position: relative;
      &:hover {
        border-color: $color-deep-red;
      }
      &:focus {
        border-color: $color-deep-red;
      }
    }
    .woo-input-tip {
      display: inline-flex;
      align-items: center;
      .woo-icon-error {
        margin-right: 0.3em;
      }
    }
  }
}
</style>

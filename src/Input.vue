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
      <woo-icon name="error"></woo-icon>
      <span class="message">
        {{ error }}
      </span>
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
.woo-input-wrapper {
  $height: 32px;
  $color: #333;
  $disabled-color: #a0a0a0;
  $border-color: #dedde2;
  $border-color-hover: #c0c4cc;
  $border-color-disabled: #c3c3c3;
  $border-radius: 4px;
  $font-size: 12px;
  $red: #de426b;
  $deep-red: #c02955;
  $bg-disabled: #ebebeb;
  display: inline-flex;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 220px;
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
    color: $color;
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
    input {
      border-color: $red;
      &:hover {
        border-color: $deep-red;
      }
      &:focus {
        border-color: $deep-red;
      }
    }
    color: $red;
  }
  .message {
    font-size: inherit;
  }
}
</style>

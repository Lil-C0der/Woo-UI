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
    />
    <!-- TODO 清除输入框 -->
    <template v-if="showClear">
      <woo-icon
        @click.native="clearInput"
        v-show="value"
        name="woo-icon-clear"
      ></woo-icon>
    </template>
    <template v-if="error">
      <woo-icon name="woo-icon-error"></woo-icon>
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
      // modelVal: value,
      modelVal: "",
    };
  },
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
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
      this.$emit("focus", e.target.value);
    },
    handleBlur(e) {
      this.$emit("blur", e.target.value);
    },
    clearInput() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      console.log("got there");
    },
  },
  computed: {
    showClear() {
      return this.clearable && !this.readonly && !this.disabled;
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-input-wrapper {
  $height: 32px;
  $color: #333;
  $border-color: #dedde2;
  $border-color-hover: #c0c4cc;
  $border-radius: 4px;
  $font-size: 12px;
  $red: #de426b;
  $deep-red: rgb(192, 41, 85);
  $bg-disabled: #ebebeb;
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > .woo-icon-clear {
    position: relative;
    left: -2em;
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
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-hover;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
    }
    &[disabled],
    &[readonly] {
      color: #a0a0a0;
      border-color: #c3c3c3;
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

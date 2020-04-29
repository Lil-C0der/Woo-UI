<template>
  <button class="woo-button" :class="`icon-${iconPosition}`">
    <div class="content">
      <slot></slot>
    </div>
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: {
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
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.woo-button {
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.07em;
  font-size: var(--font-size);
  height: var(--button-height);
  background-color: var(--button-bg);
  color: var(--color);
  border: 1px solid var(--boder-color);
  border-radius: var(--border-radius);
  &:hover {
    background-color: var(--button-bg-hover);
    border-color: var(--boder-color-hover);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: var(--button-bg-active);
    color: var(--color-active);
  }
  &:focus {
    outline: none;
  }
  .icon {
    margin: 0 0.3em 0 0;
    order: 1;
  }
  .content {
    order: 2;
  }
  &.icon-right {
    .icon {
      margin: 0 0 0 0.3em;
      order: 2;
    }
    .content {
      order: 1;
    }
  }
}
</style>

<template>
  <div
    class="woo-tabs-item"
    :class="itemClass"
    @click="handleClick"
    :data-name="name"
  >
    <slot></slot>
    <slot name="name"></slot>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      isActive: null,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("itemClick", this);
      this.$emit("click", this.name);
    },
  },
  computed: {
    itemClass() {
      return { "item-active": this.isActive, "item-disabled": this.disabled };
    },
  },
  mounted() {
    this.eventBus?.$on(["tabChange"], (vm) => {
      this.isActive = this.name === vm.name;
    });
  },
  beforeDestroy() {
    this.eventBus?.$off(["tabChange"]);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.woo-tabs-item {
  padding: 0 2em;
  margin-right: 1em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1px;
  font-size: 16px;
  cursor: pointer;
  .woo-icon {
    vertical-align: middle;
  }
  &:hover {
    color: $tab-active-color;
  }
  &.item-active {
    font-weight: bold;
    color: $tab-active-color;
  }
  &.item-disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>

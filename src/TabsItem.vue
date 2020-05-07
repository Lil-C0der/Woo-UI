<template>
  <div
    class="woo-tabs-item"
    :class="{ 'item-active': isActive }"
    @click="handleClick"
  >
    <slot></slot>
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
      this.eventBus.$emit("itemClick", this.name, this);
    },
  },
  mounted() {
    this.eventBus.$on(["itemClick", "tabChange"], (name) => {
      this.isActive = this.name === name;
    });
  },
};
</script>

<style lang="scss" scoped>
$active-color: #8c8baa;
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
  &:hover {
    color: $active-color;
  }
  &.item-active {
    color: $active-color;
  }
}
</style>

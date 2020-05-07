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
      this.eventBus.$emit("itemClick", this.name);
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
.woo-tabs-item {
  padding: 0 2em;
  margin-right: 1em;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: navy;
  &.item-active {
    border-bottom: 2px solid #eff1fe;
  }
}
</style>

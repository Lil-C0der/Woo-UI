<template>
  <div
    class="woo-tabs-pane"
    v-show="isActive"
    :class="{ 'pane-active': isActive }"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-pane",
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
@import "_var";
.woo-tabs-pane {
  padding: 16px;
  &.pane-active {
    color: $font-blue;
  }
}
</style>

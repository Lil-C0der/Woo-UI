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
    this.eventBus.$on(["itemClick", "tabChange"], (name) => {
      this.isActive = this.name === name;
    });
  },
  beforeDestroy() {
    this.eventBus.$off(["itemClick", "tabChange"]);
  },
};
</script>

<style lang="scss" scoped>
.woo-tabs-pane {
  padding: 16px;
  &.pane-active {
    color: #194568;
  }
}
</style>

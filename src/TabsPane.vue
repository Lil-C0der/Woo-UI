<template>
  <div
    class="woo-tabs-pane"
    v-show="isActive"
    :class="{ 'pane-active': isActive }"
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
};
</script>

<style lang="scss" scoped>
.pane-active {
  color: green;
}
</style>

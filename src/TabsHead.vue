<template>
  <div class="woo-tabs-head">
    <slot></slot>
    <slot name="extraActions"></slot>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"],
  name: "woo-tabs-head",
  data() {
    return {};
  },
  props: {},
  methods: {
    handleItemClick(name) {
      console.log(name);
    },
  },
  created() {
    this.eventBus.$on("itemClick", (name) => {
      console.log(name);
    });
  },
};
</script>

<style lang="scss" scoped></style>

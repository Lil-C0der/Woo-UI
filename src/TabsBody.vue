<template>
  <div class="woo-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-body",
  inject: ["eventBus"],
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {
    this.eventBus.$on("itemClick", (name) => {
      console.log(name);
    });
  },
};
</script>

<style scoped></style>

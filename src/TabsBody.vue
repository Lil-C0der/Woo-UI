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
};
</script>

<style scoped></style>

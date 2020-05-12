<template>
  <div>
    <woo-button
      icon-name="download"
      :loading="isLoading"
      @click="isLoading = !isLoading"
      >Download</woo-button
    >
  </div>
</template>

<script>
import Button from "../../../src/Button.vue";

export default {
  components: {
    "woo-button": Button,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style scoped></style>

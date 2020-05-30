<template>
  <div class="demo">
    <woo-button
      icon-name="download"
      :loading="isLoading"
      @click="isLoading = !isLoading"
      >Download</woo-button
    >
  </div>
</template>

<script>
import WooButton from "../../../src/Button/Button.vue";

export default {
  components: {
    WooButton,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

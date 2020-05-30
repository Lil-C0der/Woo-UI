<template>
  <div class="demo">
    <woo-button icon-name="home">Home</woo-button>
    <woo-button icon-name="thumbs-up">Likes</woo-button>
    <woo-button icon-name="settings">Settings</woo-button>
    <woo-button icon-name="international"></woo-button>
    <woo-button icon-name="right" icon-position="right">Info</woo-button>
  </div>
</template>

<script>
import WooButton from "../../../src/Button/Button.vue";

export default {
  components: {
    WooButton,
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

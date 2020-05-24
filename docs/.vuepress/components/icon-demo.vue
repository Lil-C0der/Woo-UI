<template>
  <div>
    <woo-button icon-name="home">Home</woo-button>
    <woo-button icon-name="thumbs-up">Likes</woo-button>
    <woo-button icon-name="settings">Settings</woo-button>
    <woo-button icon-name="international"></woo-button>
    <woo-button icon-name="right" icon-position="right">Info</woo-button>
  </div>
</template>

<script>
import Button from "../../../src/Button/Button.vue";

export default {
  components: {
    "woo-button": Button,
  },
};
</script>

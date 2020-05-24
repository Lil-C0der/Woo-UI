<template>
  <div>
    <woo-button>NORMAL</woo-button>
    <woo-button disabled>DISABLED</woo-button>
    <woo-button type="dashed">DASHED</woo-button>
    <woo-button type="primary">PRIMARY</woo-button>
    <woo-button type="success">SUCCESS</woo-button>
    <woo-button type="warn">WARN</woo-button>
    <woo-button type="danger">DANGER</woo-button>
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

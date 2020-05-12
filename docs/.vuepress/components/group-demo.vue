<template>
  <div>
    <woo-button-group>
      <woo-button icon-name="left">上一页</woo-button>
      <woo-button icon-name="right" icon-position="right">下一页</woo-button>
    </woo-button-group>
    <woo-button-group>
      <woo-button icon-name="download"></woo-button>
      <woo-button icon-name="upload"></woo-button>
    </woo-button-group>
    <woo-button-group>
      <woo-button disabled icon-name="download"></woo-button>
      <woo-button disabled icon-name="upload"></woo-button>
    </woo-button-group>
  </div>
</template>

<script>
import Button from "../../../src/Button.vue";
import ButtonGroup from "../../../src/ButtonGroup.vue";

export default {
  components: {
    "woo-button": Button,
    "woo-button-group": ButtonGroup,
  },
};
</script>

<style scoped></style>

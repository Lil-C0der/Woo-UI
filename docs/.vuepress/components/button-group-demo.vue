<template>
  <div class="demo">
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
import WooButton from "../../../src/Button/Button.vue";
import WooButtonGroup from "../../../src/Button/ButtonGroup.vue";

export default {
  components: {
    WooButton,
    WooButtonGroup,
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

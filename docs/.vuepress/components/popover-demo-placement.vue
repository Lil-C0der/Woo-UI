<template>
  <div class="demo">
    <woo-popover>
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>TOP</woo-button>
    </woo-popover>

    <woo-popover placement="bottom">
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>BOTTOM</woo-button>
    </woo-popover>

    <woo-popover placement="left">
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>LEFT</woo-button>
    </woo-popover>

    <woo-popover placement="right">
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>RIGHT</woo-button>
    </woo-popover>
  </div>
</template>

<script>
import Vue from "vue";
import WooButton from "../../../src/Button/Button";
import WooPopover from "../../../src/Popover";

export default {
  components: {
    WooButton,
    WooPopover,
  },
  methods: {},
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.demo {
  padding-top: 10px;
}
h4 {
  margin: 0;
}
</style>

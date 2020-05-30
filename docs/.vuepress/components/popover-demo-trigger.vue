<template>
  <div class="demo">
    <woo-popover trigger="click">
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>点击激活</woo-button>
    </woo-popover>

    <woo-popover trigger="hover">
      <template #content>
        <h4>Title</h4>
        <span>Content</span>
      </template>
      <woo-button>hover 激活</woo-button>
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

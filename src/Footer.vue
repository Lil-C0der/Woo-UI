<template>
  <footer class="woo-footer" :style="footerStyle">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "woo-content",
  data() {
    return {};
  },
  props: {
    height: {
      type: [String, Number],
      default: "64",
    },
  },
  computed: {
    footerStyle() {
      return { height: this.height + "px", lineHeight: this.height + "px" };
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "var";
.woo-footer {
  background-color: $footer-bg-color;
}
</style>

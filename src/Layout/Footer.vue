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
      type: String,
      default: "64px",
    },
  },
  computed: {
    footerStyle() {
      return { height: this.height };
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.woo-footer {
  padding: 0 20px;
}
</style>

<template>
  <header class="woo-header" :style="headerStyle">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "woo-header",
  data() {
    return {};
  },
  components: {},
  props: {
    height: {
      type: [String, Number],
      default: "64",
    },
  },
  computed: {
    headerStyle() {
      return { height: this.height + "px", lineHeight: this.height + "px" };
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #bcc2d7;
}
</style>

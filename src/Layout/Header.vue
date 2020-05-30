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
      type: String,
      default: "64px",
    },
  },
  computed: {
    headerStyle() {
      return { height: this.height };
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

header {
  width: 100%;
  padding: 0 20px;
}
</style>

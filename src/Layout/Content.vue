<template>
  <main class="woo-content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "woo-content",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";
.woo-content {
  flex: 1;
  background-color: $color-white;
  color: $color-black;
  padding: 20px;
}
</style>

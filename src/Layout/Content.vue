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
  padding: 20px;
}
</style>

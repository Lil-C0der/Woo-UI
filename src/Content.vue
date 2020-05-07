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
.woo-content {
  flex: 1;
  background-color: #fefefe;
  color: #333;
  padding: 20px;
}
</style>

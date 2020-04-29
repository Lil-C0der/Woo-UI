<template>
  <svg class="woo-icon" :class="name" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>

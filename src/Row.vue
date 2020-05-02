<template>
  <div
    class="woo-row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-row",
  data() {
    return {};
  },
  props: {
    gutter: {
      type: [String, Number],
    },
  },
  components: {},
  methods: {},

  mounted() {
    if (this.gutter) {
      this.$children.forEach((n) => {
        n.$el.style.paddingLeft = `${this.gutter / 2}px`;
        n.$el.style.paddingRight = `${this.gutter / 2}px`;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.woo-row {
  display: flex;
}
</style>

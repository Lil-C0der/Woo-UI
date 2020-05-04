<template>
  <section class="woo-layout" :class="{ 'horizontal-layout': isHorizontal }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "woo-layout",
  data() {
    return {
      isHorizontal: false,
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "woo-sider") {
        vm.$parent.isHorizontal = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.woo-layout {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  flex: 1;
  &.horizontal-layout {
    flex-direction: row;
  }
}
</style>

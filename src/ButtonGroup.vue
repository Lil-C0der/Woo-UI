<template>
  <div class="woo-button-grounp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-button-group",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // 如果ButtonGroup组件的子元素包含除了Button以外的元素，则在控制台打印一个警告
    for (const node of this.$el.children) {
      const elName = node.nodeName;
      if (elName.toLowerCase() !== "button") {
        console &&
          console?.warn(
            `woo-button-group's child must be "woo-button", but there's a ${elName}. It may cause CSS promblem`
          );
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.woo-button-grounp {
  vertical-align: middle;
  display: inline-flex;
  .woo-button {
    &:not(:first-of-type) {
      border-radius: 0;
      margin-left: -1px;
    }
    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-of-type {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

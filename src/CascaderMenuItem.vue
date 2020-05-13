<template>
  <!-- <ul> -->
  <li class="woo-cascader-menu-item">
    <slot>{{ sourceItem.label }}</slot>
    <ul>
      <woo-cascader-menu-item
        v-for="child in sourceItem.children"
        :key="child.value"
        :source-item="child"
      ></woo-cascader-menu-item>
    </ul>
  </li>

  <!-- </ul> -->
</template>

<script>
export default {
  name: "woo-cascader-menu-item",
  props: {
    sourceItem: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.woo-cascader-menu-item {
  border: 1px solid red;
  margin: 20px;
  ul {
    list-style: none;
  }
}
</style>

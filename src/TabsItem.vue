<template>
  <div
    class="woo-tabs-item"
    :class="name === currentName ? 'seleted-item' : ''"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-item",
  inject: ["eventBus", "currentName"],
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      // this.eventBus.$emit("update:seleted", this.name);
      this.eventBus.$emit("itemClick", this.name);
      console.log("name" + this.name);
    },
  },
  created() {
    this.eventBus.$on("itemClick", (name) => {
      console.log(name);
    });
  },
};
</script>

<style lang="scss" scoped>
.woo-tabs-item {
  float: left;
  padding: 0 10px;
  margin: 4px;
  background-color: navy;
  .selected-item {
    color: green;
  }
}
</style>

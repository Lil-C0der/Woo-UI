<template>
  <div class="woo-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "woo-collapse",
  model: {
    prop: "activeName",
    event: "change",
  },
  props: {
    activeName: {
      type: [String, Array],
      default: () => [],
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
      activeNameCopy: this.activeName,
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    initActiveKey() {
      if (typeof this.activeNameCopy === "string" && !this.single) {
        this.activeNameCopy = [this.activeName];
      }
    },
    toggleKey(key) {
      this.activeNameCopy = this.activeNameCopy === key ? null : key;
      this.$emit("change", this.activeNameCopy);
      this.eventBus.$emit("keyChange", this.activeNameCopy);
    },
    addKey(key) {
      this.activeNameCopy?.push(key);
      this.$emit("change", this.activeNameCopy);
      this.eventBus.$emit("keyChange", this.activeNameCopy);
    },
    deleteKey(key) {
      const index = this.activeNameCopy?.indexOf(key);
      this.activeNameCopy.splice(index, 1);
      this.$emit("change", this.activeNameCopy);
      this.eventBus.$emit("keyChange", this.activeNameCopy);
    },
  },
  mounted() {
    this.initActiveKey();
    this.eventBus.$emit("keyChange", this.activeNameCopy);
    if (this.single) {
      this.eventBus.$on("showItem", (name) => {
        this.toggleKey(name);
      });
      this.eventBus.$on("hideItem", (name) => {
        this.toggleKey(name);
      });
    } else {
      this.eventBus.$on("showItem", (name) => {
        this.addKey(name);
      });
      this.eventBus.$on("hideItem", (name) => {
        this.deleteKey(name);
      });
    }
  },
  beforeDestroy() {
    this.eventBus.$off(["showItem", "hideItem"]);
  },
};
</script>

<style lang="scss" scoped>
@import "_var";
.woo-collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
  color: $color-black;
  overflow: hidden;
  & :last-child {
    & :first-child {
      border-bottom: none;
    }
    & :last-child {
      border-top: 1px solid $border-color;
    }
  }
}
</style>

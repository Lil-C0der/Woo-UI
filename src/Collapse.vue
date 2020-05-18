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
      if (!this.activeNameCopy) {
        this.activeNameCopy = [];
      }
      if (typeof this.activeNameCopy === "string") {
        this.activeNameCopy = [this.activeName];
      }
    },
    toggleKey(key) {
      this.activeNameCopy = this.activeNameCopy === key ? null : key;
    },
    addKey(key) {
      this.activeNameCopy?.push(key);
    },
    deleteKey(key) {
      const index = this.activeNameCopy?.indexOf(key);
      this.activeNameCopy.splice(index, 1);
    },
  },
  watch: {
    activeName: {
      handler: function(newVal, oldVal) {
        const str1 = [...newVal].sort().toString();
        const str2 = [...oldVal].sort().toString();
        if (str1 !== str2) {
          this.activeNameCopy = newVal;
        }
      },
    },
    activeNameCopy: {
      handler: function(newVal, oldVal) {
        if (this.single === false && typeof oldVal === "string") {
          return false;
        }
        this.$emit("change", newVal);
        this.eventBus.$emit("keyChange", newVal);
      },
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

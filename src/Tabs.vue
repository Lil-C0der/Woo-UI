<template>
  <div class="woo-tabs">
    <slot></slot>
    <!-- {{ currentName }} -->
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "woo-tabs",
  data() {
    return {
      currentName: null,
      eventBus: new Vue(),
    };
  },
  model: {
    prop: "activeName",
    event: "change",
  },
  props: {
    activeName: {
      type: String,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  provide() {
    return {
      eventBus: this.eventBus,
      currentName: this.currentName,
    };
  },
  watch: {
    activeName: function(val) {
      console.log(val);
      this.currentName = val;
    },
  },
  computed: {},
  created() {
    this.eventBus.$on("itemClick", (name) => {
      this.currentName = name;
      this.$emit("tab-click", name);
      console.log("tabs got " + this.currentName);
    });
  },
  watch: {
    currentName: function(newVal) {
      this.$emit("change", newVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-tabs {
  // color: #000;
}
</style>

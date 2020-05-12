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
    prop: "activeKey",
    event: "change",
  },
  props: {
    activeKey: {
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
      activeKeyCopy: this.activeKey,
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    toggleKey(key) {
      this.activeKeyCopy = this.activeKeyCopy === key ? null : key;
    },
    addKey(key) {
      if (!this.activeKeyCopy) {
        this.activeKeyCopy = [];
      }
      this.activeKeyCopy?.push(key);
    },
    deleteKey(key) {
      const index = this.activeKeyCopy?.indexOf(key);
      this.activeKeyCopy.splice(index, 1);
    },
  },
  watch: {
    activeKey: {
      handler: function(newVal, oldVal) {
        const str1 = [...newVal].sort().toString();
        const str2 = [...oldVal].sort().toString();
        if (str1 !== str2) {
          this.activeKeyCopy = newVal;
        }
      },
    },
    activeKeyCopy: {
      handler: function(newVal) {
        this.$emit("change", newVal);
        this.eventBus.$emit("keyChange", newVal);
      },
    },
  },
  mounted() {
    this.eventBus.$emit("keyChange", this.activeKeyCopy);
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

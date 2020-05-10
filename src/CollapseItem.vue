<template>
  <div class="woo-collapse-item">
    <div class="woo-collapse-item-name" @click="handleItemClick">
      <woo-icon
        name="right"
        class="title-icon"
        :class="{ downIcon: isOpen }"
      ></woo-icon>
      {{ title }}
    </div>
    <div class="woo-collapse-item-content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "woo-collapse-item",
  inject: ["eventBus", "single"],
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleItemClick() {
      if (this.isOpen) {
        this.isOpen = false;
        this.eventBus.$emit("hideItem", this.name);
      } else {
        this.isOpen = true;
        this.eventBus.$emit("showItem", this.name);
      }
    },
  },
  mounted() {
    this.eventBus.$on("keyChange", (key) => {
      this.isOpen = key?.includes(this.name);
    });
    if (this.single) {
      this.eventBus.$on("showItem", (name) => {
        this.isOpen = name === this.name;
      });
    }
  },
  beforeDestroy() {
    this.eventBus.$off(["showItem", "keyChange"]);
  },
};
</script>

<style lang="scss" scoped>
$border-color: #dedde2;
$font-color: #333;
.woo-collapse-item {
  margin-top: -1px;
  color: $font-color;
  .woo-collapse-item-name {
    padding: 1em 2.5em;
    display: flex;
    align-items: center;
    min-height: 32px;
    border-bottom: 1px solid $border-color;
    border-top: 1px solid $border-color;
    background-color: #f5f5f5;
    position: relative;
    .title-icon {
      position: absolute;
      left: 1em;
      transition: all 0.3s;
      &.downIcon {
        transform: rotate(90deg);
      }
    }
  }
  .woo-collapse-item-content {
    padding: 1em;
    background-color: #fefefe;
  }
}
</style>

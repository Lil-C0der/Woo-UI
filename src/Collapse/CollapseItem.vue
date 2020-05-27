<template>
  <div class="woo-collapse-item" :class="collapseItemClass">
    <div class="woo-collapse-item-header" @click="handleItemClick">
      <woo-icon
        name="right"
        class="title-icon"
        :class="{ downIcon: isOpen }"
      ></woo-icon>
      {{ title }}
    </div>
    <transition name="fade">
      <div class="woo-collapse-item-content" v-show="isOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import WooIcon from "../Icon";

export default {
  name: "woo-collapse-item",
  inject: ["eventBus"],
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
  components: {
    WooIcon,
  },
  methods: {
    handleItemClick() {
      if (this.isOpen) {
        this.eventBus.$emit("hideItem", this.name);
      } else {
        this.eventBus.$emit("showItem", this.name);
      }
    },
  },
  computed: {
    collapseItemClass() {
      return { "active-item": this.isOpen };
    },
  },
  mounted() {
    this.eventBus.$on("keyChange", (key) => {
      this.isOpen = key?.includes(this.name);
    });
  },
  beforeDestroy() {
    this.eventBus.$off(["showItem", "keyChange"]);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.woo-collapse-item {
  margin-top: -1px;
  color: $color-black;
  .woo-collapse-item-header {
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
      border: none;
      &.downIcon {
        transform: rotate(90deg);
      }
    }
  }
  .woo-collapse-item-content {
    padding: 1em;
    background-color: $color-white;
  }
}
</style>

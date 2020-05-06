<template>
  <div class="woo-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-row",
  data() {
    return {};
  },
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator: function(val) {
        return ["left", "right", "center"].indexOf(val) !== -1;
      },
    },
  },
  components: {},
  methods: {},
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px",
      };
    },
    rowClass() {
      return this.align && `align-${this.align}`;
    },
  },
  mounted() {
    if (this.gutter) {
      this.$children.forEach((n) => {
        n.$el.style.paddingLeft = `${this.gutter / 2}px`;
        n.$el.style.paddingRight = `${this.gutter / 2}px`;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.woo-row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>

<template>
  <div class="woo-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "woo-col",
  data() {
    return {};
  },
  computed: {},
  props: {
    span: {
      type: [Number, String],
      default: 24,
    },
    offset: {
      type: [Number, String],
      default: null,
    },
  },
  components: {},
  methods: {},
  computed: {
    colClass() {
      return [
        this.span && `woo-col-${this.span}`,
        this.offset && `woo-col-offset-${this.offset}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.woo-col {
  height: 100px;
  border: 1px solid red;
  $class-prefix: "woo-col-";
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: "woo-col-offset-";
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>

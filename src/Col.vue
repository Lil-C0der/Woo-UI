<template>
  <div
    class="woo-col"
    :class="[span && `woo-col-${span}`, offset && `woo-col-offset-${offset}`]"
  >
    <!-- <slot></slot> -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: "woo-col",
  data() {
    return {};
  },
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
      default: null,
    },
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.woo-col {
  //   width: 50%;
  height: 100px;
  //   border: 1px solid pink;
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
  // TODO 测试用
  div {
    border: 1px solid #999;
    width: 100%;
    height: 100%;
  }
}
</style>

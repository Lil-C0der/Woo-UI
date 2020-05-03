<template>
  <div class="woo-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
const validator = (val) => {
  const keys = Object.keys(val);
  return keys.every((n) => n === "span" || n === "offset");
};
export default {
  name: "woo-col",
  data() {
    return {};
  },
  props: {
    span: {
      type: [Number, String],
      default: 24,
    },
    offset: {
      type: [Number, String],
      default: null,
    },
    xs: {
      type: Object,
      default: () => {},
      validator,
    },
    sm: {
      type: Object,
      default: () => {},
      validator,
    },
    md: {
      type: Object,
      default: () => {},
      validator,
    },
    lg: {
      type: Object,
      default: () => {},
      validator,
    },
    xl: {
      type: Object,
      default: () => {},
      validator,
    },
    xxl: {
      type: Object,
      default: () => {},
      validator,
    },
  },
  components: {},
  methods: {},
  computed: {
    colClass() {
      // const { span, offset, xs, sm, md, lg, xl } = this;
      return [
        this.span && `woo-col-${this.span}`,
        this.offset && `woo-col-offset-${this.offset}`,
        // 响应式
        this?.xs?.span && `woo-col-xs-${this?.xs?.span}`,
        this?.xs?.offset && `woo-col-xs-offset-${this?.xs?.offset}`,
        this?.sm?.span && `woo-col-sm-${this?.sm?.span}`,
        this?.sm?.offset && `woo-col-sm-offset-${this?.sm?.offset}`,
        this?.md?.span && `woo-col-md-${this?.md?.span}`,
        this?.md?.offset && `woo-col-md-offset-${this?.md?.offset}`,
        this?.lg?.span && `woo-col-lg-${this?.lg?.span}`,
        this?.lg?.offset && `woo-col-lg-offset-${this?.lg?.offset}`,
        this?.xl?.span && `woo-col-xl-${this?.xl?.span}`,
        this?.xl?.offset && `woo-col-xl-offset-${this?.xl?.offset}`,
        this?.xxl?.span && `woo-col-xxl-${this?.xxl?.span}`,
        this?.xxl?.offset && `woo-col-xxl-offset-${this?.xxl?.offset}`,
      ];
    },
  },
  mounted() {},
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
  // 响应式
  // 超小屏幕 例如手机竖屏
  @media (max-width: 575px) {
    $class-prefix: "woo-col-xs-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-xs-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // 小屏幕 如手机横屏
  @media (min-width: 576px) {
    $class-prefix: "woo-col-sm-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-sm-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // 中等屏幕 平板电脑
  @media (min-width: 768px) {
    $class-prefix: "woo-col-md-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-md-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // 大屏 桌面显示器
  @media (min-width: 992px) {
    $class-prefix: "woo-col-lg-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-lg-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // 超大屏 大屏显示器
  @media (min-width: 1200px) {
    $class-prefix: "woo-col-xl-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-xl-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // 宽屏
  @media (min-width: 1600) {
    $class-prefix: "woo-col-xxl-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: "woo-col-xxl-offset-";
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>

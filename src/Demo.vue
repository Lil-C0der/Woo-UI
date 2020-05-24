<template>
  <woo-layout>
    <woo-header style="height:500px"></woo-header>
    <woo-layout>
      <woo-content style="height:800px;">
        <woo-button @click="xxx">toggle</woo-button>
        <woo-slide @change="yyy" height="220px" ref="slide">
          <woo-slide-item name="a" class="box">
            <h3>1</h3>
          </woo-slide-item>
          <woo-slide-item name="b" class="box">
            <h3>2</h3>
          </woo-slide-item>
          <woo-slide-item name="c" class="box">
            <h3>3</h3>
          </woo-slide-item>
          <woo-slide-item name="d" class="box">
            <h3>4</h3>
          </woo-slide-item>
          <woo-slide-item name="e" class="box">
            <h3>5</h3>
          </woo-slide-item>
          <woo-slide-item name="f" class="box">
            <h3>6</h3>
          </woo-slide-item>
        </woo-slide>
      </woo-content>
    </woo-layout>
    <woo-footer style="height:500px"></woo-footer>
  </woo-layout>
</template>

<script>
import WooCascader from "./Cascader/Cascader";
import WooButton from "./Button/Button.vue";
import WooIcon from "./Icon.vue";
import WooToast from "./Toast.vue";
import WooPlugin from "./plugin";
import WooCollapse from "./Collapse/Collapse";
import WooCollapseItem from "./Collapse/CollapseItem";
import WooPopover from "./Popover";

import WooSlide from "./Slide/Slide";
import WooSlideItem from "./Slide/SlideItem";

// import WooSlide from "./Slide_v1";
// import WooSlideItem from "./SlideItem_v1";

import WooLayout from "./Layout/Layout";
import WooHeader from "./Layout/Header";
import WooContent from "./Layout/Content";
import WooFooter from "./Layout/Footer";
import WooSider from "./Layout/Sider";


export default {
  methods: {},
  data() {
    return {};
  },
  methods: {
    xxx() {
      this.$refs.slide.setActiveItem("d");
    },
    yyy(newVal, oldVal) {
      // console.log(newVal, oldVal);
    },
  },
  mounted() {},
  components: {
    WooButton,
    WooCascader,
    WooCollapse,
    WooCollapseItem,
    WooIcon,
    WooSlide,
    WooSlideItem,
    WooButton,

    WooLayout,
    WooSider,
    WooContent,
    WooFooter,
    WooHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/var";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before {
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}
#app {
  padding: 20px;
}
html {
  font-size: $font-size;
}

.woo-slide {
  .box {
    height: 220px;
    // border: 1px solid green;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    &.0 {
      transform: translateX(0);
    }
    &.w {
      transform: translateX(280px);
    }
    &.2w {
      transform: translateX(560px);
    }
    &.3w {
      transform: translateX(300%);
    }
  }
}
</style>

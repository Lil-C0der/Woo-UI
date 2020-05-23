<template>
  <woo-layout>
    <woo-header></woo-header>
    <woo-layout>
      <woo-content style="height:300px;">
        <woo-button @click="xxx">toggle</woo-button>
        <woo-slide @change="yyy" height="220px" ref="slide" :initial-index="2">
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
    <woo-footer></woo-footer>
  </woo-layout>
</template>

<script>
import WooCascader from "./Cascader";
import WooButton from "./Button.vue";
import WooIcon from "./Icon.vue";
import WooToast from "./Toast.vue";
import WooPlugin from "./plugin";
import WooCollapse from "./Collapse";
import WooCollapseItem from "./CollapseItem";
import WooPopover from "./Popover";

import WooSlide from "./Slide";
import WooSlideItem from "./SlideItem";

// import WooSlide from "./Slide_v1";
// import WooSlideItem from "./SlideItem_v1";

import WooLayout from "./Layout";
import WooHeader from "./Header";
import WooContent from "./Content";
import WooFooter from "./Footer";
import WooSider from "./Sider";

function getChildren(pid = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((n) => n.p_id === pid);
      result = result.length === 0 ? "" : result;
      if (result) {
        result.map((n) => {
          if (db.filter((i) => i.p_id === n.id).length) {
            n.isLeaf = false;
          } else {
            n.isLeaf = true;
          }
        });
      }
      success(result);
    }, 1000);
  });
}

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
@import "_var";
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

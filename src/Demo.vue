<template>
  <woo-layout>
    <woo-header></woo-header>
    <woo-layout>
      <woo-content style="height:300px;padding-left:600px">
        <woo-slide height="140px">
          <woo-slide-item class="box">
            <h3>1</h3>
          </woo-slide-item>
          <woo-slide-item class="box">
            <h3>2</h3>
          </woo-slide-item>
          <woo-slide-item class="box">
            <h3>3</h3>
          </woo-slide-item>
          <woo-slide-item class="box">
            <h3>4</h3>
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
// import WooSlide from "./Slide2";
// import WooSlideItem from "./SlideItem2";

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
    width: 280px;
    height: 140px;
    border: 1px solid green;
    background-color: grey;
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

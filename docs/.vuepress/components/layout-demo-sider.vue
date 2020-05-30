<template>
  <div class="demo">
    <div class="layout-demo">
      <woo-layout>
        <woo-sider collapsible>SIDER</woo-sider>
        <woo-layout>
          <woo-header>HEADER</woo-header>
          <woo-content>CONTENT</woo-content>
          <woo-footer>FOOTER</woo-footer>
        </woo-layout>
      </woo-layout>
    </div>

    <div class="layout-demo">
      <woo-layout>
        <woo-header>HEADER</woo-header>
        <woo-layout>
          <woo-content>CONTENT</woo-content>
          <woo-sider
            collapsible
            reverseArrow
            collapsed-width="100px"
            :collapsed="true"
            @collapse="handleSiderCollapse"
            >SIDER</woo-sider
          >
        </woo-layout>
        <woo-footer>FOOTER</woo-footer>
      </woo-layout>
    </div>
  </div>
</template>

<script>
import WooLayout from "../../../src/Layout/Layout.vue";
import WooContent from "../../../src/Layout/Content";
import WooHeader from "../../../src/Layout/Header";
import WooSider from "../../../src/Layout/Sider";
import WooFooter from "../../../src/Layout/Footer";

export default {
  components: {
    WooLayout,
    WooContent,
    WooHeader,
    WooFooter,
    WooSider,
  },
  methods: {
    handleSiderCollapse(collapsed) {
      console.log("collapsed turn to " + collapsed);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.layout-demo {
  margin-bottom: 20px;
  text-align: center;
  color: #333333;
}
.woo-header {
  background-color: #bcc2d7;
  line-height: 64px;
}
.woo-content {
  background-color: #eff1fe;
  line-height: 120px;
}
.woo-sider {
  background-color: #8895b1;
  line-height: 160px;
}
.woo-footer {
  background-color: #546c8c;
  line-height: 64px;
}
</style>

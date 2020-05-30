<template>
  <div class="demo">
    <woo-tabs v-model="activeName" @tab-click="handleClick">
      <woo-tabs-head>
        <woo-tabs-item name="1st">Tab 1</woo-tabs-item>
        <woo-tabs-item name="2nd">Tab 2</woo-tabs-item>
        <woo-tabs-item name="3rd">Tab 3</woo-tabs-item>
        <woo-tabs-item name="4th">Tab 4</woo-tabs-item>
      </woo-tabs-head>
      <woo-tabs-body>
        <woo-tabs-pane name="1st">Content 1</woo-tabs-pane>
        <woo-tabs-pane name="2nd">Content 2</woo-tabs-pane>
        <woo-tabs-pane name="3rd">Content 3</woo-tabs-pane>
        <woo-tabs-pane name="4th">Content 4</woo-tabs-pane>
      </woo-tabs-body>
    </woo-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import WooTabs from "../../../src/Tabs/Tabs.vue";
import WooTabsHead from "../../../src/Tabs/TabsHead.vue";
import WooTabsBody from "../../../src/Tabs/TabsBody.vue";
import WooTabsItem from "../../../src/Tabs/TabsItem.vue";
import WooTabsPane from "../../../src/Tabs/TabsPane.vue";

export default {
  components: {
    WooTabs,
    WooTabsHead,
    WooTabsBody,
    WooTabsItem,
    WooTabsPane,
  },
  data() {
    return {
      activeName: "2nd",
    };
  },
  methods: {
    handleClick(name) {
      console.log(name);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demo {
  padding-top: 10px;
}
</style>

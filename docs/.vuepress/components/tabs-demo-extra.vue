<template>
  <div class="demo">
    <woo-tabs @change="handleItemChange">
      <woo-tabs-head>
        <woo-tabs-item name="1st">1</woo-tabs-item>
        <woo-tabs-item name="2nd">2</woo-tabs-item>
        <template #extra-actions>
          <woo-button>Button</woo-button>
        </template>
      </woo-tabs-head>
      <woo-tabs-body>
        <woo-tabs-pane name="1st">A</woo-tabs-pane>
        <woo-tabs-pane name="2nd">B</woo-tabs-pane>
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
import WooButton from "../../../src/Button/Button.vue";

export default {
  components: {
    WooTabs,
    WooTabsHead,
    WooTabsBody,
    WooTabsItem,
    WooTabsPane,
    WooButton,
  },
  data() {
    return {
      activeName: "2nd",
    };
  },
  methods: {
    handleItemChange(name) {
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

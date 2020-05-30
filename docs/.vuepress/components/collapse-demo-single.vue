<template>
  <div class="demo">
    <woo-collapse v-model="activeName" single @change="handleChange">
      <woo-collapse-item title="title 1" name="1">Pane 1</woo-collapse-item>
      <woo-collapse-item title="title 2" name="2">Pane 2</woo-collapse-item>
      <woo-collapse-item title="title 3" name="3">Pane 3</woo-collapse-item>
      <woo-collapse-item title="title 4" name="4">Pane 4</woo-collapse-item>
    </woo-collapse>
  </div>
</template>

<script>
import WooCollapse from "../../../src/Collapse/Collapse.vue";
import WooCollapseItem from "../../../src/Collapse/CollapseItem.vue";

export default {
  components: {
    WooCollapse,
    WooCollapseItem,
  },
  data() {
    return {
      activeName: "2",
    };
  },
  methods: {
    handleChange(name) {
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

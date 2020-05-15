<template>
  <div style="padding:100px">
    <p>{{ selected.map((n) => n.name) }}</p>
    <woo-cascader
      v-model="selected"
      @change="xxx"
      :source="source"
      :load-data="getData"
    ></woo-cascader>
    <p>111111111111</p>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Cascader from "./Cascader";

import db from "./db";

function getChildren(pid = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((n) => n.p_id === pid);
      result = result.length === 0 ? "" : result;
      success(result);
    }, 300);
  });
}

export default {
  methods: {
    xxx() {},
    getData(node, callback) {
      const { name, id, p_id } = node;
      getChildren(id).then((res) => {
        callback(res);
      });
    },
  },
  data() {
    return {
      selected: [],
      source: [],
    };
  },
  mounted() {
    getChildren().then((res) => {
      this.source = res;
    });
  },
  components: {
    "woo-cascader": Cascader,
    "woo-button": Button,
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
</style>

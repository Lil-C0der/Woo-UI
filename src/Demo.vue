<template>
  <div style="padding:100px">
    <p>{{ selected.map((n) => n.label) }}</p>
    <woo-cascader
      v-model="selected"
      @change="xxx"
      :source="source"
    ></woo-cascader>
    <p>111111111111</p>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Cascader from "./Cascader";

import db from "./db";

function foo(pid = 0) {
  return db.filter((n) => n.p_id === pid);
}

console.log(foo());

export default {
  methods: {
    xxx() {
      console.log("xxx");
    },
  },
  data() {
    return {
      selected: [],
      // selected: ["zhinan", "shejiyuanze", "yizhi"],
      source: foo(),
    };
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

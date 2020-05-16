<template>
  <div style="padding:100px">
    <woo-icon name="loading"></woo-icon>
    <p>{{ selected }}</p>
    <woo-cascader
      v-model="selected"
      @change="xxx"
      @click="yyy"
      :source.sync="source"
      :load-data="getData"
    ></woo-cascader>

    <div style="margin:100px">
      <woo-popover>
        <template v-slot:content>
          <span>pop</span>
        </template>
        <woo-button @click="yyy">button</woo-button>
      </woo-popover>
    </div>
  </div>
</template>

<script>
import Cascader from "./Cascader";
import Button from "./Button.vue";
import Icon from "./Icon.vue";

import Popover from "./Popover";

import db from "./db";

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
  methods: {
    xxx(v) {},
    yyy() {
      this.selected = [];
    },
    getData(node, callback) {
      const { name, id, p_id } = node;
      getChildren(id).then((res) => {
        callback(res);
      });
    },
  },
  data() {
    return {
      source: [],
      selected: [],
    };
  },
  mounted() {
    getChildren().then((res) => {
      this.source = res;
      console.log(res);
    });
  },
  components: {
    "woo-cascader": Cascader,
    "woo-button": Button,
    "woo-popover": Popover,
    "woo-icon": Icon,
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

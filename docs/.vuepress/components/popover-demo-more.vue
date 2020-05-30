<template>
  <div class="demo">
    <woo-popover v-model="visible" trigger="click" @visible-change="onChange">
      <template #content>
        <div>确认删除吗？</div>
        <woo-button type="danger" @click="visible = false">删除</woo-button>
      </template>
      <woo-button>点击删除</woo-button>
    </woo-popover>
  </div>
</template>

<script>
import Vue from "vue";
import WooButton from "../../../src/Button/Button";
import WooPopover from "../../../src/Popover";

export default {
  components: {
    WooButton,
    WooPopover,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onChange(visible) {
      console.log("visible turn to " + visible);
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.demo {
  padding-top: 10px;
}
.woo-button {
  float: right;
}
</style>

<template>
  <div class="demo">
    <woo-row gutter="10">
      <woo-col
        :xs="{ span: 8 }"
        :sm="{ span: 6 }"
        :md="{ span: 4 }"
        :lg="{ span: 3 }"
        :xl="{ span: 2 }"
        ><div class="grid-content bg-light"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 4 }"
        :sm="{ span: 6 }"
        :md="{ span: 8 }"
        :lg="{ span: 9 }"
        :xl="{ span: 10 }"
        ><div class="grid-content bg-dark"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 4 }"
        :sm="{ span: 6 }"
        :md="{ span: 8 }"
        :lg="{ span: 9 }"
        :xl="{ span: 10 }"
        ><div class="grid-content bg-dark"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 8 }"
        :sm="{ span: 6 }"
        :md="{ span: 4 }"
        :lg="{ span: 3 }"
        :xl="{ span: 2 }"
        ><div class="grid-content bg-light"></div
      ></woo-col>
    </woo-row>
  </div>
</template>

<script>
import WooRow from "../../../src/Grid/Row.vue";
import WooCol from "../../../src/Grid/Col.vue";

export default {
  components: {
    WooRow,
    WooCol,
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
.woo-row {
  margin-bottom: 20px;
}
.grid-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}
.bg-light {
  background-color: #8895b1;
}
.bg-dark {
  background-color: #546c8c;
}
</style>

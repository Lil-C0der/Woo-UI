<template>
  <div class="demo">
    <woo-row gutter="20">
      <woo-col :span="16"><div class="grid-content bg-light">16</div></woo-col>
      <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
    </woo-row>
    <woo-row gutter="20">
      <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
      <woo-col :span="8"><div class="grid-content bg-light">8</div></woo-col>
      <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
      <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
    </woo-row>
    <woo-row gutter="20">
      <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
      <woo-col :span="16"><div class="grid-content bg-light">16</div></woo-col>
      <woo-col :span="4"><div class="grid-content bg-light">4</div></woo-col>
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
</style>

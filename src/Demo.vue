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

    <woo-row gutter="20">
      <woo-col :span="6"><div class="grid-content bg-light">6</div></woo-col>
      <woo-col :span="6" :offset="6"
        ><div class="grid-content bg-light">6</div></woo-col
      >
    </woo-row>
    <woo-row gutter="20">
      <woo-col :span="6" :offset="6"
        ><div class="grid-content bg-light">6</div></woo-col
      >
      <woo-col :span="6" :offset="6"
        ><div class="grid-content bg-light">6</div></woo-col
      >
    </woo-row>
    <woo-row gutter="20">
      <woo-col :span="12" :offset="6"
        ><div class="grid-content bg-light">12</div></woo-col
      >
    </woo-row>

    <woo-row gutter="10">
      <woo-col
        :xs="{ span: 8 }"
        :sm="{ span: 6 }"
        :md="{ span: 4 }"
        :lg="{ span: 3 }"
        :xl="{ span: 1 }"
        ><div class="grid-content bg-light"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 4 }"
        :sm="{ span: 6 }"
        :md="{ span: 8 }"
        :lg="{ span: 9 }"
        :xl="{ span: 11 }"
        ><div class="grid-content bg-dark"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 4 }"
        :sm="{ span: 6 }"
        :md="{ span: 8 }"
        :lg="{ span: 9 }"
        :xl="{ span: 11 }"
        ><div class="grid-content bg-dark"></div
      ></woo-col>
      <woo-col
        :xs="{ span: 8 }"
        :sm="{ span: 6 }"
        :md="{ span: 4 }"
        :lg="{ span: 3 }"
        :xl="{ span: 1 }"
        ><div class="grid-content bg-light"></div
      ></woo-col>
    </woo-row>
  </div>
</template>

<script>
import WooRow from "./Grid/Row.vue";
import WooCol from "./Grid/Col.vue";

export default {
  components: {
    WooRow,
    WooCol,
  },
};
</script>

<style scoped>
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

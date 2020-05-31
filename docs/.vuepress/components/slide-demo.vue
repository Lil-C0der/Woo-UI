<template>
  <div class="demo">
    <div class="block">
      <woo-slide height="150px">
        <woo-slide-item v-for="item in 4" :key="item">
          <div class="box">{{ item }}</div>
        </woo-slide-item>
      </woo-slide>
    </div>

    <div class="block">
      <woo-slide height="150px" :auto-play="false">
        <woo-slide-item v-for="item in 4" :key="item">
          <div class="box">{{ item }}</div>
        </woo-slide-item>
      </woo-slide>
    </div>
  </div>
</template>

<script>
import WooSlide from "../../../src/Slide/Slide";
import WooSlideItem from "../../../src/Slide/SlideItem";

export default {
  components: {
    WooSlide,
    WooSlideItem,
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
.box {
  color: #fefefe;
  font-weight: 700;
  text-align: center;
  line-height: 150px;
}
.block {
  width: 49%;
  display: inline-block;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>

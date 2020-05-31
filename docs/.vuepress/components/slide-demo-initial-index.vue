<template>
  <div class="demo">
    <woo-slide height="220px" :initial-index="2" :auto-play="false">
      <woo-slide-item v-for="item in 4" :key="item" :name="item.toString()">
        <div class="box">{{ item }}</div>
      </woo-slide-item>
    </woo-slide>
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
  line-height: 220px;
}
.woo-slide-item:nth-child(2n) {
  background-color: #8895b1;
}
.woo-slide-item:nth-child(2n + 1) {
  background-color: #546c8c;
}
</style>

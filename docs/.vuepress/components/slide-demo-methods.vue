<template>
  <div class="demo">
    <div class="button-bar" style="margin-bottom:10px">
      <woo-button-group>
        <woo-button icon-name="left" @click="$refs.slide.prev()"
          >上一张</woo-button
        >
        <woo-button @click="$refs.slide.setActiveItem(3)">最后一张</woo-button>
        <woo-button
          icon-name="right"
          icon-position="right"
          @click="$refs.slide.next()"
          >下一张</woo-button
        >
      </woo-button-group>
    </div>

    <woo-slide
      ref="slide"
      height="220px"
      :auto-play="false"
      @change="handleChange"
    >
      <woo-slide-item v-for="item in 4" :key="item" :name="item.toString()">
        <div class="box">{{ item }}</div>
      </woo-slide-item>
    </woo-slide>
  </div>
</template>

<script>
import WooSlide from "../../../src/Slide/Slide";
import WooSlideItem from "../../../src/Slide/SlideItem";
import WooButton from "../../../src/Button/Button";
import WooButtonGroup from "../../../src/Button/ButtonGroup";

export default {
  components: {
    WooSlide,
    WooSlideItem,
    WooButton,
    WooButtonGroup,
  },
  methods: {
    handleChange(current, prev) {
      console.log(`现在幻灯片的索引是 ${current}, 上一张是 ${prev}`);
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

<template>
  <div style="padding:20px">
    <div style="margin:20px 0">
      <!-- <woo-input></woo-input> -->
    </div>
    <woo-cascader :source="source"></woo-cascader>
  </div>
</template>

<script>
// import Input from "./Input.vue";
import Cascader from "./Cascader";

export default {
  data() {
    return {
      source: [
        {
          value: "zhejiang",
          label: "浙江",
          children: [
            {
              value: "hangzhou",
              label: "杭州",
              children: [
                {
                  value: "xihu",
                  label: "西湖",
                },
              ],
            },
          ],
        },
        {
          value: "guangdong",
          label: "广东",
          children: [
            {
              value: "shenzhen",
              label: "深圳",
              children: [
                {
                  value: "baoan",
                  label: "宝安",
                },
                {
                  value: "nanshan",
                  label: "南山",
                },
              ],
            },
            {
              value: "guangzhou",
              label: "广州",
              children: [
                {
                  value: "tianhe",
                  label: "天河",
                },
                {
                  value: "panyu",
                  label: "番禺",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    "woo-cascader": Cascader,
    // "woo-input": Input,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

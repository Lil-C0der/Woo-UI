<template>
  <div class="demo">
    <p>当前选中选项的 id 为 {{ selected }}</p>
    <woo-cascader v-model="selected" :source="source" @change="handleChange">
    </woo-cascader>
  </div>
</template>

<script>
import WooCascader from "../../../src/Cascader/Cascader.vue";

export default {
  components: {
    WooCascader,
  },
  data() {
    return {
      selected: ["shanghai", "huangpu"],
      source: [
        {
          id: "guangdong",
          name: "广东",
          children: [
            {
              id: "shenzhen",
              name: "深圳",
              children: [
                { id: "nanshan", name: "南山" },
                { id: "futian", name: "福田" },
                { id: "luohu", name: "罗湖" },
                { id: "baoan", name: "宝安" },
              ],
            },
            {
              id: "guangzhou",
              name: "广州",
              children: [
                { id: "tianhe", name: "天河" },
                { id: "liwan", name: "荔湾" },
                { id: "yuexiu", name: "越秀" },
                { id: "haizhu", name: "海珠" },
                { id: "huangpu", name: "黄埔" },
              ],
            },
          ],
        },
        {
          id: "shanghai",
          name: "上海",
          children: [
            { id: "baoshan", name: "宝山" },
            { id: "huangpu", name: "黄浦" },
            { id: "xuhui", name: "徐汇" },
          ],
        },
        {
          id: "zhejiang",
          name: "浙江",
          children: [
            {
              id: "hangzhou",
              name: "杭州",
              children: [
                { id: "shangcheng", name: "上城" },
                { id: "xiacheng", name: "下城" },
                { id: "xihu", name: "西湖" },
              ],
            },
            {
              id: "ningbo",
              name: "宁波",
              children: [
                { id: "haishu", name: "海曙" },
                { id: "jiangbei", name: "江北" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(selected) {
      console.log(selected);
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
</style>

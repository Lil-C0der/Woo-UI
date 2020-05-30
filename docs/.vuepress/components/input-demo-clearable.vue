<template>
  <div class="demo">
    <woo-input
      v-model="input"
      placeholder="输入内容后点击清空"
      clearable
      @clear="handleIptClear"
    ></woo-input>
  </div>
</template>

<script>
import WooInput from "../../../src/Input.vue";

export default {
  components: {
    WooInput,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleIptClear() {
      console.log("clear!!");
    },
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

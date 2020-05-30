<template>
  <div class="demo">
    <woo-input v-model="input" placeholder="请输入内容"></woo-input>
    <woo-input v-model="readonlyInput" readonly></woo-input>
    <woo-input v-model="disabledInput" disabled></woo-input>
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
      readonlyInput: "这是一个只读的输入框",
      disabledInput: "这是一个禁用的输入框",
    };
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

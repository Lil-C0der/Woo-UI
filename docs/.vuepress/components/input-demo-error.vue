<template>
  <div class="demo">
    <woo-input v-model="input" error="重新输入"></woo-input>
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
      input: "错误的内容",
    };
  },
};
</script>

<style scoped>
.demo {
  padding-top: 10px;
}
</style>

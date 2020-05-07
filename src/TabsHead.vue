<template>
  <div class="woo-tabs-head">
    <slot></slot>
    <div class="extra-actions-wrapper">
      <slot name="extra-actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "woo-tabs-head",
  inject: ["eventBus"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.woo-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: $tab-height;
  border: 1px solid red;
  border-bottom: 1px solid #dedde2;
  .extra-actions-wrapper {
    margin-left: auto;
    margin-right: 16px;
  }
}
</style>

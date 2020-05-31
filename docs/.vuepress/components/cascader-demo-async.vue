<template>
  <div class="demo">
    <p>当前选中选项的 id 为 {{ selected }}</p>
    <woo-cascader
      v-model="selected"
      :source.sync="source"
      :load-data="loadData"
      @update:source="handleUpdate"
      @change="handleChange"
    ></woo-cascader>
  </div>
</template>

<script>
import WooCascader from "../../../src/Cascader/Cascader.vue";

export default {
  methods: {
    handleUpdate(id) {
      console.log(id);
    },
    handleChange(selected) {
      console.log(selected);
    },
    loadData(node, callback) {
      const { id, name } = node;
      // 获取数据的函数
      const updateChildren = (pid, pname) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const children = [
              { id: `${pid}-1`, name: `${pname}-1`, isLeaf: false },
              { id: `${pid}-2`, name: `${pname}-2`, isLeaf: false },
              { id: `${pid}-3`, name: `${pname}-3`, isLeaf: false },
            ];
            resolve(children);
          }, 1000);
        });
      };

      updateChildren(id, name).then((res) => {
        // 通过调用 callback 将子节点数据返回，通知组件数据加载完成
        callback(res);
      });
    },
  },
  data() {
    return {
      selected: [],
      source: [
        {
          id: "Option 1",
          name: "选项 1",
          isLeaf: false,
        },
        {
          id: "Option 2",
          name: "选项 2",
          isLeaf: false,
        },
      ],
    };
  },

  components: {
    WooCascader,
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

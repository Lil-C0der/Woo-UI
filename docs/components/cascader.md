---
title: "级联选择器 Cascader"
sidebarDepth: 2
---

# 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基本用法

通过设置 `source` 属性来指定级联选择器的选项数组，数组元素为一个对象，包含 `id` 和 `name` 属性。还可以通过 `selected` 属性（或者 `v-model`）来指定默认选中的选项

#### 效果展示

<ClientOnly>
<cascader-demo/>
</ClientOnly>

```vue
<template>
  <p>当前选中选项的 id 为 {{ selected }}</p>
  <woo-cascader v-model="selected" :source="source" @change="handleChange">
  </woo-cascader>
</template>

<script>
export default {
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
```

## 动态加载

通过 `loadData` 来设置加载数据源的方法，`loadData` 方法有两个参数，第一个参数 `node` 为当前点击的节点，第二个 `callback` 为数据加载完成的回调（必须调用）。

采用动态加载方式时，应当为 `source` 属性添加 [.sync]([https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6]) 修饰符，以确保数据源是同步变化的，在数据更新后会触发事件 `update:source`，回调参数为更新后的数据源 `source`。

同时，为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位
`isLeaf`，否则会简单的以节点有无 `children` 属性来判断是否为叶子节点。

#### 效果展示

<ClientOnly>
<cascader-demo-async/>
</ClientOnly>

```vue
<template>
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
};
</script>
```

## 🌏 API

### Cascader Attributes

|        参数        |                                             说明                                             |                                              类型                                              | 可选值 | 默认值 |
| :----------------: | :------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :----: | :----: |
| selected / v-model |                                  绑定值，默认选中选项的 id                                   |                                             Array                                              |   —    |   —    |
|       source       | 可选项数据源，必须设置键 `id` 和 `name`，分别表示选项的值和选项的文本内容，可选的键 `isLeaf` |                                             Object                                             |   —    |   —    |
|      loadData      |                                      加载动态数据的方法                                      | function(node, callback)，`node` 为当前点击的节点，`callback` 为数据加载完成的回调（必须调用） |   —    |   —    |

### Events

|    事件名称    |            说明            |          回调参数          |
| :------------: | :------------------------: | :------------------------: |
| update:source  | 数据源动态加载，更新后触发 |  更新后的数据源 `source`   |
|     change     | 被选中的选项发生变化时触发 | 当前被选中选项的 `id` 数组 |
| visible-change |  弹出层打开 / 隐藏时触发   |    当前弹出层的显示状态    |

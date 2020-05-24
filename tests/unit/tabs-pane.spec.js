import { expect } from "chai";
import { mount } from "@vue/test-utils";

import TabsPane from "@/Tabs/TabsPane.vue";

describe("tabs-item 组件", () => {
  it("存在", () => {
    expect(TabsPane).to.exist;
  });
  it("可以设置 name", () => {
    const wrapper = mount(TabsPane, {
      attachToDocument: true,
      propsData: {
        name: "test-name",
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.dataset["name"]).to.eq("test-name");
    wrapper.destroy();
  });
});

import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";

import TabsItem from "@/TabsItem.vue";

import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

describe("tabs-item 组件", () => {
  it("存在", () => {
    expect(TabsItem).to.exist;
  });

  it("可以设置 name", () => {
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      propsData: {
        name: "test-name",
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.dataset["name"]).to.eq("test-name");
  });

  it("可以设置 disabled", () => {
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      propsData: {
        disabled: true,
      },
    });
    const vm = wrapper.vm;
    const callback = sinon.fake();
    expect(vm.$el.classList.contains("item-disabled")).to.eq(true);
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});

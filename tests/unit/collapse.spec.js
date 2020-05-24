import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";

import Collapse from "@/Collapse/Collapse";
import CollapseItem from "@/Collapse/CollapseItem";

import Vue from "vue";

describe("Collapse组件", () => {
  it("存在", () => {
    expect(Collapse).to.be.exist;
  });

  describe("props", () => {
    it("可以设置 activeName", () => {
      Vue.component("woo-collapse", Collapse);
      Vue.component("woo-collapse-item", CollapseItem);

      const wrapper = mount(Collapse, {
        attachToDocument: true,
        propsData: {
          activeName: ["key 2"],
        },
        slots: {
          default: `
            <woo-collapse-item name="key 1" title="test">test 1</woo-collapse-item>
            <woo-collapse-item name="key 2" title="test">test 2</woo-collapse-item>
            <woo-collapse-item name="key 3" title="test">test 3</woo-collapse-item>`,
        },
      });
      const vm = wrapper.vm;
      const itemWrapper = wrapper.findAll(".woo-collapse-item").wrappers;
      vm.$nextTick().then(() => {
        expect(itemWrapper[1].classes()).to.include("active-item");
      });
      wrapper.destroy();
    });
    it("可以设置 single", () => {
      Vue.component("woo-collapse", Collapse);
      Vue.component("woo-collapse-item", CollapseItem);

      const wrapper = mount(Collapse, {
        attachToDocument: true,
        propsData: {
          activeName: ["key 2"],
          single: true,
        },
        slots: {
          default: `
            <woo-collapse-item name="key 1" title="test">test 1</woo-collapse-item>
            <woo-collapse-item name="key 2" title="test">test 2</woo-collapse-item>
            <woo-collapse-item name="key 3" title="test">test 3</woo-collapse-item>`,
        },
      });
      const vm = wrapper.vm;
      const itemWrapper = wrapper.findAll(".woo-collapse-item").wrappers;
      const headerWrapper = wrapper.findAll(".woo-collapse-item-header")
        .wrappers;
      headerWrapper[0].trigger("click");
      vm.$nextTick().then(() => {
        // 期待只有一个 item 为 active-item 类
        expect(itemWrapper[0].classes()).to.include("active-item");
        expect(itemWrapper[1].classes()).to.not.include("active-item");
      });
      wrapper.destroy();
    });
  });
});

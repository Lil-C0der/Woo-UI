import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Collapse from "@/Collapse/Collapse";
import CollapseItem from "@/Collapse/CollapseItem";

import Vue from "vue";

chai.use(sinonChai);

Vue.component("woo-collapse", Collapse);
Vue.component("woo-collapse-item", CollapseItem);

describe("Collapse组件", () => {
  it("存在", () => {
    expect(Collapse).to.be.exist;
  });

  describe("props", () => {
    it("可以设置 activeName", () => {
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
      vm.$nextTick().then(() => {
        const itemWrapper = wrapper.find("[data-name='key 2']");
        expect(itemWrapper.classes()).to.includes("active-item");
        wrapper.destroy();
      });
    });

    it("可以设置 single", () => {
      const wrapper = mount(Collapse, {
        attachToDocument: true,
        propsData: {
          activeName: ["key 1"],
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
      const itemWrapper = wrapper.find("[data-name='key 2']");
      const headerWrapper = itemWrapper.find(".woo-collapse-item-header");
      headerWrapper.trigger("click");
      vm.$nextTick().then(() => {
        // 期待只有一个 item 为 active-item 类
        expect(vm.$el.querySelectorAll(".active-item").length).to.eq(1);
        expect(itemWrapper.classes()).to.include("active-item");
        wrapper.destroy();
      });
    });
  });

  it("可以触发 change 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Collapse, {
      attachToDocument: true,
      propsData: {
        activeName: ["key 1"],
      },
      slots: {
        default: `
          <woo-collapse-item name="key 1" title="test">test 1</woo-collapse-item>
          <woo-collapse-item name="key 2" title="test">test 2</woo-collapse-item>
          <woo-collapse-item name="key 3" title="test">test 3</woo-collapse-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    const itemWrapper = wrapper.find("[data-name='key 2']");
    const headerWrapper = itemWrapper.find(".woo-collapse-item-header");
    headerWrapper.trigger("click");
    vm.$nextTick().then(() => {
      expect(callback).to.have.been.calledWith(["key 1", "key 2"]);
      wrapper.destroy();
    });
  });
});

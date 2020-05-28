import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Sider from "@/Layout/Sider.vue";

chai.use(sinonChai);

describe("Sider 组件", () => {
  it("存在", () => {
    expect(Sider).to.exist;
  });

  it("可以设置 width", () => {
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        width: "400px",
      },
    });
    const vm = wrapper.vm;
    const { width } = window.getComputedStyle(vm.$el);
    expect(width).to.eq("400px");
    wrapper.destroy();
  });

  it("可以设置 collapsible", () => {
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        collapsible: true,
      },
    });
    const vm = wrapper.vm;
    const triggerWrapper = wrapper.find(".woo-sider-trigger");
    expect(triggerWrapper.exists()).to.eq(true);
    wrapper.destroy();
  });

  it("可以设置 collapsed", () => {
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        collapsed: true,
      },
    });
    const vm = wrapper.vm;
    expect(wrapper.classes()).to.includes("sider-collapsed");
    wrapper.destroy();
  });

  it("可以设置 collapsedWidth", () => {
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        collapsed: true,
        collapsedWidth: "100px",
      },
    });
    const vm = wrapper.vm;
    const { width } = window.getComputedStyle(vm.$el);
    expect(width).to.eq("100px");
    wrapper.destroy();
  });

  it("可以设置 reverseArrow", () => {
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        collapsible: true,
        reverseArrow: true,
      },
    });
    const vm = wrapper.vm;
    const iconWrapper = wrapper.find(".woo-icon");
    expect(iconWrapper.classes()).to.includes("sider-icon-reverse");
    wrapper.destroy();
  });

  it("可以触发 collapse 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Sider, {
      attachToDocument: true,
      propsData: {
        collapsible: true,
      },
      listeners: {
        collapse: callback,
      },
    });
    const vm = wrapper.vm;
    const triggerWrapper = wrapper.find(".woo-sider-trigger");
    triggerWrapper.trigger("click");
    expect(callback).to.have.been.calledWith(true);
    wrapper.destroy();
  });
});

import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Button from "@/Button/Button.vue";

chai.use(sinonChai);

// BDD 行为驱动测试 Mocha引入
describe("Button 组件", () => {
  it("存在", () => {
    // 断言 Chai引入
    expect(Button).to.exist;
  });
  it("可以设置 icon-name", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: "download",
      },
    });
    const vm = wrapper.vm;
    const svgEl = vm.$el.querySelector(".woo-icon-download");
    const { display } = window.getComputedStyle(svgEl);
    const useWrappers = wrapper.findAll("use").wrappers;
    const hrefArr = [];
    useWrappers.forEach((n) => {
      hrefArr.push(n.attributes("href"));
    });
    expect(hrefArr.includes("#woo-icon-download")).to.eq(true);
    expect(display).to.eq("block");
    wrapper.destroy();
  });

  it("可以设置 type", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        type: "dashed"
      }
    });
    const vm = wrapper.vm;
    // expect(useWrappers.attributes("href")).to.eq("#woo-icon-loading");
    expect(vm.$el.classList.contains("woo-button-dashed")).to.be.true;

    wrapper.destroy();
  });

  it("可以设置 loading", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        loading: true,
      },
    });
    const useWrappers = wrapper.find("use");
    expect(useWrappers.attributes("href")).to.eq("#woo-icon-loading");
    wrapper.destroy();
  });

  it("默认的 order 为1", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: "download",
      },
    });
    const vm = wrapper.vm;
    const svgEl = vm.$el.querySelector(".woo-icon-download");
    const { order } = getComputedStyle(svgEl);
    expect(order).to.eq("1");
    wrapper.destroy();
  });

  it("设置 icon-position 可以改变 order", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: "download",
        iconPosition: "right",
      },
    });
    const vm = wrapper.vm;
    const svgEl = vm.$el.querySelector(".woo-icon-download");
    const { order } = window.getComputedStyle(svgEl);
    expect(order).to.eq("2");
    wrapper.destroy();
  });

  it("点击button触发click事件", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: "download",
      },
    });
    const callback = sinon.fake();
    const vm = wrapper.vm;
    const btnWrapper = wrapper.find("button");
    vm.$on("click", callback);
    btnWrapper.trigger("click");
    expect(callback).to.have.been.called;
    wrapper.destroy();
  });
});

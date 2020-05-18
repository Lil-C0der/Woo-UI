import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Button from "@/Button.vue";

chai.use(sinonChai);

// BDD 行为驱动测试 Mocha引入
describe("Button 组件", () => {
  it("存在", () => {
    // 断言 Chai引入
    expect(Button).to.exist;
  });
  it("可以设置icon-name", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: "download",
      },
    });
    const vm = wrapper.vm;
    const svgEl = vm.$el.querySelector(".woo-icon-download");
    const { visibility } = window.getComputedStyle(svgEl);
    const useWrappers = wrapper.findAll("use").wrappers;
    const hrefArr = [];
    useWrappers.forEach((n) => {
      hrefArr.push(n.attributes("href"));
    });
    expect(hrefArr.includes("#woo-icon-download")).to.eq(true);
    expect(visibility).to.eq("visible");
  });

  it("可以设置loading", () => {
    const wrapper = mount(Button, {
      propsData: {
        loading: true,
      },
    });
    const useWrappers = wrapper.find("use");
    expect(useWrappers.attributes("href")).to.eq("#woo-icon-loading");
  });

  // TODO Button 组件 css还没测
  // it("默认的order为1", () => {
  //   const wrapper = mount(Button, {
  //     attachToDocument: true,
  //     propsData: {
  //       iconName: "download",
  //     },
  //   });
  //   const vm = wrapper.vm;
  //   const svgEl = vm.$el.querySelectorAll("svg");
  //   const { order } = window.getComputedStyle(svgEl[1]);
  // expect(order).to.eq("1");
  // console.log(123456);
  // console.log(window.getComputedStyle(svgEl[1]));
  // });

  // it("设置iconPosition可以改变order", () => {
  //   const Constructor = Vue.extend(Button);
  //   const testBtn = new Constructor({
  //     propsData: {
  //       icon: "woo-icon-download",
  //       iconPosition: "right",
  //     },
  //   });
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   testBtn.$mount(div);
  //   const svgEl = testBtn.$el.querySelectorAll("svg");
  //   const { order } = window.getComputedStyle(svgEl[0]);
  //   expect(order).to.eq("2");
  //   testBtn.$el.remove();
  //   testBtn.$destroy();
  // });

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
  });
});

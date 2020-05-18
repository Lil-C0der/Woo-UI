import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Popover from "@/Popover";

chai.use(sinonChai);

describe("Popover 组件", () => {
  it("存在", () => {
    expect(Popover).to.exist;
  });

  it("可以设置 visible", () => {
    const wrapper = mount(Popover, {
      attachToDocument: true,
      propsData: {
        visible: true,
      },
    });
    const vm = wrapper.vm;
    const contentEl = vm.$refs.contentWrapper;
    expect(window.getComputedStyle(contentEl).display).to.eq("block");
  });

  it("可以设置 placement", () => {
    const wrapper = mount(Popover, {
      attachToDocument: true,
      propsData: {
        placement: "bottom",
      },
    });
    const vm = wrapper.vm;
    const contentEl = vm.$refs.contentWrapper;
    expect(
      contentEl
        .querySelector(".woo-popover-arrow")
        .classList.contains("arrow-bottom")
    ).to.be.true;
  });

  it("可以设置 trigger", (done) => {
    const callback1 = sinon.fake();
    const callback2 = sinon.fake();
    const wrapper = mount(Popover, {
      attachToDocument: true,
      propsData: {
        trigger: "hover",
      },
    });
    const vm = wrapper.vm;
    const contentEl = vm.$refs.contentWrapper;
    const triggerEl = vm.$refs.triggerWrapper;
    const myEvt1 = new Event("mouseenter");
    const myEvt2 = new Event("mouseleave");
    triggerEl.addEventListener("mouseenter", callback1);
    triggerEl.addEventListener("mouseleave", callback2);
    triggerEl.dispatchEvent(myEvt1);
    vm.$nextTick(() => {
      expect(callback1).to.have.been.called;
      expect(window.getComputedStyle(contentEl).display).to.eq("block");
      triggerEl.dispatchEvent(myEvt2);
      setTimeout(() => {
        expect(callback2).to.have.been.called;
        expect(window.getComputedStyle(contentEl).display).to.eq("none");
        done();
      }, 800);
    });
  });
});

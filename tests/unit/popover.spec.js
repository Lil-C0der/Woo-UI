import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Popover from "@/Popover";
import Button from "@/Button/Button.vue";

import Vue from "vue";

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
    wrapper.destroy();
  });

  it("可以设置 placement", () => {
    const wrapper = mount(Popover, {
      attachToDocument: true,
      propsData: {
        placement: "bottom",
      },
    });
    const arrowWrapper = wrapper.find(".woo-popover-arrow");
    // classes 方法 docs:https://vue-test-utils.vuejs.org/zh/api/wrapper/#classes
    expect(arrowWrapper.classes()).to.include("arrow-bottom");
    wrapper.destroy();
  });

  it("可以设置 trigger", (done) => {
    const callback1 = sinon.fake();
    const callback2 = sinon.fake();
    const wrapper = mount(Popover, {
      attachToDocument: true,
      propsData: {
        trigger: "hover",
      },
      slots: {
        default: "<button>test button</button>",
        content: "<div>test content</div>",
      },
    });
    const vm = wrapper.vm;
    const contentEl = vm.$refs.contentWrapper;
    const btnWrapper = wrapper.find(".trigger-wrapper");
    const btnEl = vm.$refs.triggerWrapper;
    btnEl.addEventListener("mouseenter", callback1);
    btnEl.addEventListener("mouseenter", callback2);
    // 触发事件
    btnWrapper.trigger("mouseenter");
    // 组件中 showPopper 函数是异步执行的
    vm.$nextTick().then(() => {
      expect(callback1).to.have.been.called;
      expect(window.getComputedStyle(contentEl).display).to.eq("block");
      // 触发 mouseleave 事件, Popper 消失
      btnWrapper.trigger("mouseleave");
      setTimeout(() => {
        expect(callback2).to.have.been.called;
        expect(window.getComputedStyle(contentEl).display).to.eq("none");
        wrapper.destroy();
        done();
      }, 800);
    });
  });

  it("可以触发 visible-change 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Popover, {
      attachToDocument: true,
      slots: {
        default: "<button>test button</button>",
        content: "<div>test content</div>",
      },
      listeners: {
        "visible-change": callback,
      },
    });
    const vm = wrapper.vm;
    const btnWrapper = wrapper.find(".trigger-wrapper");
    btnWrapper.trigger("click");
    vm.$nextTick().then(() => {
      expect(callback).to.have.been.calledWith(true);
    });
  });
});

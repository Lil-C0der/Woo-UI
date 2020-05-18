import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";

import Input from "@/Input";

import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

describe("Input 组件", () => {
  it("存在", () => {
    expect(Input).to.exist;
  });

  describe("props", () => {
    it("接收 value", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,
        propsData: {
          value: "testVal",
        },
      });
      const vm = wrapper.vm;
      const inputEl = vm.$el.querySelector("input");
      expect(inputEl.value).to.eq("testVal");
    });

    it("设置 disabled", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,
        propsData: {
          disabled: true,
        },
      });
      const vm = wrapper.vm;
      const inputEl = vm.$el.querySelector("input");
      expect(inputEl.disabled).to.eq(true);
    });

    it("设置 error", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,
        propsData: {
          error: "ERROR",
        },
      });
      const vm = wrapper.vm;
      const useWrappers = wrapper.findAll("use").wrappers;
      const msgEl = vm.$el.querySelector(".message");
      const hrefArr = [];
      useWrappers.forEach((n) => {
        hrefArr.push(n.attributes("href"));
      });
      expect(hrefArr.includes("#woo-icon-error")).to.eq(true);
      expect(msgEl.innerHTML.trim()).to.eq("ERROR");
    });
  });

  describe("events", () => {
    it("支持 change/input/focus/blur 事件", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      const callback = sinon.fake();
      ["change", "input", "focus", "blur"].forEach((eventName) => {
        // 设置事件的目标target docs:https://vue-test-utils.vuejs.org/zh/api/wrapper/#trigger
        inputWrapper.element.value = "test value";
        vm.$on(eventName, callback);
        inputWrapper.trigger(eventName);
        expect(callback).to.have.been.calledWith("test value");
      });
    });
  });
});

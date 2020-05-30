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
      wrapper.destroy();
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
      wrapper.destroy();
    });

    it("设置 readonly", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,
        propsData: {
          readonly: true,
        },
      });
      const vm = wrapper.vm;
      const inputEl = vm.$el.querySelector("input");
      expect(inputEl.readOnly).to.eq(true);
      wrapper.destroy();
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
      wrapper.destroy();
    });

    it("设置 placeholder", () => {
      const wrapper = mount(Input, {
        attachToDocument: true,

        propsData: {
          placeholder: "test placeholder",
        },
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      expect(inputWrapper.attributes().placeholder).to.eq("test placeholder");
      wrapper.destroy();
    });
  });

  describe("events", () => {
    it("支持 change 事件", () => {
      const callback = sinon.fake();
      const wrapper = mount(Input, {
        attachToDocument: true,
        listeners: {
          change: callback,
        },
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      // 设置事件的目标target docs:https://vue-test-utils.vuejs.org/zh/api/wrapper/#trigger
      inputWrapper.element.value = "test value";
      inputWrapper.trigger("change");
      expect(callback).to.have.been.calledWith("test value");
      wrapper.destroy();
    });

    it("支持 input 事件", () => {
      const callback = sinon.fake();
      const wrapper = mount(Input, {
        attachToDocument: true,
        listeners: {
          input: callback,
        },
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      inputWrapper.element.value = "test value";
      inputWrapper.trigger("input");
      expect(callback).to.have.been.calledWith("test value");
      wrapper.destroy();
    });

    it("支持 focus 事件", () => {
      const callback = sinon.fake();
      const wrapper = mount(Input, {
        attachToDocument: true,
        listeners: {
          focus: callback,
        },
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      inputWrapper.element.value = "test value";
      inputWrapper.trigger("focus");
      expect(callback).to.have.been.calledWith("test value");
      wrapper.destroy();
    });

    it("支持 blur 事件", () => {
      const callback = sinon.fake();
      const wrapper = mount(Input, {
        attachToDocument: true,
        listeners: {
          blur: callback,
        },
      });
      const vm = wrapper.vm;
      const inputWrapper = wrapper.find("input");
      inputWrapper.element.value = "test value";
      inputWrapper.trigger("blur");
      expect(callback).to.have.been.calledWith("test value");
      wrapper.destroy();
    });

    it("支持 change 事件", () => {
      const callback = sinon.fake();
      const wrapper = mount(Input, {
        attachToDocument: true,
        propsData: {
          clearable: true,
        },
        listeners: {
          clear: callback,
        },
      });
      const vm = wrapper.vm;
      const clearWrapper = wrapper.find(".woo-icon-clear");
      clearWrapper.trigger("click");
      expect(callback).to.have.been.called;
      wrapper.destroy();
    });
  });
});

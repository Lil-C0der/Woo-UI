import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";

import Toast from "@/Toast";

import Vue from "vue";

import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

describe("Toast组件", () => {
  it("存在", () => {
    expect(Toast).to.exist;
  });

  describe("props", () => {
    it("可以设置 closable", () => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          closable: true,
        },
      });
      const vm = wrapper.vm;
      const closeEl = vm.$el.querySelector(".toast-close-button");
      expect(closeEl).to.exist;
    });

    it("可以设置 delay 为 0 即不会自动关闭", function(done) {
      // 增加 done 延迟
      this.timeout(5000);
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          delay: 0,
        },
      });
      const vm = wrapper.vm;
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(true);
        done();
        // 不设置 delay 时 3000ms后关闭toast
      }, 3500);
    });

    it("可以设置 delay", (done) => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          delay: 1000,
        },
      });
      const vm = wrapper.vm;
      vm.$on("beforeDestroyToast", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });

    it("可以设置 offset", () => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          offset: "32px",
        },
      });
      const vm = wrapper.vm;
      const toastEl = vm.$el;
      const { top } = window.getComputedStyle(toastEl);
      expect(top).to.eq("32px");
    });

    it("可以设置 position", () => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          position: "bottom",
        },
      });
      const vm = wrapper.vm;
      expect(document.querySelector(".bottom-toast")).to.exist;
    });

    it("可以设置 closeOption", () => {
      const callback = sinon.fake();
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          closable: true,
          closeOption: {
            text: "test Close",
            callback,
          },
        },
      });
      const vm = wrapper.vm;
      const closeBtnEl = vm.$el.querySelector(".toast-close-button");
      const spanEl = closeBtnEl.querySelector("span");
      closeBtnEl.click();
      expect(spanEl.innerHTML.trim()).to.eq("test Close");
      // 关闭时调用 closeOption 传入的回调函数
      expect(callback).have.been.calledWith(vm);
    });

    it("可以设置 dangerouslyUseHTMLString", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          dangerouslyUseHTMLString: true,
        },
      });
      const vm = wrapper.vm;
      vm.$slots.default = "<h2 id='test'>test text</h2>";
      vm.$mount(div);
      const HTMLtextEl = vm.$el.querySelector("#test");
      expect(HTMLtextEl).to.be.exist;
      expect(HTMLtextEl.innerHTML).to.be.eq("test text");
    });
  });
});

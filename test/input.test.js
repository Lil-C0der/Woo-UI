const expect = chai.expect;
import Vue from "vue";
import Input from "../src/Input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input 组件", () => {
  it("存在", () => {
    expect(Input).to.exist;
  });
  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let testIpt;
    afterEach(() => {
      testIpt.$destroy();
    });
    it("接收 value", () => {
      testIpt = new Constructor({
        propsData: {
          value: "testVal",
        },
      }).$mount();
      const inputEl = testIpt.$el.querySelector("input");
      expect(inputEl.value).to.eq("testVal");
    });
    it("设置 disabled", () => {
      testIpt = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const inputEl = testIpt.$el.querySelector("input");
      expect(inputEl.disabled).to.eq(true);
    });
    it("设置 disabled", () => {
      testIpt = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      const inputEl = testIpt.$el.querySelector("input");
      expect(inputEl.readOnly).to.eq(true);
    });
    it("设置 error", () => {
      testIpt = new Constructor({
        propsData: {
          error: "ERROR",
        },
      }).$mount();
      const useEl = testIpt.$el.querySelector("use");
      const msgEl = testIpt.$el.querySelector(".message");
      expect(useEl.getAttribute("xlink:href")).to.eq("#woo-icon-error");
      expect(msgEl.innerText.trim()).to.eq("ERROR");
    });
  });
  describe("events", () => {
    it("支持 change/input/focus/blur 事件", () => {
      const Constructor = Vue.extend(Input);
      const testIpt = new Constructor({}).$mount();
      const inputEl = testIpt.$el.querySelector("input");
      const callback = sinon.fake();
      ["change", "input", "focus", "blur"].forEach((eventName) => {
        let myEvt = new Event(eventName);
        Object.defineProperty(myEvt, "target", {
          value: { value: "testVal" },
          enumerable: false,
          configurable: false,
          writable: false,
        });
        testIpt.$on(eventName, callback);
        inputEl.dispatchEvent(myEvt);
        expect(callback).to.have.been.calledWith(testVal);
      });
      testIpt.$destroy();
    });
  });
});

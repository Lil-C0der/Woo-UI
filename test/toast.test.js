import Vue from "vue";
import Toast from "../src/Toast";

const expect = chai.expect;

describe("Toast组件", () => {
  it("存在", () => {
    expect(Toast).to.exist;
  });

  describe("props", () => {
    it("可以设置 closable", () => {
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          closable: true,
        },
      }).$mount();
      const closeEl = testToast.$el.querySelector(".toast-close-button");
      expect(closeEl).to.exist;
      testToast.$el.remove();
      testToast.$destroy();
    });

    it("可以设置 delay 为 0", function(done) {
      // 增加 done 延迟
      this.timeout(5000);
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          delay: 0,
        },
      }).$mount(div);
      setTimeout(() => {
        expect(document.body.contains(testToast.$el)).to.eq(true);
        done();
        testToast.$el.remove();
        testToast.$destroy();
      }, 3500);
    });

    it("可以设置 delay", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          delay: 1000,
        },
      }).$mount(div);
      testToast.$on("beforeDestroyToast", () => {
        expect(document.body.contains(testToast.$el)).to.eq(false);
        done();
        testToast.$el.remove();
        testToast.$destroy();
      });
    });

    it("可以设置 offset", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          offset: "32px",
        },
      }).$mount(div);
      const toastEl = testToast.$el;
      const { top } = window.getComputedStyle(toastEl);
      expect(top).to.eq("32px");
      testToast.$el.remove();
      testToast.$destroy();
    });

    it("可以设置 position", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          position: "bottom",
        },
      }).$mount(div);
      expect(document.querySelector(".bottom-toast")).to.exist;
      testToast.$el.remove();
      testToast.$destroy();
    });

    it("可以设置 closeOption", () => {
      const callback = sinon.fake();
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          closable: true,
          closeOption: {
            text: "test Close",
            callback,
          },
        },
      }).$mount(div);
      const closeBtnEl = testToast.$el.querySelector(".toast-close-button");
      closeBtnEl.click();
      expect(closeBtnEl.innerText.trim()).to.eq("test Close");
      expect(callback).have.been.calledWith(testToast);
      testToast.$el.remove();
      testToast.$destroy();
    });

    it("可以设置 dangerouslyUseHTMLString", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const testToast = new Constructor({
        propsData: {
          dangerouslyUseHTMLString: true,
        },
      });
      testToast.$slots.default = "<h2 id='test'>test</h2>";
      testToast.$mount(div);
      const HTMLtextEl = testToast.$el.querySelector("#test");
      expect(HTMLtextEl).to.be.exist;
      testToast.$el.remove();
      testToast.$destroy();
    });
  });
});

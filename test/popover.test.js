import Vue from "vue";
import Popover from "../src/Popover";
import Button from "../src/Button";

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover 组件", () => {
  it("存在", () => {
    expect(Popover).to.exist;
  });

  it("可以设置 visible", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Popover);
    const testPopover = new Constructor({
      propsData: {
        visible: true,
      },
    }).$mount(div);
    const contentEl = testPopover.$refs.contentWrapper;
    expect(window.getComputedStyle(contentEl).display).to.eq("block");
    testPopover.$el.remove();
    testPopover.$destroy();
  });

  it("可以设置 placement", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Popover);
    const testPopover = new Constructor({
      propsData: {
        visible: true,
        placement: "bottom",
      },
    }).$mount(div);
    const contentEl = testPopover.$refs.contentWrapper;
    expect(
      contentEl
        .querySelector(".woo-popover-arrow")
        .classList.contains("arrow-bottom")
    ).to.be.true;
    testPopover.$el.remove();
    testPopover.$destroy();
  });

  it("可以设置 trigger", (done) => {
    Vue.component("woo-popover", Popover);
    Vue.component("woo-button", Button);
    const callback = sinon.fake();
    const callback2 = sinon.fake();
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <woo-popover ref='test' trigger='hover'>
      <template v-slot:content>
        <span>测试文本</span>
      </template>
      <woo-button>按钮</woo-button>
    </woo-popover>
  `;
    const vm = new Vue({
      el: div,
    });
    const contentEl = vm.$refs.test.$refs.contentWrapper;
    const triggerEl = vm.$refs.test.$refs.triggerWrapper;
    const myEvt1 = new Event("mouseenter");
    const myEvt2 = new Event("mouseleave");
    triggerEl.addEventListener("mouseenter", callback);
    triggerEl.addEventListener("mouseleave", callback2);
    triggerEl.dispatchEvent(myEvt1);
    vm.$nextTick(() => {
      expect(callback).to.be.called;
      expect(window.getComputedStyle(contentEl).display).to.eq("block");
      triggerEl.dispatchEvent(myEvt2);
      setTimeout(() => {
        expect(callback2).to.be.called;
        expect(window.getComputedStyle(contentEl).display).to.eq("none");
        done();
        vm.$el.remove();
        vm.$destroy();
      }, 800);
    });
  });
});

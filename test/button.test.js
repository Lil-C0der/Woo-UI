const expect = chai.expect;
import Vue from "vue";
import Button from "../src/Button";

Vue.config.productionTip = false;
Vue.config.devtools = false;
// BDD 行为驱动测试 Mocha引入
describe("Button组件", () => {
  it("存在", () => {
    // 断言 Chai引入
    expect(Button).to.exist;
  });
  it("可以设置iconName", () => {
    const Constructor = Vue.extend(Button);
    const testBtn = new Constructor({
      propsData: {
        iconName: "download",
      },
    });
    testBtn.$mount();
    const useEl = testBtn.$el.querySelectorAll("use");
    const svgEl = testBtn.$el.querySelectorAll("svg");
    const hrefArr = [];
    useEl.forEach((n) => {
      hrefArr.push(n.getAttribute("xlink:href"));
    });
    expect(hrefArr[0]).to.eq("#woo-icon-loading");
    expect(hrefArr[1]).to.eq("#woo-icon-download");
    expect(svgEl[0].style.display).to.eq("none");
    expect(svgEl[1].style.display).to.eq("");
    testBtn.$destroy();
  });
  it("可以设置loading", () => {
    const Constructor = Vue.extend(Button);
    const testBtn = new Constructor({
      propsData: {
        iconName: "download",
        loading: true,
      },
    });
    testBtn.$mount();
    const useEl = testBtn.$el.querySelectorAll("use");
    const svgEl = testBtn.$el.querySelectorAll("svg");
    expect(svgEl[0].style.display).to.eq("");
    expect(useEl[0].getAttribute("xlink:href")).to.eq("#woo-icon-loading");
    expect(svgEl[1].style.display).to.eq("none");
    testBtn.$el.remove();
    testBtn.$destroy();
  });
  it("默认的order为1", () => {
    const Constructor = Vue.extend(Button);
    const testBtn = new Constructor({
      propsData: {
        iconName: "download",
      },
    });
    const div = document.createElement("div");
    document.body.appendChild(div);

    testBtn.$mount(div);
    const svgEl = testBtn.$el.querySelectorAll("svg");
    const { order } = window.getComputedStyle(svgEl[0]);
    expect(order).to.eq("1");
    testBtn.$el.remove();
    testBtn.$destroy();
  });
  it("设置iconPosition可以改变order", () => {
    const Constructor = Vue.extend(Button);
    const testBtn = new Constructor({
      propsData: {
        icon: "woo-icon-download",
        iconPosition: "right",
      },
    });
    const div = document.createElement("div");
    document.body.appendChild(div);
    testBtn.$mount(div);
    const svgEl = testBtn.$el.querySelectorAll("svg");
    const { order } = window.getComputedStyle(svgEl[0]);
    expect(order).to.eq("2");
    testBtn.$el.remove();
    testBtn.$destroy();
  });
  it("点击button触发click事件", () => {
    const Constructor = Vue.extend(Button);
    const testBtn = new Constructor({
      propsData: {
        icon: "woo-icon-download",
        iconPosition: "right",
        loading: false,
      },
    });
    testBtn.$mount();
    const callback = sinon.fake();
    testBtn.$on("click", callback);
    testBtn.$el.click();
    expect(callback).to.have.been.called;
  });
});

const expect = chai.expect;
import Vue from "vue";
import Col from "../src/Col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col组件", () => {
  it("存在", () => {
    expect(Col).to.exist;
  });
  it("可以设置 span", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        span: 24,
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-24")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 offset", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        offset: 1,
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-offset-1")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 xs", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        xs: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-xs-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-xs-offset-12")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 sm", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        sm: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-sm-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-sm-offset-12")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 md", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        md: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-md-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-md-offset-12")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 lg", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        lg: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-lg-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-lg-offset-12")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 xl", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        xl: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-xl-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-xl-offset-12")).to.be.true;
    testCol.$destroy();
  });
  it("可以设置 xxl", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ColConstructor = Vue.extend(Col);
    const testCol = new ColConstructor({
      propsData: {
        xxl: { span: 12, offset: 12 },
      },
    }).$mount(div);
    expect(testCol.$el.classList.contains("woo-col-xxl-12")).to.be.true;
    expect(testCol.$el.classList.contains("woo-col-xxl-offset-12")).to.be.true;
    testCol.$destroy();
  });
});

import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Col from "@/Col";

describe("Col组件", () => {
  it("存在", () => {
    expect(Col).to.exist;
  });
  it("可以设置 span", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        span: 12,
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-12")).to.be.true;
  });

  it("可以设置 offset", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        offset: 1,
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-offset-1")).to.be.true;
  });

  it("可以设置 xs", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        xs: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-xs-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-xs-offset-12")).to.be.true;
  });

  it("可以设置 sm", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        sm: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-sm-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-sm-offset-12")).to.be.true;
  });

  it("可以设置 md", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        md: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-md-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-md-offset-12")).to.be.true;
  });

  it("可以设置 lg", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        lg: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-lg-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-lg-offset-12")).to.be.true;
  });

  it("可以设置 xl", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        xl: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-xl-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-xl-offset-12")).to.be.true;
  });

  it("可以设置 xxl", () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {
        xxl: { span: 12, offset: 12 },
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("woo-col-xxl-12")).to.be.true;
    expect(vm.$el.classList.contains("woo-col-xxl-offset-12")).to.be.true;
  });
});

import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Row from "@/Grid/Row";
import Col from "@/Grid/Col";

describe("Row组件", () => {
  it("存在", () => {
    expect(Row).to.exist;
  });
  it("可以设置 gutter", () => {
    const wrapper = mount(Row, {
      attachToDocument: true,
      slots: {
        default: Col,
      },
      propsData: {
        gutter: 20,
      },
    });
    const rowEl = wrapper.vm.$el;
    const colEl = wrapper.vm.$el.querySelector(".woo-col");
    const { marginLeft, marginRight } = window.getComputedStyle(rowEl);
    const { paddingLeft, paddingRight } = window.getComputedStyle(colEl);
    expect(marginLeft).to.eq("-10px");
    expect(marginRight).to.eq("-10px");
    expect(paddingLeft).to.eq("10px");
    expect(paddingRight).to.eq("10px");
    wrapper.destroy();
  });

  it("可以设置 align", () => {
    const wrapper = mount(Row, {
      attachToDocument: true,
      propsData: {
        align: "right",
      },
    });
    const { justifyContent } = window.getComputedStyle(wrapper.vm.$el);
    expect(justifyContent).to.eq("flex-end");
    wrapper.destroy();
  });
});

const expect = chai.expect;
import Vue from "vue";
import Row from "../src/Row";
import Col from "../src/Col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row组件", () => {
  it("存在", () => {
    expect(Row).to.exist;
  });
  it("可以设置 gutter", () => {
    Vue.component("woo-row", Row);
    Vue.component("woo-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `<woo-row :gutter="20">
      <woo-col></woo-col>
    </woo-row>`;
    const vm = new Vue({
      el: div,
    });
    const rowEl = document.querySelector(".woo-row");
    const colEl = document.querySelector(".woo-col");
    const { marginLeft, marginRight } = window.getComputedStyle(rowEl);
    const { paddingLeft, paddingRight } = window.getComputedStyle(colEl);
    expect(marginLeft).to.eq("-10px");
    expect(marginRight).to.eq("-10px");
    expect(paddingLeft).to.eq("10px");
    expect(paddingRight).to.eq("10px");
    vm.$destroy();
  });
  it("可以设置 align", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const RowConstructor = Vue.extend(Row);
    const testRow = new RowConstructor({
      propsData: {
        align: "right",
      },
    }).$mount(div);
    const { justifyContent } = window.getComputedStyle(testRow.$el);
    expect(justifyContent).to.eq("flex-end");
    testRow.$destroy();
  });
});

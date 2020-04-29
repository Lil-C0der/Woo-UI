import Vue from "vue";

import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";

Vue.component("woo-button", Button);
Vue.component("woo-icon", Icon);
Vue.component("woo-button-group", ButtonGroup);

const app = new Vue({
  el: "#app",
  data: {
    isLoading1: false,
    isLoading2: false,
    isLoading3: false,
  },
  methods: {},
});

// 单元测试
import chai from "chai";
import spies from "chai-spies";
chai.use(spies);
const expect = chai.expect;
// icon
{
  const Contructor = Vue.extend(Button);
  const testBtn = new Contructor({
    propsData: {
      icon: "woo-icon-download",
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
  testBtn.$el.remove();
  testBtn.$destroy();
}
// loading
{
  const Contructor = Vue.extend(Button);
  const testBtn = new Contructor({
    propsData: {
      icon: "woo-icon-download",
      loading: true,
    },
  });
  testBtn.$mount();
  const svgEl = testBtn.$el.querySelectorAll("svg");
  expect(svgEl[0].style.display).to.eq("");
  expect(svgEl[1].style.display).to.eq("none");
  testBtn.$el.remove();
  testBtn.$destroy();
}
// order
{
  const Contructor = Vue.extend(Button);
  const testBtn = new Contructor({
    propsData: {
      icon: "woo-icon-download",
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
}
//iconPostion
{
  const Contructor = Vue.extend(Button);
  const testBtn = new Contructor({
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
}
//click mock
{
  const Contructor = Vue.extend(Button);
  const testBtn = new Contructor({
    propsData: {
      icon: "woo-icon-download",
      iconPosition: "right",
      loading: false,
    },
  });
  testBtn.$mount();
  let spy = chai.spy(() => {});
  testBtn.$on("click", spy);
  const button = testBtn.$el.click();
  expect(spy).has.been.called();
}

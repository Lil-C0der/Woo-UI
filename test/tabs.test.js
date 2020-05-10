import Vue from "vue";
import Tabs from "../src/Tabs.vue";
import TabsHead from "../src/TabsHead.vue";
import TabsItem from "../src/TabsItem.vue";
import TabsPane from "../src/TabsPane.vue";
import TabsBody from "../src/TabsBody.vue";

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs组件", () => {
  it("存在", () => {
    expect(Tabs).to.exist;
  });

  it("子组件必须为 tabs-head 和 tabs-body", (done) => {
    Vue.component("woo-tabs", Tabs);
    Vue.component("woo-tabs-head", TabsHead);
    Vue.component("woo-tabs-item", TabsItem);
    Vue.component("woo-tabs-pane", TabsPane);
    Vue.component("woo-tabs-body", TabsBody);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <woo-tabs>
        <div>test</div>
      </woo-tabs>`;
    expect(() => {
      const vm = new Vue({
        el: div,
      });
      done();
    }).to.throw();
    vm.$el.remove();
    vm.$destroy();
  });

  it("可以设置 activeName ", (done) => {
    Vue.component("woo-tabs", Tabs);
    Vue.component("woo-tabs-head", TabsHead);
    Vue.component("woo-tabs-item", TabsItem);
    Vue.component("woo-tabs-pane", TabsPane);
    Vue.component("woo-tabs-body", TabsBody);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <woo-tabs active-name='2nd'>
        <woo-tabs-head>
          <woo-tabs-item name="1st">1</woo-tabs-item>
          <woo-tabs-item name="2nd">2</woo-tabs-item>
          <woo-tabs-item name="3rd">3</woo-tabs-item>
          <woo-tabs-item name="4th">4</woo-tabs-item>
        </woo-tabs-head>
        <woo-tabs-body>
          <woo-tabs-pane name="1st">A</woo-tabs-pane>
          <woo-tabs-pane name="2nd">B</woo-tabs-pane>
          <woo-tabs-pane name="3rd">C</woo-tabs-pane>
        </woo-tabs-body>
      </woo-tabs>`;
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const tabsItemList = vm.$el.querySelectorAll(".woo-tabs-item");
      expect(tabsItemList[1].classList.contains("item-active")).to.eq(true);
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  // TODO isVertical
});

import Vue from "vue";
import TabsPane from "../src/TabsPane.vue";

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("tabs-item 组件", () => {
  it("存在", () => {
    expect(TabsPane).to.exist;
  });
  it("可以设置 name", () => {
    const Constructor = Vue.extend(TabsPane);
    const testTabsPane = new Constructor({
      propsData: {
        name: "test-name",
      },
    }).$mount();
    expect(testTabsPane.$el.dataset["name"]).to.eq("test-name");
    testTabsPane.$el.remove();
    testTabsPane.$destroy();
  });
});

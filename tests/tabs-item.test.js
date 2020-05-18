import Vue from "vue";
import TabsItem from "../src/TabsItem.vue";

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("tabs-item 组件", () => {
  it("存在", () => {
    expect(TabsItem).to.exist;
  });
  it("可以设置 name", () => {
    const Constructor = Vue.extend(TabsItem);
    const testTabsItem = new Constructor({
      propsData: {
        name: "test-name",
      },
    }).$mount();
    expect(testTabsItem.$el.dataset["name"]).to.eq("test-name");
    testTabsItem.$el.remove();
    testTabsItem.$destroy();
  });
  it("可以设置 disabled", () => {
    const callback = sinon.fake();
    const Constructor = Vue.extend(TabsItem);
    const testTabsItem = new Constructor({
      propsData: {
        disabled: true,
      },
    }).$mount();
    expect(testTabsItem.$el.classList.contains("item-disabled")).to.eq(true);
    testTabsItem.$on("click", callback);
    testTabsItem.$el.click();
    expect(callback).to.have.not.been.called;
    testTabsItem.$el.remove();
    testTabsItem.$destroy();
  });
});

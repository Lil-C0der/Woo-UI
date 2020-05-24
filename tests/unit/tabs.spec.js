import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Tabs from "@/Tabs/Tabs.vue";
import TabsHead from "@/Tabs/TabsHead.vue";
import TabsItem from "@/Tabs/TabsItem.vue";
import TabsPane from "@/Tabs/TabsPane.vue";
import TabsBody from "@/Tabs/TabsBody.vue";

import Vue from "vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs组件", () => {
  it("存在", () => {
    expect(Tabs).to.exist;
  });

  it("子组件必须为 tabs-head 和 tabs-body", () => {
    // 期待抛出一个异常
    expect(() => {
      const wrapper = mount(Tabs, {
        attachToDocument: true,
      });
    }).to.throw();
  });

  // TODO 用 vue-test-utils 优化
  it("可以设置 activeName ", () => {
    Vue.component("woo-tabs", Tabs);
    Vue.component("woo-tabs-head", TabsHead);
    Vue.component("woo-tabs-item", TabsItem);
    Vue.component("woo-tabs-pane", TabsPane);
    Vue.component("woo-tabs-body", TabsBody);

    const wrapper = mount(Tabs, {
      attachToDocument: true,
      propsData: {
        activeName: "2nd",
      },
      slots: {
        default: `
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
            </woo-tabs-body>`,
      },
    });
    const vm = wrapper.vm;

    vm.$nextTick().then(() => {
      const tabsItemList = vm.$el.querySelectorAll(".woo-tabs-item");
      expect(tabsItemList[1].classList.contains("item-active")).to.eq(true);
    });
    wrapper.destroy();
  });
  // TODO isVertical
});

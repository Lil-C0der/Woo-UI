import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Tabs from "@/Tabs/Tabs.vue";
import TabsHead from "@/Tabs/TabsHead.vue";
import TabsItem from "@/Tabs/TabsItem.vue";
import TabsPane from "@/Tabs/TabsPane.vue";
import TabsBody from "@/Tabs/TabsBody.vue";

import Vue from "vue";

chai.use(sinonChai);

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("woo-tabs", Tabs);
Vue.component("woo-tabs-head", TabsHead);
Vue.component("woo-tabs-item", TabsItem);
Vue.component("woo-tabs-pane", TabsPane);
Vue.component("woo-tabs-body", TabsBody);

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

  it("没有绑定值时默认选中第一个 item ", () => {
    const wrapper = mount(Tabs, {
      attachToDocument: true,
      slots: {
        default: `
            <woo-tabs-head>
              <woo-tabs-item name="1st">1</woo-tabs-item>
              <woo-tabs-item name="2nd">2</woo-tabs-item>
              <woo-tabs-item name="3rd">3</woo-tabs-item>
            </woo-tabs-head>
            <woo-tabs-body>
              <woo-tabs-pane name="1st">A</woo-tabs-pane>
              <woo-tabs-pane name="2nd">B</woo-tabs-pane>
              <woo-tabs-pane name="3rd">C</woo-tabs-pane>
            </woo-tabs-body>`,
      },
    });
    const vm = wrapper.vm;
    const tabsItemWrapper = wrapper.find('[data-name="1st"]', ".woo-tabs-item");
    vm.$nextTick().then(() => {
      expect(tabsItemWrapper.classes().includes("item-active")).to.eq(true);
      wrapper.destroy();
    });
  });

  it("可以设置 activeName ", () => {
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
            </woo-tabs-head>
            <woo-tabs-body>
              <woo-tabs-pane name="1st">A</woo-tabs-pane>
              <woo-tabs-pane name="2nd">B</woo-tabs-pane>
              <woo-tabs-pane name="3rd">C</woo-tabs-pane>
            </woo-tabs-body>`,
      },
    });
    const vm = wrapper.vm;
    const tabsItemWrapper = wrapper.find('[data-name="2nd"]', ".woo-tabs-item");
    vm.$nextTick().then(() => {
      expect(tabsItemWrapper.classes().includes("item-active")).to.eq(true);
      wrapper.destroy();
    });
  });

  it("可以触发 tab-click 事件 ", () => {
    const callback = sinon.fake();
    const wrapper = mount(Tabs, {
      attachToDocument: true,
      slots: {
        default: `
            <woo-tabs-head>
              <woo-tabs-item name="1st">1</woo-tabs-item>
              <woo-tabs-item name="2nd">2</woo-tabs-item>
              <woo-tabs-item name="3rd">3</woo-tabs-item>
            </woo-tabs-head>
            <woo-tabs-body>
              <woo-tabs-pane name="1st">A</woo-tabs-pane>
              <woo-tabs-pane name="2nd">B</woo-tabs-pane>
              <woo-tabs-pane name="3rd">C</woo-tabs-pane>
            </woo-tabs-body>`,
      },
      listeners: {
        "tab-click": callback,
      },
    });
    const vm = wrapper.vm;
    const tabsItemWrapper = wrapper.find('[data-name="3rd"]', ".woo-tabs-item");
    vm.$nextTick()
      .then(() => {
        tabsItemWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith("3rd");
        wrapper.destroy();
      });
  });

  it("可以触发 change 事件 ", () => {
    const callback = sinon.fake();
    const wrapper = mount(Tabs, {
      attachToDocument: true,
      slots: {
        default: `
            <woo-tabs-head>
              <woo-tabs-item name="1st">1</woo-tabs-item>
              <woo-tabs-item name="2nd">2</woo-tabs-item>
              <woo-tabs-item name="3rd">3</woo-tabs-item>
            </woo-tabs-head>
            <woo-tabs-body>
              <woo-tabs-pane name="1st">A</woo-tabs-pane>
              <woo-tabs-pane name="2nd">B</woo-tabs-pane>
              <woo-tabs-pane name="3rd">C</woo-tabs-pane>
            </woo-tabs-body>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    const tabsItemWrapper = wrapper.find('[data-name="3rd"]', ".woo-tabs-item");
    vm.$nextTick()
      .then(() => {
        tabsItemWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith("3rd", "1st");
        wrapper.destroy();
      });
  });
});

import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Menu from "@/Menu/Menu.vue";
import MenuItem from "@/Menu/MenuItem.vue";
import Submenu from "@/Menu/Submenu.vue";

import Vue from "vue";

chai.use(sinonChai);

Vue.component("woo-menu-item", MenuItem);
Vue.component("woo-submenu", Submenu);

describe("Menu 组件", () => {
  it("存在", () => {
    expect(Menu).to.exist;
  });

  it("可以设置 selected-index", () => {
    const wrapper = mount(Menu, {
      attachToDocument: true,
      propsData: {
        selectedIndex: "2",
      },
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
    });
    const vm = wrapper.vm;
    vm.$nextTick().then(() => {
      const itemWrapper = wrapper.find("[data-index='2']");
      expect(itemWrapper.classes()).includes("active-menu-item");
    });
  });

  it("可以设置 trigger", () => {
    const callback = sinon.fake();
    const wrapper = mount(Menu, {
      attachToDocument: true,
      propsData: {
        trigger: "hover",
      },
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
    });
    const vm = wrapper.vm;
    const submenuWrapper = wrapper.find(".woo-submenu");
    const submenuEl = vm.$el.querySelector(".woo-submenu");
    submenuEl.addEventListener("mouseenter", callback);
    submenuWrapper.trigger("mouseenter");
    expect(callback).to.have.been.called;
    wrapper.destroy();
  });

  it("可以设置 vertical", () => {
    const wrapper = mount(Menu, {
      attachToDocument: true,
      propsData: {
        vertical: true,
      },
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
    });
    expect(wrapper.classes()).includes("woo-menu-vertical");
    wrapper.destroy();
  });

  it("可以设置 width", () => {
    const wrapper = mount(Menu, {
      attachToDocument: true,
      propsData: {
        vertical: true,
        width: "400px",
      },
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
    });
    const vm = wrapper.vm;
    const { width } = window.getComputedStyle(vm.$el);
    expect(width).to.eq("400px");
    wrapper.destroy();
  });

  it("可以触发 select 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Menu, {
      attachToDocument: true,
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
      listeners: {
        select: callback,
      },
    });
    const vm = wrapper.vm;
    const submenuWrapper = wrapper.find('[data-index="2"]');
    submenuWrapper.trigger("click");
    expect(callback).to.have.been.calledWith("2");
    wrapper.destroy();
  });

  it("可以触发 open 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Menu, {
      attachToDocument: true,
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
      listeners: {
        open: callback,
      },
    });
    const vm = wrapper.vm;
    const submenuWrapper = wrapper.find('[data-index="3"]');
    submenuWrapper.trigger("click");
    vm.$nextTick().then(() => {
      expect(callback).to.have.been.calledWith(["3"]);
      wrapper.destroy();
    });
  });

  it("可以触发 close 事件", () => {
    const callback = sinon.fake();
    const wrapper = mount(Menu, {
      attachToDocument: true,
      slots: {
        default: `
        <woo-menu-item index="1">test 1</woo-menu-item>
        <woo-menu-item index="2">test 2</woo-menu-item>
        <woo-submenu index="3">
          <template #title>test 3</template>
          <woo-menu-item index="3-1">test 3-1-1111111</woo-menu-item>
          <woo-menu-item index="3-2">test 3-2</woo-menu-item>
        </woo-submenu>`,
      },
      listeners: {
        close: callback,
      },
    });
    const vm = wrapper.vm;
    const submenuWrapper = wrapper.find('[data-index="3"]');
    submenuWrapper.trigger("click");
    vm.$nextTick()
      .then(() => {
        submenuWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith(["3"]);
        wrapper.destroy();
      });
  });
});

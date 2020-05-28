import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Slide from "@/Slide/Slide.vue";
import SlideItem from "@/Slide/SlideItem.vue";

import Vue from "vue";

chai.use(sinonChai);

Vue.component("woo-slide-item", SlideItem);

describe("Slide 组件", () => {
  it("存在", () => {
    expect(Slide).to.exist;
  });

  it("挂载子组件 SlideItem 默认展示第一个 Item ", () => {
    const wrapper = mount(Slide, {
      attachToDocument: true,
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
    });
    const vm = wrapper.vm;
    vm.$nextTick().then(() => {
      const box1El = vm.$el.querySelector(".box1");
      expect(window.getComputedStyle(box1El).display).to.eq("block");
      wrapper.destroy();
    });
  });

  it("可以自动播放 触发 change 事件", function(done) {
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        interval: 200,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    setTimeout(() => {
      expect(callback).to.have.been.calledWith(1, 0);
      done();
      wrapper.destroy();
    }, 300);
  });

  it("可以点击切换上一张 触发 change 事件", function() {
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    const prevWrapper = wrapper.find('[data-action="prev"]');
    vm.$nextTick()
      .then(() => {
        prevWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith(3, 0);
        wrapper.destroy();
      });
  });

  it("可以点击切换下一张 触发 change 事件", function() {
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    const prevWrapper = wrapper.find('[data-action="next"]');
    vm.$nextTick()
      .then(() => {
        prevWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith(1, 0);
        wrapper.destroy();
      });
  });

  it("可以点击 indicator 切换 触发 change 事件", function() {
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    vm.$nextTick()
      .then(() => {
        const indicatorWrapper = wrapper.find("[data-index='2']");
        indicatorWrapper.trigger("click");
      })
      .then(() => {
        expect(callback).to.have.been.calledWith(1, 0);
        wrapper.destroy();
      });
  });

  it("可以设置 height", () => {
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
        height: "400px",
      },
    });
    const vm = wrapper.vm;
    expect(vm.$refs.slideWrapperRef.style.height).to.eq("400px");
    wrapper.destroy();
  });

  it("可以设置 interval", (done) => {
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        interval: 1000,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
      listeners: {
        change: callback,
      },
    });
    const vm = wrapper.vm;
    const box2El = vm.$el.querySelector(".box2");
    setTimeout(() => {
      expect(callback).to.have.been.calledWith(1, 0);
      wrapper.destroy();
      done();
    }, 1300);
  });

  it("可以设置 initialIndex", () => {
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
        initialIndex: 3,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
    });
    const vm = wrapper.vm;
    const box4El = vm.$el.querySelector(".box4");
    vm.$nextTick().then(() => {
      expect(window.getComputedStyle(box4El).display).to.eq("block");
      wrapper.destroy();
    });
  });

  it("可以设置 autoPlay", function(done) {
    const wrapper = mount(Slide, {
      attachToDocument: true,
      propsData: {
        autoPlay: false,
        interval: 1000,
      },
      slots: {
        default: `
        <woo-slide-item name="a" class="box1">
          <h3>1</h3>
        </woo-slide-item>
        <woo-slide-item name="b" class="box2">
          <h3>2</h3>
        </woo-slide-item>
        <woo-slide-item name="c" class="box3">
          <h3>3</h3>
        </woo-slide-item>
        <woo-slide-item name="d" class="box4">
          <h3>4</h3>
        </woo-slide-item>`,
      },
    });
    const vm = wrapper.vm;
    const box1El = vm.$el.querySelector(".box1");
    setTimeout(() => {
      expect(window.getComputedStyle(box1El).display).to.eq("block");
      done();
      wrapper.destroy();
    }, 1300);
  });
});

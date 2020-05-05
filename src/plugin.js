import Toast from "./Toast.vue";

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(msg, toastOptions) {
      const ToastConstructor = Vue.extend(Toast);
      const toast = new ToastConstructor({
        propsData: toastOptions,
      });
      toast.$slots.default = msg;
      toast.$mount(document.createElement("div"));
      document.body.appendChild(toast.$el);
    };
  },
};

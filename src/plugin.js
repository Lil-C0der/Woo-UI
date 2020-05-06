import Toast from "./Toast.vue";

function createToast(Vue, msg, propsData, closedCallback) {
  const ToastConstructor = Vue.extend(Toast);
  const toast = new ToastConstructor({
    propsData,
  });
  toast.$slots.default = msg;
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  toast.$on("beforeClose", closedCallback);
  return toast;
}

let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(msg, toastOptions) {
      currentToast && currentToast.close();
      currentToast = createToast(Vue, msg, toastOptions, () => {
        // 正常关闭时置空
        currentToast = null;
      });
    };
  },
};

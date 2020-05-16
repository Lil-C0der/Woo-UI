let callbacks = [];
let handleDocumentClick = (e) => {
  callbacks.forEach((n) => {
    if (n.el === e.target || n.el.contains(e.target)) {
      return;
    } else {
      n.cb();
    }
  });
};

// 这样写的话 整个 document 对象只有一个监听器
document.addEventListener("click", handleDocumentClick);

let removeListener = () => {
  document.removeEventListener("click", handleDocumentClick);
};

export default {
  bind: function(el, binding, vnode) {
    callbacks.push({ el, cb: binding.value });
  },
};

export { removeListener };

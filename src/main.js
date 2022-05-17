import Vue from 'vue'
import App from './App.vue'

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#root') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
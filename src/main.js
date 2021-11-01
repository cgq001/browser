import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import electron from 'electron'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$electron = electron

Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small' });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

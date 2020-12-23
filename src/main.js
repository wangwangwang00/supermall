import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Toast, Dialog } from 'vant';
Vue.use(Toast).use(Dialog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Formatter from './utils/locale/Translate';

Vue.config.productionTip = false

Vue.use(Formatter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

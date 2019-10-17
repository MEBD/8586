import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Formatter from './utils/locale/Translate';

require('gsap/umd/CSSPlugin');
require('gsap/umd/TextPlugin');
require('gsap/umd/ScrollToPlugin');

Vue.config.productionTip = false

Vue.use(Formatter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

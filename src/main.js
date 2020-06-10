import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/css/style.css'
import './assets/css/utility.css'

import Spinner from './components/Spinner.vue'

Vue.component('Spinner', Spinner)

Vue.config.productionTip = false

Vue.prototype.$fakeDelay = 1000

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

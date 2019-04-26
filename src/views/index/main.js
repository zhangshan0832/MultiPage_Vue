import Vue from 'vue'
import App from './App.vue'
import http from '@/utils/request.js'

Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

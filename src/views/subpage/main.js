import Vue from 'vue'
import subpage from './subpage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(subpage),
}).$mount('#app')

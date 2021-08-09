import Vue from 'vue'
import FAQ from './views/FAQ.vue'
//import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(FAQ),
}).$mount('#app')


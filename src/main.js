import Vue from 'vue'
import FAQ from './views/FAQ.vue'
//import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(FAQ),
}).$mount('#app')

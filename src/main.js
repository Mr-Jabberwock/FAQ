import Vue from 'vue'
import VueRouter from 'vue-router'
import FAQ from './views/FAQ.vue'
//import App from './App.vue'
import Routes from './router'

Vue.use(VueRouter);

const router = new VueRouter({
  router: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(FAQ),
}).$mount('#app')

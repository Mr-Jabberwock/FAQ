import Vue from 'vue'
import VueRouter from 'vue-router'
import FAQ from '../views/FAQ.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/articles/:title',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  hash: false,
  base: process.env.BASE_URL,
  routes
})

export default router

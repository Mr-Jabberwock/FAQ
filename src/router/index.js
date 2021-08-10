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
    path: '/search/:criteria',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResults.vue')
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/categories/:id',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopicAnswers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  hash: false,
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import All from './All.vue'
import Good from './Good.vue'
import Water from './Water.vue'



Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      component: All,
    },
    {
      path: '/all',
      component: All,
    },
    {
      path: '/good',
      component: Good,
    },
    {
      path: '/water',
      component: Water,
    },
  ],
})

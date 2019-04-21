import Vue from 'vue'
import VueRouter from 'vue-router'
import All from './All.vue'
import Good from './Good.vue'
import Water from './Water.vue'
import Article from './Article'
import SigUp from './SigUp.vue'


Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      component: All,
      children: [
        {
          path: 'article',
          component: Article,
        },
      ]
    },
    {
      path: '/good',
      component: Good,
    },
    {
      path: '/water',
      component: Water,
    },
    {
      path: '/sig-up',
      component: SigUp,
    },
  ]
})

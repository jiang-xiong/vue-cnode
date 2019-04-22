import Vue from 'vue'
import VueRouter from 'vue-router'
import All from './All.vue'

// import Article from './Article'
// import SigUp from './SigUp.vue'


Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      component: All,
      children: [
        {
          path: 'article/:id',
          // component: Article,
        },
      ]
    },
    {
      path: '/sign-up',
      // component: SigUp,
    },
    {
      path: '/create',
      // component: SigUp,
    },
    {
      path: '/login',
      // component: SigUp,
    },
  ]
})

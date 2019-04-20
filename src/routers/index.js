import Vue from 'vue'
import VueRouter from 'vue-router'
import All from './All.vue'
import Good from './Good.vue'
import Water from './Water.vue'
import AllArticle from './AllArticle.vue'

Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      component: All,
      children: [
        {
          path: 'all-article',
          component: AllArticle
        },
      ]
    },
    // {
    //   path: '/all',
    //   component: All,
    //   children: [
    //     {
    //       path: 'all-article',
    //       component: AllArticle
    //     },
    //   ]
    // },
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

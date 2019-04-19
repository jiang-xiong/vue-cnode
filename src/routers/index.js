import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './Foo.vue'
import Bar from './Bar.vue'


Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/foo',
      component: Foo,
    },
    {
      path: '/bar',
      component: Bar,
    },
  ],
})

import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'; //引入store


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

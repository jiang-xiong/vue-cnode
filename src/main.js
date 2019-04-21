import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'; //引入store

var APP_ID = '0VWHTWe000LRyjFqr181Rh49-9Nh9j0Va';
var APP_KEY = 'fpvs6pcEhVh8bPzkvxVORLLC';
var AV = require('leancloud-storage');
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  AV,
  render: h => h(App),
}).$mount('#app')

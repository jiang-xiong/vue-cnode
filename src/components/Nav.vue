<template >
  <div>
    <ul id="nav-list">
      <li>
        <router-link to='/'
                     @click.native='reload'
        >首页</router-link>
      </li>
      <li>
        <router-link to='/login'
        >登陆</router-link>
      </li>
      <li>
        <router-link to='/sign-up'
        >注册</router-link>
      </li>
      <li>
        <router-link to='/'
                     @click.native='logout'
        >登出</router-link>
      </li>
    </ul>
    <!-- <div class="view">
      <router-view></router-view>
    </div> -->
  </div>

</template>

<script>
import {log} from '../utils/tao.js'
import AV from 'leancloud-storage'

  export default {
    name: 'Nav',
    methods: {
      logout() {
        AV.User.logOut().then(function (e) {
          log('log out', e)
          alert('登出成功')
          window.location='http://localhost:8080/'
        }, function (error) {
          log('log out error' ,JSON.stringify(error));
        });
      },
      reload() {
        window.location='http://localhost:8080'

      }
    },
  }
</script>

<style scoped>
  ul li {
    display: inline;
    color: #cccccc;
    margin-right: 25px;
    font-size: 13px;
  }
</style>

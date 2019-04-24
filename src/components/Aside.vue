<template >
  <div class="aside">
    <div class="infomation">
      <div class="infomation-bar">
        <span>个人信息</span>
      </div>
      <div class="infomation-content">
        <span id="avatar"></span>
        <span id="username">{{username}}</span>
      </div>
    </div>
    <div class="cteateTopic">
      <router-link to='/create'
                   id="create"
                   @click.native='checkLogin'
      >发布话题</router-link>
      <!-- <button @click='logout'>登出</button> -->
    </div>
  </div>
</template>

<script>
import {log} from '../utils/tao.js'
import AV from 'leancloud-storage'

export default {
  name: 'Aside',
  // created: function () {
  //   var APP_ID = 'i4bhU8rykSDtrqbBJspGpW4f-9Nh9j0Va';
  //   var APP_KEY = 'EkljqcRpiVbyvd8SkrGOnT2N';
  //   AV.init({
  //     appId: APP_ID,
  //     appKey: APP_KEY
  //   });
  // },
  data: function () {
    return {
      username: AV.User.current().attributes.username,
    }
  },
  methods: {
    logout() {
      AV.User.logOut().then(function (e) {
        log('log out', e)
      }, function (error) {
        log('log out error' ,JSON.stringify(error));
      });
    },
    checkLogin() {
      if (AV.User.current()) {

      } else {
        window.location='http://localhost:8080/login'
      }
    },
  },
}
</script>

<style scoped>
  .aside {
    /* border: 1px solid black; */
    min-height: 200vh;
    min-width: 290px;
  }
  .infomation {
    margin-bottom: 15px;
    /* border: 1px solid red; */
  }
  .infomation-bar {
    background-color: #f6f6f6;
    padding-bottom: 10px;
    border-radius: 3px 3px 0 0;
    height: 37px;
    font-size: 13px;
  }
  .infomation-bar span {
    display: inline-block;
    margin-top: 10px;
    margin-left: 5px;
    color: #444;
  }
  .infomation-content {
    height: 140px;
    background-color: white;
    border-radius: 0 0 3px 3px;
    /* display: flex; */
  }
  #avatar {
    width: 48px;
    height: 48px;
    background: #f6f6f6;
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 3px;
  }
  #username {
    /* float: left; */
    /* text-align: middle; */
    /* margin-left: 10px;
    margin-top: 20px; */
    position: relative;
    left: 10px;
    bottom: 18px;
    color: #778087;
  }
  .cteateTopic {
    border-radius: 3px;
    height: 50px;
    background-color: white;
  }
  #create {
    background-color: #80bd01;
    display: inline-block;
    color: white;
    width: 84px;
    height: 34px;
    border-radius: 3px;
    text-align: center;
    padding-top: 8px;
    margin-left: 10px;
    margin-top: 8px;
    font-size: 14px;
  }
</style>

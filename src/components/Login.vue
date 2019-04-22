<template>
  <div class="">
    <div class="sign-up-bar">
      <span id="title">登陆</span>
    </div>
    <div class="sign-up-form">
      <div class="form">
        <div class="form-inner">
          <span>用户名</span>
          <input v-model='username'>
          <br>
          <br>
          <span>密码</span>
          <input v-model='password'>
          <br>
          <br>
          <br>
          <button id='button'
                  @click='clickLogin'
          >登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {log} from '../utils/tao.js'
import AV from 'leancloud-storage'


export default {
  data: function () {
    return {
      username: 'tao1',
      password: '123',
    }
  },
  created: function () {
    var APP_ID = 'i4bhU8rykSDtrqbBJspGpW4f-9Nh9j0Va';
    var APP_KEY = 'EkljqcRpiVbyvd8SkrGOnT2N';
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  },
  methods: {
    login (username, password) {
      AV.User.logIn(username, password).then(function (loginedUser) {
        log('loginedUser', loginedUser)
      }, function (error) {
        log('login error' ,JSON.stringify(error));
      });
    },
    clickLogin() {
      // log(this.username)
      // log(this.password)
      this.login(this.username, this.password)
    },

  }
}
</script>

<style scoped>
 .sign-up-bar {
   height: 42px;
   background-color: #f6f6f6;
   max-width: 778px;
   border-radius: 3px 3px 0 0;
   color: #999;
   font-size: 14px;

 }
 #title {
   display: inline-block;
   margin-left: 10px;
   margin-top: 10px;
 }
 .sign-up-form {
   height: 260px;
   background-color: white;
   max-width: 778px;

 }
 .form {
   /* border: 1px solid red; */
   width: 400px;
   display: block;
   margin: 0 auto;
   position: relative;
   right: 113px;
   top: 48px;
 }
 .form-inner {
   text-align: right;
   /* border: 1px solid red; */
 }
 .form-inner span {
  margin-right: 30px;
  font-size: 14px;
}
.form-inner input {
  background: hsla(0,0%,0%,0);
  border: 1px solid #ccc;
  height: 30px;
  padding: 4px 6px;
  font-size: 14px;
  color: #555;
  width: 270px;
  border-radius: 4px;
}
#button {
  margin-right: 217px;
  width: 52px;
  height: 34px;
  background-color: #08c;
  color: white;
  border-radius: 3px;
  border: 1px solid transparent;
}
</style>

<template >
  <div class="body clearfix">
    <div class="panel" v-show='isShowPanel'>
      <Panel/>
    </div>
    <div class="aside">
      <Aside/>
    </div>
    <div class="article" v-show='isShowArticle'>
      <Article/>
    </div>
    <div class="signup" v-show='isShowSignUp'>
      <SignUp/>
    </div>
    <div class="login" v-show='isShowLogin'>
      <Login/>
    </div>
  </div>
</template>

<script>
  import Panel from './Panel.vue'
  import Aside from './Aside.vue'
  import Article from './Article.vue'
  import SignUp from './SignUp.vue'
  import Login from './Login.vue'

  // import {mapGetters} from 'vuex'
  // import {mapActions} from 'vuex';

  export default {
    name: 'Body',
    components: {
      Panel,
      Aside,
      Article,
      SignUp,
      Login,
    },
    // computed: {...mapGetters([
    //   'gettersIsShowPanel',
    //   'gettersIsShowArticle',
    // ])},
    data: function () {
      return {
        isShowPanel: true,
        isShowArticle :false,
        isShowSignUp: false,
        isShowLogin: false,

      }
    },
    watch: {
      $route(to,from) {
        if (to.path === '/article') {
          this.clearShow()
          this.isShowArticle = true
        } else if (to.path === '/') {
          this.clearShow()
          this.isShowPanel = true
        } else if (to.path === '/sign-up') {
          this.clearShow()
          this.isShowSignUp = true
        } else if (to.path === '/login') {
          this.clearShow()
          this.isShowLogin = true
        }
      }
    },
    methods: {
      clearShow: function() {
        this.isShowPanel = false
        this.isShowArticle = false
        this.isShowSignUp = false
        this.isShowLogin = false

      },
    },
  }
</script>

<style scoped>
  .body {
    background-color: #e1e1e1;
    /* border: 1px solid red; */
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .panel {
    float: left;
    margin-top: 8px;
    /* margin-bottom: 15px; */
    margin-left: 29px;
  }
  .aside {
    float: right;
    margin-top: 8px;
    margin-bottom: 15px;
    margin-right: 30px;
  }
  .article {
    float: left;
    margin-top: 15px;
    /* margin-bottom: 15px; */
    margin-left: 58px;
  }
  .signup {
    /* float: left; */
    position: relative;
    /* margin-top: 15px; */
    /* margin-bottom: 15px; */
    /* margin-left: 58px; */
    left: 58px;
    top: 15px;
  }
  .login {
    /* float: left; */
    position: relative;
    /* margin-top: 15px; */
    /* margin-bottom: 15px; */
    /* margin-left: 58px; */
    left: 58px;
    top: 15px;
  }
</style>

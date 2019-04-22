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
    <div class="create-topic" v-show='isShowCreate'>
      <CreateTopic/>
    </div>
  </div>
</template>

<script>
  import Panel from './Panel.vue'
  import Aside from './Aside.vue'
  import Article from './Article.vue'
  import SignUp from './SignUp.vue'
  import Login from './Login.vue'
  import CreateTopic from './CreateTopic.vue'
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
      CreateTopic,
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
        isShowCreate: false,
      }
    },
    mounted: function () {
      // console.log('11')
      console.log(this.$route.path)
      if (this.$route.path === '/') {
        this.clearShow()
        this.isShowPanel = true
      } else if (this.$route.path.split('/')[1] === 'article') {
        this.clearShow()
        this.isShowArticle = true
      } else if (this.$route.path === '/sign-up') {
        this.clearShow()
        this.isShowSignUp = true
      } else if (this.$route.path === '/login') {
        this.clearShow()
        this.isShowLogin = true
      } else if (this.$route.path === '/create') {
        this.clearShow()
        this.isShowCreate = true
      }
    },
    watch: {
      $route() {
        // console.log(to.path.split('/')[1])
        // console.log(this.$route.path)
        if (this.$route.path === '/') {
          this.clearShow()
          this.isShowPanel = true
        } else if (this.$route.path.split('/')[1] === 'article') {
          this.clearShow()
          this.isShowArticle = true
        } else if (this.$route.path === '/sign-up') {
          this.clearShow()
          this.isShowSignUp = true
        } else if (this.$route.path === '/login') {
          this.clearShow()
          this.isShowLogin = true
        } else if (this.$route.path === '/create') {
          this.clearShow()
          this.isShowCreate = true
        }
      }
    },
    methods: {
      clearShow: function() {
        this.isShowPanel = false
        this.isShowArticle = false
        this.isShowSignUp = false
        this.isShowLogin = false
        this.isShowCreate = false
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
  .create-topic {
    /* float: left; */
    position: relative;
    /* margin-top: 15px; */
    /* margin-bottom: 15px; */
    /* margin-left: 58px; */
    left: 29px;
    top: 8px;
  }
</style>

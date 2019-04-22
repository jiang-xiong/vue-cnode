<template>
  <div>
    <div class="topics" v-for='item in titles'>
      <div class="topic">
        <span id="avatar"></span>
        <span id="replay">
          <span id="replay-left">100</span>
          <span id="replay-right">/100</span>
        </span>
        <span id="type">全部</span>
        <router-link :to="'article/'+item.id"
                     id="title"
        >{{item.title}}</router-link>
        <span id="time">3 小时前</span>
      </div>
      <!-- {{titles}} -->
    </div>
  </div>
</template>

<script>
import {log} from '../utils/tao.js'
import AV from 'leancloud-storage'

export default {
  data: function () {
    return {
      titles: []
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
  mounted: function () {
      var query = new AV.Query('Article');
      var currentUser = AV.User.current();
      var a = []
      if (currentUser !== null) {
        query.find().then(function (articles) {
          // log(articles)
          for (var i = 0; i < articles.length; i++) {
            var o = {
              title: '',
              id: '',
            }
            o.title = articles[i].attributes.title
            o.id = articles[i].id
            a.push(o)
            // log(o)
          }
          // log('a', a)
        }).catch(function(error) {
          // log(JSON.stringify(error));
        });
      } else {
        log('未登陆')
      }
      this.titles = a
  }
}
</script>

<style scoped>
  .topic {
    /* border: 1px solid red; */
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    background-color: white;
    position: relative;
  }
  #avatar {
    width: 30px;
    height: 30px;
    background: #f6f6f6;
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 3px;
  }
  #replay {
    margin-left: 6px;
    /* border: 1px solid red; */
    position: absolute;
    top: 13px;
  }
  #replay-left {
    color: #9e78c0;
    font-size: 14px;
  }
  #replay-right {
    font-size: 10px;
    color: #b4b4b4;
  }
  #type {
    background: #80bd01;
    margin-left: 6px;
    border-radius: 3px;
    color: white;
    position: absolute;
    left: 95px;
    top: 15px;
    font-size: 12px;
    padding: 2px 3px 2px 3px;
  }
  #title {
    border-radius: 3px;
    position: absolute;
    left: 144px;
    top: 13px;
    font-size: 16px;
  }

  #time {
    position: absolute;
    right: 10px;
    top: 20px;
    color: #778087;
    font-size: 11px;
  }
</style>

<template>
  <div class="">
    <!-- {{xxx}} -->
    <!-- {{array}} -->
    <div class="article">
      <div class="title">
        <span id="type">全部</span>
        <h2 id="h2">{{title}}</h2>
        <div class="note">
          发布于
        </div>
      </div>
      <div v-html='content' class="content">
        <!-- {{content}} -->
        <!-- <br>
        <br> -->
      </div>
      <div class="comment">
        <div class="comment-bar">
          回复
        </div>
        <div v-for="item in array">
          <div class="comments">
            <span id="avatar"></span>
            <span id="username">用户</span>
            <span id="comment">{{item}}</span>
          </div>
        </div>
      </div>
      <div class="comment-form-bar">
        添加回复
      </div>
      <div class="comment-form">
        <textarea v-model='comment'
        ></textarea>
        <button id='id-comment-button'
                v-on:click='addComment'
        >回复</button>
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
      comment:'',
      title: '',
      content: '',
      authorId: '',
      array:[]
    }
  },
  // created: function () {
  //   var APP_ID = 'i4bhU8rykSDtrqbBJspGpW4f-9Nh9j0Va';
  //   var APP_KEY = 'EkljqcRpiVbyvd8SkrGOnT2N';
  //   AV.init({
  //     appId: APP_ID,
  //     appKey: APP_KEY
  //   });
  //
  //
  // },
  mounted: function () {
    // log(this.$route.path.split('/')[2])
    var id = this.$route.path.split('/')[2]
    if (id) {
      this.appendValue(id)
    }
  },
  watch: {
    $route(to){
      // log(to.params.id)
      // log(this.$route.path.split('/')[2])
      if (to.params.id) {
        this.appendValue(to.params.id)
      }
    }
  },
  methods: {
    addComment() {
      // log('this.comment', this.comment)
      // log('this.xxx', this.array)
      this.array.push(this.comment)
      // log('this.thisComments2', this.array)

      var comments = AV.Object.createWithoutData('Article', this.$route.path.split('/')[2]);
      comments.set('comments', this.array);
      comments.save();
      this.comment = ''
    },
    appendValue: function(id) {
      var query = new AV.Query('Article');
      var currentUser = AV.User.current();
      var title = ''
      var content = ''
      var comments = []
        query.find().then((v) => {
          for (var i = 0; i < v.length; i++) {
            if (v[i].id === id) {
              // log('title' ,v[i].attributes.title)
              // log('content' ,v[i].attributes.content)
              // log('author id', v[i].attributes.owner.id)
              title = v[i].attributes.title
              content = v[i].attributes.content
              content = content.replace(/\n/g,'<br>')
              comments = v[i].attributes.comments
              // log('title' ,title)
              // log('content' ,content)
              log('comments' ,comments)
              this.title = title
              this.content = content
              this.array = comments
              break
            }
          }
        }).catch(function(error) {
          log(JSON.stringify(error));
        });
    },
  },
}

</script>

<style scoped>
  .article {
    position: relative;
    /* top: 15px; */
    /* left: 58px; */
    max-width: 778px;
    /* border: 1px solid red; */
    background-color: #e5e5e5;
  }
  .title {
    height: 102px;
    /* border: 1px solid black; */
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 3px 3px 0 0;
  }
  .content {
    /* border: 1px solid black; */
    background-color: white;
    margin-bottom: 15px;
    border-radius: 0 0 3px 3px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .comments {
    background-color: white;
    border-radius: 0 0 3px 3px;
    height: 80px;
    border-bottom: 1px solid #e5e5e5;
  }
  .comment-bar {
    height: 42px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 10px;
    padding-top: 8px;
    color: #444;
    font-size: 14px;
  }
  .comment-form-bar {
    height: 42px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 10px;
    padding-top: 8px;
    color: #444;
    font-size: 14px;
  }
  .comment-form {
    height: 273px;
    background-color: white;
    border-radius: 0 0 3px 3px;
  }
  .comment-form textarea {
    width: 777px;
    height: 243px;
    border: 1px solid transparent;
    outline:none;
    font-size: 15px;
  }
  #id-comment-button {
    width: 52px;
    height: 34px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    border-radius: 3px;
    background-color: #08c;
    color: white;
    border: 1px solid transparent;
  }
  .comment {
    margin-bottom: 15px;
  }
  #type {
    background: #80bd01;
    margin-left: 10px;
    position: relative;
    /* display: inline-block; */
    top: -1px;
    /* margin-top: px; */
    border-radius: 3px;
    color: white;
    font-size: 12px;
    padding: 2px 3px 2px 3px;
  }
  #h2 {
    display: inline-block;
    margin-top: 19px;
    margin-left: 7px;
  }
  .note {
    font-size: 12px;
    color: #838383;
    margin-top: 14px;
    margin-left: 10px;
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
  #username {
    color: #666;
    font-size: 12px;
    /* display: inline-block; */
    /* margin-top: 10px; */
    position: relative;
    bottom: 12px;
    margin-left: 10px;
  }
  #comment {
    /* margin-top: 10px; */
    position: relative;
    top: 15px;
    left: -8px;
  }
</style>

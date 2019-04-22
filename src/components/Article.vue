<template>
  <div class="">
    <div class="article">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="content">
        {{content}}
        <br>
        <br>
      </div>
      <div class="comment">
        <div class="comment-bar">
          回复
        </div>
        <div v-for='item in comments'>
          <div class="comments">{{item}}</div>
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
      comments: [
      ],
      title: '',
      content: '',
      authorId: '',
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
    log(this.$route.path.split('/')[2])
    var id = this.$route.path.split('/')[2]
    if (id) {
      log(111)
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
      this.comments.push(this.comment)
      var comment = AV.Object.createWithoutData('Article', this.$route.path.split('/')[2]);
      comment.set('comments', this.comments);
      comment.save();
      this.comment = ''
    },
    appendValue: function(id) {
      var query = new AV.Query('Article');
      var currentUser = AV.User.current();
      var title = ''
      var content = ''
      var comments = []
      if (currentUser !== null) {
        query.find().then((v) => {
          for (var i = 0; i < v.length; i++) {
            if (v[i].id === id) {
              // log('title' ,v[i].attributes.title)
              // log('content' ,v[i].attributes.content)
              // log('author id', v[i].attributes.owner.id)
              title = v[i].attributes.title
              content = v[i].attributes.content
              comments = v[i].attributes.comments
              // log('title' ,title)
              // log('content' ,content)
              this.title = title
              this.content = content
              this.comments = comments

              // log('this' ,this)
              break
            }
          }
        }).catch(function(error) {
          log(JSON.stringify(error));
        });
      } else {
        log('未登陆')
      }
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
  }
  .comment-form-bar {
    height: 42px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #e5e5e5;
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


  }
  #id-comment-button {
    width: 50px;
    height: 30px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    /* outline:none; */
  }
  .comment {
    margin-bottom: 15px;
  }
</style>

<template lang="html">
  <div class="create-topic">
    <div class="create-bar">
      <span id="create">发布</span>
    </div>
    <div class="create-content">
      <input v-model='title'>
      <textarea v-model='content'></textarea>
      <button @click='publish'>发布</button>
    </div>
  </div>
</template>

<script>
import {log} from '../utils/tao.js'
import AV from 'leancloud-storage'

export default {
  data: function () {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    writeToUser(title, content) {
      var Article = AV.Object.extend('Article');
      var currentUser = AV.User.current();
      var article = new Article();
      article.set('title', title);
      article.set('content', content);
      article.set('owner', AV.User.current());
      article.save().then(function() {
        log('成功写入信息')
      }, function(error) {
        log(JSON.stringify(error));
      });
    },
    publish() {
      // log(this.title)
      // log(this.content)
      this.writeToUser(this.title, this.content)
    },
  }
}
</script>

<style scoped>
  .create-topic {
    /* border: 1px solid red; */
    position: relative;
  }
  .create-bar {
    height: 42px;
    background-color: #f6f6f6;
    max-width: 778px;
    border-radius: 3px 3px 0 0;
    color: #999;
    font-size: 14px;
    position: relative;
  }
  .create-content {
    width: 778px;
    height: 670px;
    background-color: white;
    position: relative;
    border-radius: 0 0 3px 3px;
  }
  input {
    background: hsla(0,0%,0%,0);
    border: 1px solid #ccc;
    height: 30px;
    padding: 4px 6px;
    font-size: 14px;
    color: #555;
    width: 750px;
    border-radius: 4px;
    margin-left: 14px;
    margin-top: 15px;
  }
  textarea {
    background: hsla(0,0%,0%,0);
    border: 1px solid #ccc;
    height: 550px;
    padding: 4px 6px;
    font-size: 14px;
    color: #555;
    width: 750px;
    border-radius: 4px;
    margin-left: 14px;
    margin-top: 15px;
  }
  button {
    background-color: #08c;
    color: white;
    width: 52px;
    height: 34px;
    border-radius: 3px;
    text-align: center;
    padding-top: 3px;
    font-size: 14px;
    position: absolute;
    left: 14px;
    bottom: 10px;
    border: 1px solid transparent;
  }
  #create {
    position: absolute;
    /* margin-left: 10px; */
    left: 10px;
    top: 10px;
  }
</style>

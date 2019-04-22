<template>
  <div class="">
    <div class="article">
      <div class="title">
        <h1>标题</h1>
        <span>作者</span>
      </div>
      <div class="content">
        内容
        <br>
        <br>
      </div>
      <div class="comment">
        <div class="comment-bar">
          回复
        </div>
        <div v-for='item in comments'>
          <div class="comments">{{item.comment}}</div>
        </div>
      </div>
      <div class="comment-form-bar">
        添加回复
      </div>
      <div class="comment-form">
        <textarea v-model='text.comment'
        ></textarea>
        <button id='id-comment-button'
                v-on:click='addComment'
        >回复</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      text: {
        comment: '',
      },
      comments: [
        {
          comment: '1',
        },
        {
          comment: '2',
        }
      ]
    }
  },
  methods: {
    addComment() {
      console.log(this.text.comment)
      let obj = {}
      let newObj = Object.assign(obj, this.text)
      this.comments.push(newObj)
      this.text.comment = ''
    }
  }
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

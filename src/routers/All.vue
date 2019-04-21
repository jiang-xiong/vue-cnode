<template>
  <div>
    <div class="topics" v-show='isShowTopics'>
      <div class="topic">
        <span id="avatar"></span>
        <span id="replay">
          <span id="replay-left">100</span>
          <span id="replay-right">/100</span>
        </span>
        <span id="type">类型</span>
        <router-link to="article"
                     id="title"
                     @click.native='hideTopics'
        >标题</router-link>
        <span id="time">3 小时前</span>
      </div>
    </div>

    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isShowTopics: true,
    }
  },
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
    background: #80bd01;
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

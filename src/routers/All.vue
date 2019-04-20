<template>
  <div class="">
    <div class="topic">
      <span>头像</span>
      <span>评论数</span>
      <span>类型</span>
      <router-link to="all-article"
                   append
      >111</router-link>
    </div>
    <div class="topic">
      <span>头像</span>
      <span>评论数</span>
      <span>类型</span>
      <a href="#">标题</a>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>
  .topic {
    /* border: 1px solid red; */
    height: 50px;
    margin-bottom: 1px;
    background-color: white;
    border-radius: 2px;
  }
</style>

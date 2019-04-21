<template>
  <div>
    <div class="topics" v-show='isShowTopics'>
      <div class="topic">
        <router-link to="article"
                     @click.native='hideTopics'
        >标题 1</router-link>
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
    /* margin-bottom: 1px; */
    border-bottom: 1px solid #e5e5e5;
    background-color: white;
    /* border-radius: 3px; */
  }
</style>

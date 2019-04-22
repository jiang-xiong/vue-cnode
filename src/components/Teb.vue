<template >
  <div>
    <div class="bar clearfix">
      <div class="link">
        <router-link to="/">全部</router-link>
      </div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Teb',
}
</script>

<style scoped>
  a {
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 3px;
    display: inline-block;
    height: 24px;
    width: 37px;
    text-align: center;
    font-size: 14px;
    padding-top: 2px;
    color: white;
    background-color: #80bd01;
  }
  .active {

  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .bar {
    /* border: 1px solid red; */
    background-color: #f6f6f6;
    padding-bottom: 10px;
    border-radius: 3px 3px 0 0;

  }
  .link {
    float: left;
    margin-top: 8px;
  }
</style>

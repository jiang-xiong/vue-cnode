<template >
  <ul id="nav-list">
    <li v-for="item in titles">
      <a href="#">
        {{item.title}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Nav',
    data: function () {
      return {
        titles: [
          {
            title: '首页',
          },
          {
            title: '登陆',
          },
          {
            title: '注册',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  ul li {
    display: inline;
    color: #cccccc;
  }
</style>

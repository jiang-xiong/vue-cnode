<template >
  <div>
    <ul id="nav-list">
      <li>
        <router-link to='/'>首页</router-link>
      </li>
      <li>
        <router-link to='/login'
        >登陆</router-link>
      </li>
      <li>
        <router-link to='/sign-up'
        >注册</router-link>
      </li>
    </ul>
    <!-- <div class="view">
      <router-view></router-view>
    </div> -->
  </div>

</template>

<script>
  export default {
    name: 'Nav',
  }
</script>

<style scoped>
  ul li {
    display: inline;
    color: #cccccc;
    margin-right: 25px;
    font-size: 13px;
  }
</style>

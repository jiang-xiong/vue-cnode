<template >
  <div>
    <h1>nihao</h1>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Teb',
  }
</script>

<style scoped>

</style>

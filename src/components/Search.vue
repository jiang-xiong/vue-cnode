<template >
  <form id="search-form" action="" method="post">
    <input >
  </form>
</template>

<script>
  export default {
    name: 'Search',
  }
</script>

<style scoped>
  #search-form {
    display: inline-block;
  }
  input {
    border-radius: 15px;
    border: none;
    background: #888;
    height: 23px;
    width: 225px;
  }
  input:focus{
    outline: none;
  }
</style>

<template >
  <form id="search-form" action="" method="post">
    <input>
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
    border-radius: 2px;
    border: none;
    background: #888;
    height: 26px;
    width: 232px;
    color: #666;
    transition: all 0.3s;

  }
  input:focus{
    outline: none;
  }
  input:hover {
    background-color: white;
    transition: all 0.3s;
  }
</style>

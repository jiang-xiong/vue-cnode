<template >
  <div class="header">
    <span id="header-left">
      <Logo/>
      <span id="header-left-search">
        <Search/>
      </span>
    </span>
    <span id="header-right">
      <Nav/>
    </span>
  </div>
</template>

<script>
  import Logo from './Logo.vue'
  import Search from './Search.vue'
  import Nav from './Nav.vue'

  export default {
    name: 'Header',
    components: {
      Logo,
      Search,
      Nav,
    }
  }
</script>

<style scoped>
  .header {
    /* border: 1px solid red; */
    min-height: 54px;
    width: 100%;
    background: #444;
    display: flex;
    justify-content: space-between;
  }
  #header-left-search {
    margin-left: 12px;
  }
</style>

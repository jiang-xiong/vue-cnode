<template >
  <div class="header">
    <span id="header-left ">
      <span id="header-left-logo">
        <Logo/>
      </span>
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
    height: 50px;
    width: 100vw;
    background: #444;
  }
  #header-left-logo {
    position: relative;
    left: 59px;
    top: 8px;
  }
  #header-left-search {
    position: relative;
    top: 3px;
    left: 80px;
  }
  #header-right {
    position: relative;
    right: -995px;
    bottom: 22px;
  }

</style>

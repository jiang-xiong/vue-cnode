<template>
  <div id="app">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
  },
  
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  button {
    margin: 0;
    padding: 0;
    border: 1px solid lightgray;
    border-radius: 2px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol, li {
    list-style: none;
  }
  div[v-cloak] {
    display: none;
  }
  #app {
    overflow-x: hidden;
  }
</style>

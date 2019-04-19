<template >
  <div class="body clearfix">
    <Panel/>
    <Aside/>
  </div>
</template>

<script>
  import Panel from './Panel.vue'
  import Aside from './Aside.vue'


  export default {
    name: 'Body',
    components: {
      Panel,
      Aside,
    }
  }
</script>

<style scoped>
  .body {
    background-color: #e1e1e1;
    border: 1px solid red;
    position: relative;
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
</style>

<template >
  <div class="panel">
    <Teb/>
  </div>
</template>

<script>
  import Teb from './Teb.vue'

  export default {
    name: 'Panel',
    components: {
      Teb,
    }
  }
</script>

<style scoped>
  .panel {
    background: white;
    border-radius: 2px;
    box-shadow: 0px 0px 2px 1px rgba(235,226,235,1);
    min-height: 200vh;
    min-width: 778px;
    float: left;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 58px;
  }
</style>

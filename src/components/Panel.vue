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
    box-shadow: 0px 0px 2px 1px rgba(235,226,235,1);
    min-width: 778px;
    /* border: 1px solid black; */
  }
</style>

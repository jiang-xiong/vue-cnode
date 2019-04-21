<template >
  <div>
    <div class="bar clearfix">
      <div class="link">
        <router-link to="/"
                     v-bind:class="{ active: showAll }"
                     v-on:click.native="hightLight('showAll')"
        >全部</router-link>
        <router-link to="/good"
                     v-bind:class="{ active: showGood }"
                     v-on:click.native="hightLight('showGood')"
        >精华</router-link>
        <router-link to="/water"
                     v-bind:class="{ active: showWater }"
                     v-on:click.native="hightLight('showWater')"
        >灌水</router-link>
      </div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Teb',
    data: function () {
      return {
        showAll: true,
        showGood: false,
        showWater: false,
      }
    },
    methods: {
      clearActive: function () {
        this.showAll = false
        this.showGood = false
        this.showWater = false
      },
      hightLight: function (k) {
        this.clearActive()
        this[k] = !this[k]
      },
    },
    created: function () {
      if(this.$route.path === '/') {
        this.showAll = true
      } else if (this.$route.path === '/all') {
        this.showAll = true
      } else if (this.$route.path === '/good') {
        this.showGood = true
      } else if (this.$route.path === '/water') {
        this.showWater = true
      }
    },
    // computed: {...mapGetters(['gettersIsShowTeb'])}
  }
</script>

<style scoped>
  a {
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 3px;
    display: inline-block;
    height: 24px;
    width: 37px;
    text-align: center;
    font-size: 14px;
    padding-top: 2px;
    color: #80bd01;
  }
  .active {
    color: white;
    background-color: #80bd01;

  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .bar {
    /* border: 1px solid red; */
    background-color: #f6f6f6;
    padding-bottom: 10px;
    border-radius: 3px 3px 0 0;

  }
  .link {
    float: left;
    margin-top: 8px;
  }
</style>

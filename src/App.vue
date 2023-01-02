<template>
  <div id="app">
    <YunusHeader/>
    <router-view/>
  </div>
</template>

<script>


import YunusHeader from "./components/YunusHeader";

export default {
  name: 'App',
  components: {
    YunusHeader

  }
}
</script>

<style lang="scss">
@import "./style/home1.css";
@import "./style/swiper.css";

#app {
  color: #fff;
  font-size: 1rem;
}
</style>

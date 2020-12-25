<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    
    <MainTabBar />
  </div>
</template>

<script>
// import MainTabBar from "components/content/mainTabbar/MainTabbar.vue"
import MainTabBar from './components/content/mainTabbar/MainTabbar';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>

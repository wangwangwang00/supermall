<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item, i) in banner" :key="'banner' + i">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";
// import { Swipe, SwipeItem } from "vant";
export default {
  name: "home",
  components: {
    NavBar,
    // [Swipe.name]:Swipe,
    // [SwipeItem.name]:SwipeItem
    
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>
<style scoped>
.home {
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

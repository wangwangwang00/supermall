<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, i) in banners" :key="'banner' + i">
      <a :href="item.link" class="content">
        <img :src="item.image" @load="imageLoad"/>
      </a>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      isLoad:false,
    };
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperLoad');
        this.isLoad = true;
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .van-swipe__indicator--active {
  background-color: var(--color-tint);
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  .content {
    height: 100%;
    width: 100%;
    display: block;
  }
  img {
    width: 100%;
  }
}
.my-swipe {
  width: 100%;
  /* height: 213px; */
}
</style>

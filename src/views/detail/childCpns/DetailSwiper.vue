<template>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item, i) in topImages" :key="'banner' + i">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {};
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
  height: 300px;
  overflow: hidden;
}</style>
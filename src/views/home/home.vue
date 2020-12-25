<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabFixed"
      />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <HomeSwipe :banners="banners" @swiperLoad="swiperLoad"/>
      <HomeRecommend :recommends="recommends" />
      <HomeFeature />
      <TabControl
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"; //导航
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import {debounce} from 'common/utils'

import HomeSwipe from "./childComps/HomeSwiper"; //轮播图
import HomeRecommend from "./childComps/HomeRecommend"; //推荐模块
import HomeFeature from "./childComps/HomeFeature"; //本周流行

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,
    GoodsList,
    HomeSwipe,
    HomeRecommend,
    HomeFeature
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop:0,
      isTabFixed:false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //1.监听item中的图片是否加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200);
    this.$bus.$on("imageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh()
    });

    //2.获取tabcontrol的offsetTop
    // console.log(this.$refs.tabControl.$el.offsetTop)
     
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    swiperLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.tabOffsetTop)
    },

    // 获取商品列表
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // this.goods[type].list.concat(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },

    // tab切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    backClick() {
      console.log(this);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    contentScroll(position) {
      this.isShow = -position.y > 1000;
      //2.决定tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop - 10 ;

    },

    //加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
}
</style>
<style scoped></style>

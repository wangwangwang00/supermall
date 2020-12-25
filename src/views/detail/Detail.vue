<template>
  <div class="detail">
    <DetailNavBar/>
    <DetailSwiper :topImages="topImages" />
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shop"/>
  </div>
</template>
<script>
import DetailNavBar from './childCpns/DetailNavBar';
import DetailSwiper from './childCpns/DetailSwiper';
import DetailBaseInfo from './childCpns/DetailBaseInfo';
import DetailShopInfo from './childCpns/DetailShopInfo';

import {getDetail,Goods,Shop} from 'network/detail';
export default {
  name:'Detail',
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{
      },
      shop:{

      }
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo

  },
  created () {
    //1.保存传入的商品id
    this.iid = this.$route.query.iid;
    
    // 2.获取商品详情
    getDetail(this.iid).then(res => {
      const data = res.result;
      console.log(res)
      this.topImages = data.itemInfo.topImages;
      //商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 店铺信息
      this.shop = new Shop(data.shopInfo)
      console.log(this.goods)
    })
  }
}
</script>
<style lang="scss" scoped>

</style>

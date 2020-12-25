<template>
  <div class="goods-item" @click="goodsClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('imageLoad');
    },
    goodsClick(item){
      // console.log('跳转到详情页')
      this.$router.push({
        path:'/detail',
        query:{
          iid:this.goodsItem.iid
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price{
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect{
      position: relative;
    }
    .collect::before{
      content:'';
      position:absolute;
      left:-15px;
      top: -1px;
      height: 14px;
      width:14px;
      background: url("~assets/img/common/collect.svg") 0 0/14px 14px;

    }
  }
}
</style>

<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :key="item.title" :goodsItem="item"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default:[]
    }
  },
  components: {
    GoodsListItem
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>

<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.recommends{
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 15px solid #eee;
  .recommend-item{
    flex: 1;
    img{
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>


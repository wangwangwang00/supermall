<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
         :key="item" class="tab-control-item" 
         :class="{active:index === currentIndex}" 
         @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex:0,
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 15px;
  background: #fff;
  .tab-control-item {
    flex: 1;
    span{
      padding: 5px;
    }
  }
  .active{
    color: var(--color-high-text);
    span{
      border-bottom: 3px solid var(--color-tint);
    }
    

  }
}
</style>

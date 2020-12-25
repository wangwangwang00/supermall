<template>
  <div class="detail-navbar">
    <NavBar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="title-item"
          :class="{ active: currentIndex == index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评价", "详情"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.go(-1);
    } 
  }
};
</script>
<style lang="scss" scoped>
.detail-navbar {
  .back{
    margin-top: 12px;
  }
  .title {
    display: flex;
    .title-item {
      flex: 1;
    }
    .active {
      color: 0;
    }
  }
}
</style>

<template>
  <div class="tabBarItem" @click="itemClick">
    <!-- <div class="tab-bar-item">首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },

  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(
        { path: this.path },
      ).catch( () => {});
    }
  }
};
</script>
<style>
.tabBarItem {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tabBarItem img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>

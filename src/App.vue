<template>
  <div id="app">
    <transition name="fade" class="router" mode="out-in">
      <router-view />
    </transition>

    <tabber></tabber>
  </div>
</template>

<style lang="less">
// 路由切换动画
.fade-enter-active,
.fade-leave-active {
  transform: translateY(100%);
  transition: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
import tabber from "./components/common/tabber"; //底部导航
export default {
  components: {
    tabber
  }
};
</script>

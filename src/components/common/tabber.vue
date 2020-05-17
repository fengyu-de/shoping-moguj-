<template>
  <div>
    <div class="tabber">
      <router-link to="/home" tag="span" active-class="color">
        <i class="iconfont icon-home"></i>
        首页
      </router-link>
      <router-link to="/category" tag="span" active-class="color">
        <i class="iconfont icon-fenlei"></i>
        分类
      </router-link>
      <router-link to="/shopingCar" tag="span" active-class="color">
        <i class="iconfont icon-gouwuchekong"></i>
        购物车
      </router-link>
      <router-link to="/mine" tag="span" active-class="color">
        <i class="iconfont icon-shouye"></i>
        我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tabber {
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: #ccc;
  z-index: 99;
  bottom: 0px;
  // left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.color {
  color: #ff5777;
}
</style>

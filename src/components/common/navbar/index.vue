
<template>
  <!-- 顶部导航组件 
  因为要设置样式所以<slot></slot>要div包裹
  -->
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 50px;
  background-color: palevioletred;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px #f0f0f0;
  position: fixed;
  z-index: 99;
}
.left,
.right {
  width: 50px;
  background-color: aquamarine;
}
.center {
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: aliceblue;
}
</style>


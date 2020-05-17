<template>
  <!-- 推荐组件 -->
  <div>
    <h5>商品推荐</h5>
    <div class="box">
      <div v-for="(item,index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
          <span>{{item.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: Array
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  padding: 10px 5px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 2px #ccc;
  div {
    width: 80px;
    border-radius: 50%;
    display: flex;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 5px;
        color: black;
      }
    }
  }
}
h5 {
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 5px;
}
</style>

<template>
  <div>
    <div class="navbox">
      <div
        v-for="(item,index) in title"
        :key="index"
        :class="{'border':index==i}"
        @click="fun(index)"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: Array
  },
  data() {
    return {
      i: 0 //记录谁被选中的索引(修改类名)
    };
  },
  methods: {
    fun(e) {
      this.i = e;
    }
  }
};
</script>

<style lang="less" scoped>
.navbox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  div {
    padding: 10px 20px;
  }
}
// 下边框
.border {
  border-bottom: 3px solid pink;
}
</style>

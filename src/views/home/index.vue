<template>
  <div>
    <NavBar class="navbar">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </NavBar>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐 -->
    <!-- 将推荐的数据传递给子组件 -->
    <HomeNav :list="recommend"></HomeNav>
    <!-- 本周流行 -->
    <Feature></Feature>
    <!-- tabar切换 -->
    <TabControl :title="title" class="tab-control"></TabControl>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/index"; //顶部导航
import HomeNav from "../home/homenav/index"; //封装的推荐组件
import Feature from "../home/Feature/index"; //本周流行
import TabControl from "../../components/common/tabControl/index"; //导航标题
export default {
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      title: ["流行", "新歌", "精选"],
      goods: {
        //请求的类型
        page: 0,
        type: "pop"
      }
    };
  },
  components: {
    NavBar,
    HomeNav,
    Feature,
    TabControl
  },
  mounted() {
    this.getlist();
    this.getgoodslist();
  },
  methods: {
    async getlist() {
      let { data: res } = await this.$http.get("/home/multidata"); //获取首页的数据
      console.log(res);
      this.banner = res.data.banner.list;
      //   console.log(res.banner);
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
    },
    async getgoodslist() {
      let { data: res } = await this.$http.get(
        "https://act.mogujie.com/h5/mwp.darwin.multiget/3",
        {
          params: this.goods
        }
      );
      console.log("商品列表", res);
    }
  },
  beforeDestroy() {
    this.banner = null;
    this.dKeyword = null;
    this.keywords = null;
    this.recommend = null;
    console.log("首页视图死亡了");
  }
};
</script>

<style lang="less" scoped>
.my-swipe {
  // 解决fiexd定位解决的轮播图上移
  padding-top: 45px;
}
.tab-control {
  position: sticky; //当元素到达距离顶部55px的距离时，实现fiexd定位
  top: 55px;
}
</style>

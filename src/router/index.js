import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../views/home/index.vue'
// import category from '../views/category/index.vue'
// import shopingCar from '../views/shopcar/index.vue'
// import mine from '../views/mine/index.vue'
Vue.use(VueRouter)
// 路由懒加载
const home = () => import('../views/home/index.vue')
const category = () => import('../views/category/index.vue')
const shopingCar = () => import('../views/shopcar/index.vue')
const mine = () => import('../views/mine/index.vue')
const routes = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/shopingCar",
    component: shopingCar
  },
  {
    path: "/mine",
    component: mine
  }
]

const router = new VueRouter({
  routes
})

export default router

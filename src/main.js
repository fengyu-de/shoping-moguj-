import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/index.css"; //全局样式
import "./assets/css/icon.css"; //字体图标
import axios from 'axios' //导入axios
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //导入进度条样式
Vue.use(NProgress)
axios.defaults.baseURL = "http://123.207.32.32:8000"
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config)
  NProgress.start()
  return config;
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response)
  NProgress.done()
  return response;
})
Vue.prototype.$http = axios
import '../src/common/vant' //导入vant的按需加载
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

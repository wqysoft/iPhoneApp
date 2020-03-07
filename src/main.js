// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'


Vue.config.productionTip = false

//使用mint-ui引入全部的组件
import Mint from 'mint-ui';
Vue.use(Mint);
//引入相应的样式
import 'mint-ui/lib/style.css'
import '../static/css/global.css'
//配置公共的url
// Axios.defaults.baseURL='http://toutiao-ali.juheapi.com';
const axios = Axios.create({
  baseURL:'http://toutiao-ali.juheapi.com',
  headers:{ 'Authorization': 'APPCODE 4b78d6523aac430aa69bea6d61a421b4'}
  })
//配置axios
Vue.prototype.$axios=axios;

//注册全局的导航栏组件
import Navbar from "@/components/Common/Navbar"
Vue.component(Navbar.name,Navbar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

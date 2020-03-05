import Vue from 'vue'
import Router from 'vue-router'
//引入底部栏的局部组件
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import Search from '@/components/Search/Search'
import Cart from '@/components/Cart/Cart'
import NewsList from '@/components/News/Newslist'
import NewsDetail from '@/components/News/NewsDetail'
//使用vue-router插件vue.protyte.$router=Router;
Vue.use(Router)

export default new Router({
  //匹配的路由规则
  linkActiveClass:'link-active',//给所有的a默认加了一个样式
  routes: [
    {
      path: '/',
     redirect:'/home'//重定项目到首页
    },
    {
      path: '/home',
      name: 'home',
      component: Home//对应的home组件
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip//对应的vip组件
    },
    {
      path: '/search',
      name: 'search',
      component: Search//对应的search组件
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart//对应的cart组件
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path:'news/detail',
      name:'news.detail',
      component:NewsDetail//对应的新闻详情组件
    }
  
  ]
})

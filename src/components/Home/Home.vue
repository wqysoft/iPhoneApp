<template>
    <div id="home">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(banner,index) in banners" :key="index">
          <img :src="banner.src">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 九宫格 -->
      <div class="list">
        <ul>
          <li v-for="image in images" :key="image.id">
            <router-link :to="image.router">
              <img :src="image.src">
            </router-link>
            <p>{{image.title}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
var grids=[ 
        { id: 1, src: "../static/images/news.png", title: "新闻资讯",router:{name:"news.list"}},
        { id: 2, src: "../static/images/share.png", title: "图文分享" ,router:{name:"news.list"}},
        { id: 3, src: "../static/images/display.png", title: "商品展示",router:{name:"news.list"}},
        { id: 4, src: "../static/images/inform.png", title: "资讯" ,router:{name:"news.list"}},
        { id: 5, src: "../static/images/callback.png", title: "留言反馈" ,router:{name:"news.list"}},
        { id: 6, src: "../static/images/contact.png", title: "联系我们" ,router:{name:"news.list"}},
        { id: 7, src: "../static/images/news.png", title: "新闻资讯",router:{name:"news.list"}},
        { id: 8, src: "../static/images/share.png", title: "图文分享" ,router:{name:"news.list"}},
        { id: 9, src: "../static/images/display.png", title: "商品展示",router:{name:"news.list"}},
        { id: 10, src: "../static/images/inform.png", title: "资讯" ,router:{name:"news.list"}},
        { id: 11, src: "../static/images/callback.png", title: "留言反馈" ,router:{name:"news.list"}},
        { id: 12, src: "../static/images/contact.png", title: "联系我们" ,router:{name:"news.list"}}
      ]
var banners=[
        {id:1,src:"../static/images/foodO.jpg"},
        {id:2,src:"../static/images/foodT.jpg"},
        {id:3,src:"../static/images/foodTH.jpg"},
        {id:4,src:"../static/images/foodF.jpg"}
      ]
export default {
  name: "Home",
  data() {
    return {
      images: grids,
      banners:banners
    };
  }
};
</script>
 <style lang="css" scoped>
#home{
  margin-bottom: 65px;
  border: 1px solid red;
}
.swiper{
  height:250px;
  border: 1px solid red;
}
.swiper img {
  width: 100%;
  height: 250px;
}
.list{
  width:100%;
}
.list ul{
display: flex;
flex-wrap:wrap;
justify-content: center;
margin-top: 40px;
}
.list ul li{
  widows: 33%;
  height: 100px;
  text-align: center;
  font-size: 14px;
  padding:0 30px;
 list-style: none;

}
.list ul li a{
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.list ul li a img{
  width: 50px;
  height: 50px;
}

</style>


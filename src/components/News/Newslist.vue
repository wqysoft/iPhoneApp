<template>
  <div class="news">
    <Navbar title="新闻资讯"></Navbar>
    <div class="newsList">
    <ul>
     <li v-for="news in newsList" :key="news.id">
  <router-link :to='{name:"news.detail",query:{id:news.id}}'>
         <div class="new_img">
           <img :src="news.thumbnail_pic_s"/>
         </div>
           <p class="title">{{news.title}}</p>
           <div class="author_time">
           <span class="author_name">{{news.author_name}}</span>
           <span class="time">{{news.date}}</span></div>
       </router-link>
     </li>
    </ul>
  </div>
  </div>
</template>
<script>
var newsList;
export default {
  name:"newsList",
  data() {
    return {
      newsList:[]
    };
  },
created(){
   this.$axios.get('/toutiao/index', {
    params: {
      type: 'yule'
    },headers: {
            'Authorization': 'APPCODE 4b78d6523aac430aa69bea6d61a421b4'
        }
  })
  .then(res=>{
    this.newsList=res.data.result.data;
  
    })
   .catch(err=>{
      console.log("新闻列表异常",err)
   })
},

};
</script>
<style scoped>
.newsList ul{
  margin-top:40px;
}
.newsList ul li {
  margin-top:8px;
  height:90px;
  padding:0 8px;
  border-bottom: .5px solid #c6c6c6;
}
ul li .new_img{
  float: right;
  margin-top: -8px;
}
ul li .new_img img{
 width: 110px;
 height: 80px;
 margin: 10px 0 0 10px;
 border-radius: 8px;
}
.title{
  color:#000;
  height: 62px;
}
.author_name,.time{
  color:rgb(192, 192, 192);
  font-size: 12px;
}
</style>

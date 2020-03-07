<template>
  <div class="detail">
    <Navbar title="新闻详情"></Navbar>
      <iframe :src="url"></iframe>
  </div>
</template>
<script>
export default {
  name:'newsDetail',
  data(){
    return{url:''};
  },
  methods:{
    _getData(){
      this.url=decodeURIComponent(this.$route.query.url)
       }
  }, 
  mounted(){
    this._getData();
  }
  };
 







    //  <li v-for="news in newsList" :key="news.id">
  // <router-link :to='{name:"news.detail",query:{id:news.id}}'> 
// created(){this._getData()},
// methods:{
//  async _getData(){
//  let params={type: 'yule'}
//    const res=await this.$axios.get('/toutiao/index', {params})
//     this.newsDetail=res.data.result.data;
//  },
// }

</script>
<style scoped>
.detail{
  overflow: hidden;
  width: 375px;
}
iframe{
  width: 395px;
  height: 600px;
  border: none;
  
}
</style>

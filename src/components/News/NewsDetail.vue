<template>
  <div class="detail">
    <Navbar title="新闻详情"></Navbar>
       <router-link :to='{name:"news.detail",query:{id:news.id}}' :url="detail.url">
  </div>
</template>
<script>
export default {
  name:'newsDetail',
  data(){
    return{
      detail:[]
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
  this.detail=res.data.result.data;
    })
   .catch(err=>{
      console.log("新闻列表异常",err)
   })
},

};
</script>
<style scoped>

</style>

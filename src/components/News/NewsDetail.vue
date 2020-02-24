<template>
  <div class="detail">
     <div class="item">
    <Navbar title="新闻详情"></Navbar>
    <!-- Navbar -->
    <div class="detail">
      <router-link :to="detail.url"></router-link>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'NewsDetail',
  data(){
    return{
      detail:{}
    }
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
     this.detail=res.data;
    
   })
   .catch(err=>{
      console.log("新闻详情异常",err)
   })
},
}
</script>
<style scoped>

</style>

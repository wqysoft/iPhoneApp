<template>
<div id="position_ab">
<div class="header">
    <h4 class="back" @click="goBack">×</h4>
    <h4 class="desc_title">
        {{title}}
    </h4>
</div>
</div>
</template>
<script>
export default {
    name:"Navbar",
    props:["title"],
    data() {
      return {

      }
   },
   methods:{
       goBack(){
           this.$router.go(-1);
       }
   }
}
</script>
<style scoped>
#position_ab{
    height: 35px;
}
.header{
    width: 100%;
    height: 35px;
    line-height: 35px;
    top: 40px;
    position: absolute;
    background-color: #e0e0e0;
}
.header  h4{
    float: left;
    font-size: 14px;
}
.header h4.back{
    margin-left: 15px;
}
.header h4.desc_title{
    position: absolute;
    width: 200px;
    height: 40px;
    left: 50%;
    margin-left: -100px;
    text-align: center;
}
</style>

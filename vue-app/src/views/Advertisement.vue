<template>
  <div class="advertisement">
    <p>
      <span>广告时间:{{num}}</span>
    </p>
    <p></p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:3,
      datatime:null,
    }
  },
  created(){
      this.datatime = setInterval(()=>{
          if(this.num <=0){
            this.$router.push("/home");
          }else{
            this.num --;
          }
      },1000)
  },
  beforeDestroy(){
    clearInterval(this.datatime);
  }
  

};
</script>
<style lang="less">
.advertisement {
  width: 100%;
  height: 100%;
  font-size: 14px;
  p:nth-child(1) {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    padding: 10px;
    text-align: right;
  }
  p:nth-child(2) {
    background-image: url(../assets/images/gg/gg.jpg);
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-size: 100% 100%;
    width: 100%;
    z-index: -1;
  }
}
</style>

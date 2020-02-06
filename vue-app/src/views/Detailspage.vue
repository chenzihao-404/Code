<template>
  <div>
    <div class="detailspage">
      <div class="deta-header">
        <p class="headerbgc">
          <span
            class="iconfont icon-zuo1"
            style="color:#fff;margin-left:5px;display:block;transform:translateY(15px);"
            @click="forback"
          ></span>
          <img src="..\assets\images\detailspage\mailesong\logo.jpeg" alt />
        </p>
      </div>
      <div class="headercon">
        <p>
          <span>麦当劳乐送(广州奥体...)</span>
          <span class="iconfont icon-you"></span>
        </p>
        <p>
          <span>评价4.9</span>
          <span>月售114单</span>
          <span>商家配送约28分钟</span>
        </p>
        <p>
          <span class="manjian">满减</span>
          <span>49减9</span>
          <span>69减18</span>
          <span>89减25</span>
          <!-- <span style="margin-left:0;">
            3个优惠
            <span class="iconfont icon-xia" style="margin-left:0;"></span>
          </span> -->
        </p>
        <p>
          <span>公告:麦辣鸡腿汉堡脆辣带劲限时特惠9.9元</span>
        </p>
      </div>
      <div class="d-tabContent">
        <van-tabs v-model="active">
          <van-tab title="点餐">
            <Diancan></Diancan>
          </van-tab>
          <van-tab title="评价">
            <Pingjia></Pingjia>
          </van-tab>
          <van-tab title="商家">
            <Shangjia></Shangjia>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Diancan from "@/components/detailspage/Diancan.vue";
import Pingjia from "@/components/detailspage/Pingjia.vue";
import Shangjia from "@/components/detailspage/Shangjia.vue";
export default {
  data() {
    return {
        active:"",
    };
  },
  methods:{
      forback(){
          this.$router.push("/home");
      }
  },
  components: {
    Diancan,
    Pingjia,
    Shangjia
  }
};
</script>
<style lang="less">
body {
  background-color: #fff;
}
.detailspage {
  width: 100%;
  .deta-header {
    width: 100%;
    height: 70px;

    .headerbgc {
      width: 100%;
      // height: 100%;
      background-image: url("../assets/images/detailspage/mailesong/mailesongbgc.jpg");
      background-size: 100% 100%;
      img {
        width: 20%;
        height: 100%;
        margin: 0 auto;
        transform:translateY(15px);
      }
    }
  }
  .headercon {
    width: 100%;
    height: 80px;
    font-size: 10px;
    box-sizing: border-box;
    margin-top: 60px;
    text-align: center;
    p {
      margin-top: 5px;
    }
    p:nth-child(1) {
      width: 100%;
      font-size: 20px;
      text-align: center;
      margin-top: 40px;
      span:nth-child(1) {
        font-weight: bold;
      }
      span:nth-child(2) {
        font-size: 20px;
      }
    }
    p:nth-child(2) {
      width: 100%;
      text-align: center;
      span {
        margin-left: 5px;
        color: #666;
      }
    }
    p:nth-child(3) {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      color: #666;

      .manjian {
        background-color: red;
        color: #fff;
        font-weight: bold;
      }
      span:nth-child(5) {
        float: right;
      }
      span {
        margin-left: 5px;
      }
    }
    p:nth-child(4) {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      color: #666;
      span {
        margin-left: 5px;
      }
    }
  }
  .d-tabContent {
    margin-top: 30px;
  }
  //   .van-tabs__nav.van-tabs__nav--line{
  //   position: fixed;
  //   top:250px;
  //   width: 100%;
  //   height: 50px;;
  //   // background-color: red;
  //   z-index: 10000;
  // }

}
</style>

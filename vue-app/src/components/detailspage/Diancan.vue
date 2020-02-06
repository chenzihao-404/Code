<template>
  <div class="diancan" >
    <div class="headerbgc"></div>
    <p class="tuijian">商家推荐</p>
    <div class="goodstab">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in Dlists"
            :key="index"
          >
            <p class="img">
              <img :src="item.img" alt />
            </p>
            <p>{{ item.name }}</p>
            <p>
              <span>{{ item.yueshou }}</span>
              <span>{{ item.haoping }}</span>
            </p>
            <p>
              <span>{{ item.price }}</span>
              <!-- <span :class="item.icon"></span> -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="goodsSelect">
      <Dingdancom></Dingdancom>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Dingdancom from "./Dingcancom.vue";
export default {
  data() {
    return {
      Dlists: [
        {
          img: require("../../assets/images/detailspage/mailesong/kelezuhe.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/7.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/8.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/9.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/4.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/3.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: require("../../assets/images/detailspage/mailesong/1.png"),
          name: "9翅可乐组合",
          yueshou: "月售8",
          haoping: "好评率0%",
          price: "￥39",
          icon: "iconfont icon-tianjia"
        },
        {
          img: "",
          name: "",
          yueshou: "",
          haoping: "",
          price: "",
          icon: ""
        }
      ]
    };
  },
  components: {
    Dingdancom
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30
    });
  }
};
</script>
<style lang="less">
.diancan {
  width: 100%;
  padding-bottom: 45px;
  .headerbgc {
    width: 90%;
    height: 80px;
    margin: 5px auto;
    background-image: url("../../assets/images/detailspage/mailesong/mailesongbgc.jpg");
    background-size: 100% 100%;
    margin-bottom: 5px;
  }
  .tuijian {
    font-weight: bold;
    font-size: 13px;
    width: 90%;
    margin: 0 auto;
  }
  .goodstab {
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: left;
      background: #fff;
      width: 40% !important;
      margin-right: 0 !important;
      font-size: 12px;
      color: #666;
      p {
        box-sizing: border-box;
        padding: 0 10px;
      }
      p:nth-child(4) {
        font-size: 14px;
        color: crimson;
        .iconfont {
          color: blue;
          float: right;
          font-size: 20px;
        }
      }
      .img {
        width: 100%;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
 
  .goodsSelect{
      width: 100%;
      position: relative;
      bottom:0px;
      left: 0;
    //   top:525px;
    // margin-bottom: 45px;
    height: 500px;
    overflow-y:auto;
  }
}
</style>

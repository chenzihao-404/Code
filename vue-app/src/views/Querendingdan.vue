<template>
  <div>
    <div class="querendingdan">
      <div class="queren-header">
        <span @click="forback" class="iconfont icon-zuo1"></span>
        <span>确认订单</span>
      </div>
      <div class="dizhi">
        <p>订单配送至</p>
        <p @click="editaddress">
          {{$store.state.mailesong.addresscon.address}}
          <span class="iconfont icon-you1"></span>
        </p>
        <p>
          <span>{{$store.state.mailesong.addresscon.username}}</span>
          <span>{{$store.state.mailesong.addresscon.gender}}</span>
          <span>{{$store.state.mailesong.addresscon.phonenumber}}</span>
        </p>
      </div>
      <div class="Arrivaltime">
        <p class="time">
          <span>送达时间</span>
          <span>
            尽快送达(21:31送达)
            <b class="iconfont icon-you1"></b>
          </span>
        </p>
        <p class="pays">
          <span>支付方式</span>
          <span>在线支付</span>
        </p>
      </div>
      <div class="foodscon">
        <p class="shangjianame">麦当劳麦乐送</p>
        <ul class="foodname">
          <li v-for="(value,index) in $store.state.mailesong.foodLists" :key="index">
            <p>
              <img :src="value.img" alt />
            </p>
            <p>
              <span>{{value.name}}</span>
              <span style="font-size:12px;margin-top:5px;">{{value.kouwei}}</span>
            </p>
            <p>
              <span>×{{value.foodnumber}}</span>
            </p>
            <p>
              <span>
                <s>{{value.oldprice}}</s>
                ￥{{value.price*value.foodnumber}}
              </span>
            </p>
          </li>
        </ul>
        <p class="baozhuang">
          <span>包装</span>
          <span>餐盒费</span>
          <span>￥0</span>
        </p>
        <p class="peisong">
          <span>配送费</span>
          <span>
            <s>￥3.5</s> ￥0
          </span>
        </p>
        <p class="zhekou">
          <span>折扣商品不与满减津贴等优惠同享</span>
        </p>
        <p class="hongbao">
          <span>红包/抵用卷</span>
          <span class="iconfont icon-you1"></span>
        </p>
        <p class="price">
          <span>优惠说明</span>
          <span>
            小计￥
            <b style="font-size:20px;color">{{$store.state.mailesong.price}}</b>
          </span>
        </p>
      </div>
      <div class="pay">
        <p>￥{{$store.state.mailesong.price}}</p>
        <p>| 已优惠￥99.99</p>
        <p @click="topay">去支付</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      foodcarArr:[],
    };
  },
  methods: {
    forback() {
      this.$router.push("/detailspage");
      this.$store.state.mailesong.foodLists = [];
      // this.$store.state.mailesong.orderlists = [];
       this.$store.state.mailesong.foodcarArr = [];
    },

    topay() {
      if (!localStorage.login) {
        Toast("请登录后付款");
        this.$router.push("/login");
        this.$store.state.mailesong.loginrouter = "/querendingdan";

      } else {
        this.$router.push("/dingdan");
     
      this.$store.state.mailesong.orderlists.push({
        price: this.$store.state.mailesong.price,
        text: this.$store.state.mailesong.foodcarArr.length,
        content: this.$store.state.mailesong.foodcarArr,
        address: this.$store.state.mailesong.addresscon.address,
        username: this.$store.state.mailesong.addresscon.username,
        phonenumber: this.$store.state.mailesong.addresscon.phonenumber,
        gender: this.$store.state.mailesong.addresscon.gender,
      });
        Toast.success("支付成功");
        this.$store.state.mailesong.foodcarArr = [];
        this.$store.state.mailesong.price = 0;
           this.$store.state.dingdanflag = false;
        //确认支付把 购物车 和 确认订单信息清空
        this.$store.state.mailesong.foodcarcon = [];
        this.$store.state.mailesong.foodLists = [];
        this.$store.state.mailesong.number = 0;
        this.$store.state.mailesong.numflag = false;
        this.$store.state.mailesong.payflag = false;
        this.$store.state.mailesong.classflag = false;
        this.$store.state.mailesong.showprice = false;


      }
    },
    editaddress() {
      this.$router.push("/address");
      this.$store.state.mailesong.currentrouter = "/querendingdan";
    }
  }
};
</script>

<style lang="less">
.querendingdan {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  margin-top: 50px;
  padding-bottom: 40px;
  //   background-image: Linear-gradient(to top,#008dff,#fff);
  .queren-header {
    width: 100%;
    height: 50px;
    background-color: #008dff;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;

    span:nth-child(1) {
      float: left;
      color: #fff;
      line-height: 50px;
      margin-left: 5px;
    }
    span:nth-child(2) {
      font-size: 17px;
      color: #fff;
      font-weight: bold;
      line-height: 50px;
      margin-left: -5px;
    }
  }
  .dizhi {
    width: 100%;
    height: 100px;
    font-size: 16px;
    color: #fff;
    background-color: #008dff;
    box-sizing: border-box;
    padding: 15px 15px;
    p {
      margin-bottom: 10px;
    }
    p:nth-child(1) {
      color: #ceedff;
      font-size: 14px;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-weight: bold;
    }
    p:nth-child(3) {
      font-size: 13px;
    }
  }
  .Arrivaltime {
    width: 100%;
    height: 120px;
    font-size: 16px;
    background-color: #008dff;
    box-sizing: border-box;
    padding-top: 5px;
    // line-height: 60px;
    p {
      width: 95%;
      height: 45%;
      background-color: #fff;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .time {
      padding: 0 5px;
      span {
        line-height: 50px;
      }
      span:nth-child(2) {
        color: #2c9aff;
        float: right;
        font-size: 14px;
      }
    }
    .pays {
      padding: 0 5px;
      border-top: 1px solid #f2f2f2;

      span {
        line-height: 50px;
      }
      span:nth-child(2) {
        color: #2c9aff;
        float: right;
        font-size: 15px;
      }
    }
  }
  .foodscon {
    width: 100%;
    font-size: 14px;
    background-color: #fff;
    .shangjianame {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      font-size: 16px;
      font-weight: bold;
      line-height: 50px;
    }
    .foodname {
      width: 90%;
      margin: 0 auto;

      li {
        width: 100%;
        height: 50px;
        font-size: 17px;
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        p {
          height: 100%;
        }
        p:nth-child(1) {
          flex: 2;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p:nth-child(2) {
          font-size: 14px;
          flex: 6;
          box-sizing: border-box;
          padding-left: 5px;
          padding-top: 5px;
          span {
            display: block;
          }
        }
        p:nth-child(3) {
          flex: 1;
          line-height: 50px;
          font-size: 13px;
        }
        p:nth-child(4) {
          flex: 4;
          line-height: 50px;
          color: red;
          text-align: right;
          s {
            margin-left: 5px;
            color: #ccc;
            font-size: 12px;
          }
        }
      }
    }
    .baozhuang {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2ff;

      line-height: 50px;
      span:nth-child(1) {
        font-size: 12px;
        color: #8395ae;
        background-color: #f0f3f6;
        margin: 5px;
      }
      span:nth-child(3) {
        float: right;
        margin-right: 15px;
        font-weight: 500;
      }
    }
    .peisong {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      border-bottom: 1px solid #f2f2ff;

      span:nth-child(1) {
        margin: 5px;
      }
      span:nth-child(2) {
        float: right;
        margin-right: 15px;
        s {
          color: #ccc;
          font-size: 12px;
        }
      }
    }
    .zhekou {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      color: #ccc;
      border-bottom: 1px solid #f2f2ff;
    }
    .hongbao {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      border-bottom: 1px solid #f2f2f2;
      span:nth-child(1) {
        margin: 5px;
      }
      span:nth-child(2) {
        float: right;
        color: #ccc;
      }
    }
    .price {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      border-bottom: 1px solid #f2f2f2;

      span:nth-child(1) {
        margin: 5px;
        color: #ccc;
      }
      span:nth-child(2) {
        float: right;
      }
    }
  }
  .pay {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #3c3c3c;
    font-size: 16px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    p:nth-child(1) {
      flex: 1;
      color: #fff;
      box-sizing: border-box;
      padding-left: 5px;
    }
    p:nth-child(2) {
      flex: 3;
      text-align: left;
      font-size: 13px;
      color: #ccc;
      box-sizing: border-box;
      padding-left: 5px;
    }
    p:nth-child(3) {
      flex: 1;
      background-color: #00e067;
      text-align: center;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
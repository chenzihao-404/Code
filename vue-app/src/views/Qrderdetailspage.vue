<template>
  <div class="orderdetailspage">
    <div class="header">
      <span class="iconfont icon-zuo1" @click="forback"></span>
      <span>订单详情</span>
      <span class="iconfont icon-kefu"></span>
    </div>
    <div class="more">
      <p>订单已送达</p>
      <p>感谢您对饿了么的信任,期待再次光临</p>
      <p>
        <span>再来一单</span>
      </p>
    </div>
    <div class="content">
      <p class="img-name">
        <span>
          <img src="..\assets\images\detailspage\mailesong\logo.jpeg" alt />
        </span>
        <span>麦当劳麦乐送</span>
        <span class="iconfont icon-you1"></span>
      </p>
      <ul>
        <li v-for="(value,index) in $store.state.mailesong.orderdetailspage.content" :key="index">
          <span>
            <img :src="value.foodimg" alt />
          </span>
          <span>{{value.foodname}}</span>
          <span>×{{value.foodnumber}}</span>
          <span>￥{{value.foodprice*value.foodnumber}}</span>
        </li>
      </ul>
      <p class="canhe">
        <span>餐盒费</span>
        <span>×1</span>
        <span>￥0</span>
      </p>
      <p class="peisong">
        <span>配送费</span>
        <span></span>
        <span>￥0</span>
      </p>
      <p class="lianxi">
        <span>
          <b class="iconfont icon-dianhuaguhua"></b> 联系商家
        </span>
        <span>
          实付
          <b>￥{{$store.state.mailesong.orderdetailspage.price}}</b>
        </span>
      </p>
    </div>
    <div class="peisongcontent">
      <p>配送信息</p>
      <p>送达时间:尽快送达</p>
      <p>
        <span>送货地址:</span>
        <span>
          <span>{{$store.state.mailesong.orderdetailspage.username}}({{$store.state.mailesong.orderdetailspage.gender}})</span>
          <span>{{$store.state.mailesong.orderdetailspage.phonenumber}}</span>
          <span>{{$store.state.mailesong.orderdetailspage.address}}</span>
        </span>
      </p>
      <p>配送方式:商家配送</p>
      <p>配送骑手:陈彦祖</p>
    </div>
    <div class="ordercontent">
      <p>订单信息</p>
      <p>订单号:3053995542316546542</p>
      <p>支付方式:在线支付</p>
      <p>
        <span>下单时间:</span>
        <span>{{$store.state.mailesong.orderdetailspage.time}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    forback() {
      this.$router.push("/dingdan");
    }
  }
};
</script>
<style lang="less">
.orderdetailspage {
  width: 100%;
  background-color: #f2f2f2;
  font-size: 16px;
  .header {
    width: 100%;
    height: 45px;
    background-color: #00a4ff;
    display: flex;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    span:nth-child(1) {
      flex: 1;
    }
    span:nth-child(2) {
      flex: 3;
      font-size: 17px;
      font-weight: bold;
    }
    span:nth-child(3) {
      flex: 1;
      font-size: 23px;
    }
  }
  .more {
    width: 95%;
    margin: 10px auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px;
    p:nth-child(1) {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 25px;
      border-bottom: 2px solid #ccc;
    }
    p:nth-child(2) {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    p:nth-child(3) {
      width: 100%;
      height: 40px;
      span {
        display: block;
        color: #00a1ff;
        width: 70px;
        height: 30px;
        border: 1px solid #00a1ff;
        border-radius: 3px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .content {
    width: 95%;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 15px;
    background-color: #fff;
    color: #666;
    font-size: 15px;
    .img-name {
      width: 100%;
      height: 40px;
      display: flex;
      line-height: 40px;
      margin-bottom: 10px;
      span:nth-child(1) {
        flex: 1;
        box-sizing: border-box;
        padding-right: 5px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      span:nth-child(2) {
        flex: 5;
        font-size: 14px;
      }
      span:nth-child(3) {
        flex: 1;
        text-align: center;
      }
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: flex;
        border-bottom: 1px solid #f2f2f2;
    
        span:nth-child(1) {
          flex: 1;
          img{
              margin-top: 2.5px;
              width: 100%;
              height: 90%;
          }
        }
        span:nth-child(2) {
          flex: 5;
          font-size: 14px;
          box-sizing: border-box;
          padding-left: 5px;
        }
        span:nth-child(3) {
          flex: 1;
          text-align: center;
        }
         span:nth-child(4) {
          flex: 1;
          text-align: center;
        }
      }
    }
    .canhe {
      width: 100%;
      height: 50px;
      display: flex;
      line-height: 50px;

      span:nth-child(1) {
        flex: 6;
      }
      span:nth-child(2) {
        flex: 1;
        text-align: center;
      }
      span:nth-child(3) {
        flex: 1;
        text-align: center;
      }
    }
    .peisong {
      width: 100%;
      height: 50px;
      display: flex;
      line-height: 50px;
      span:nth-child(1) {
        flex: 6;
      }
      span:nth-child(2) {
        flex: 1;
        text-align: center;
      }
      span:nth-child(3) {
        flex: 1;
        text-align: center;
      }
    }
    .lianxi {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      span:nth-child(1) {
        flex: 1;
        text-align: left;
        font-size: 14px;
        color: #00a4ff;
        b {
          font-size: 20px;
        }
      }
      span:nth-child(2) {
        flex: 1;
        text-align: right;
        b {
          font-size: 17px;
          color: black;
        }
      }
    }
  }

  .peisongcontent {
    width: 95%;
    margin: 10px auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px;
    font-size: 15px;
    color: #666;
    p:nth-child(1) {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    p:nth-child(2) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
    p:nth-child(3) {
      width: 100%;
      height: 80px;
      display: flex;
      font-size: 14px;
      span:nth-child(1) {
        flex: 1;
      }
      span:nth-child(2) {
        flex: 4;
        span {
          display: block;
          margin-bottom: 5px;
        }
      }
    }

    p:nth-child(4) {
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }
    p:nth-child(5) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      font-size: 14px;
    }
  }
  .ordercontent {
    width: 95%;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 15px;
    background-color: #fff;
    p:nth-child(1) {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    p:nth-child(2) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #666;
    }
    p:nth-child(3) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #666;
    }
    p:nth-child(4) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #666;
      span {
        margin-right: 5px;
      }
    }
  }
}
</style>
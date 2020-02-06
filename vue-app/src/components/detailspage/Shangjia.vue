<template>
  <div class="business">
    <div class="business-header">
      <p>配送信息</p>
      <p>由商家配送提供配送,约28分钟送达,距离11.3km</p>
      <p>配送费￥9</p>
    </div>
    <div class="business-img">
      <p class="text">商家实景</p>
      <div class="img">
        <p>
          <img src="@/assets/images/detailspage/mailesong/shijing1.jpeg" alt />
          <span>大堂(1张)</span>
        </p>
        <p>
          <img src="@/assets/images/detailspage/mailesong/shijing2.jpeg" alt />
          <span>门面(1张)</span>
        </p>
      </div>
    </div>
    <div class="infor">
      <p>商家信息</p>
      <p>暂无简介</p>
      <p>
        <span>品类</span>
        <span>汉堡薯条,炸鸡炸串</span>
      </p>
      <p>
        <span>商家电话</span>
        <span>
          <span class="iconfont icon-dianhuaguhua"></span>联系商家
        </span>
      </p>
      <p>
        <span>地址</span>
        <span>广州市天河区奥体南路12号优邦-奥体旗舰店五期首层自编-189号</span>
      </p>
      <p>
        <span>营业时间</span>
        <span>10:30-22:00</span>
      </p>
    </div>
    <div class="zizhi">营业资质</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.business {
  width: 100%;
  background-color: #f2f2f2;
  font-size: 16px;
  .business-header {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-sizing: border-box;
    padding-left: 20px;
    p:nth-child(1) {
      width: 100%;
      height: 40px;
      font-weight: bold;
      line-height: 40px;
    }
    p:nth-child(2) {
      width: 100%;
      height: 20px;
      font-size: 13px;
      color: #666;
    }
    p:nth-child(3) {
      width: 100%;
      height: 20px;
      font-size: 13px;
      color: #666;
    }
  }
  .business-img {
    width: 100%;
    height: 140px;
    margin-top: 10px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    .text {
      width: 100%;
      height: 30px;
      font-weight: bold;
    }
    div {
      width: 100%;
      height: 80px;
      p {
        width: 80px;
        height: 100%;
        display: inline-block;
        margin-right: 8px;
        img {
          width: 80px;
          height: 80px;
          margin-right: 8px;
        }
        span {
          display: block;
          width: 100%;
          height: 15px;
          font-size: 13px;
          color: #fff;
          background-color: black;
          opacity: 0.7;
          text-align: center;
          line-height: 15px;
          margin-top: -15px;
        }
      }
    }
  }
  .infor {
    width: 100%;
    height: 250px;
    background-color: #fff;
    margin-top: 10px;
    padding: 20px;
    box-sizing: border-box;
    p:nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 13px;
      color: #666;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
    }
    p:nth-child(3) {
      font-size: 13px;
      color: #666;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
      span:nth-child(1) {
        color: black;
        font-weight: bold;
      }
      span:nth-child(2) {
        float: right;
      }
    }
    p:nth-child(4) {
      font-size: 13px;
      color: #666;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
      span:nth-child(1) {
        color: black;
        font-weight: bold;
      }
      span:nth-child(2) {
        float: right;
        color: #00a6ff;
        span {
          color: #00a6ff;
        }
      }
    }
    p:nth-child(5) {
      font-size: 13px;
      color: #666;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      span:nth-child(1) {
        flex: 1;
        color: black;
        font-weight: bold;
      }
      span:nth-child(2) {
        flex: 3;
        float: right;
      }
    }
    p:nth-child(6) {
      font-size: 13px;
      color: #666;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
      span:nth-child(1) {
        color: black;
        font-weight: bold;
      }
      span:nth-child(2) {
        float: right;
      }
    }
  }
  .zizhi {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    margin:10px 0;
    padding-left: 20px;
  }
}
</style>



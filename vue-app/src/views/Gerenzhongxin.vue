<template>
  <div>
    <!--个人中心 -->
    <!-- header -->
    <div class="geren-header">
      <!-- <a href="#"> -->
      <ul>
        <li class="logo">
          <p>
            <!-- <span class="iconfont icon-changyonglogo40"></span> -->
            <img  class="header-img" :src="info.img" alt="">
          </p>
        </li>
        <li class="denglu">
          <h2 style="font-size:16px;margin:5px 0;">{{info.name}}</h2>
          <p>
            <span v-if="textshow" class="iconfont icon-shouji">登录后享受更多特权</span>
            <span v-else-if="!textshow">您是尊贵的vip,享受多种优厚特权</span>
          </p>
        </li>
        <li class="you">
          <span class="iconfont icon-you2" is-link @click="showPopup"></span>
        </li>
      </ul>
      <!-- </a> -->
    </div>

    <!-- body -->
    <!-- 红包-金币 -->
    <div class="hongbao-jinbi">
      <ul>
        <a href="#">
          <li>
            <p class="icon-box icon-box1">
              <span class="iconfont icon-iconfontredpacket"></span>
            </p>
            <p>红包</p>
          </li>
        </a>
        <a href="#">
          <li>
            <p class="icon-box icon-box2">
              <span class="iconfont icon-jinbi"></span>
            </p>
            <p>金币</p>
          </li>
        </a>
      </ul>
    </div>

    <!-- li -->
    <div class="geren-content">
      <ul>
        <a href="#">
          <li class="active">
            <span class="iconfont icon-dizhi"></span>
            <span>我的地址</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
        <a href="#">
          <li>
            <span class="iconfont icon-icon-test"></span>
            <span>金币商城</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
        <a href="#">
          <li class="active">
            <span class="iconfont icon-liwu"></span>
            <span>分享拿20元现金</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
        <a href="#">
          <li>
            <span class="iconfont icon-kefu"></span>
            <span>我的客服</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
        <a href="#">
          <li>
            <span class="iconfont icon-changyonglogo40"></span>
            <span>关于我们</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
        <a href="#">
          <li>
            <span class="iconfont icon-guizewendang"></span>
            <span>规则中心</span>
            <span class="iconfont icon-you1"></span>
          </li>
        </a>
      </ul>
    </div>

    <div class="yinsi">
      <a href="#">隐私政策</a>
    </div>
      <van-popup
  v-model="show"
  position="bottom"
  :style="{ height: '20%' }"
>
    
    <div class="login-out" v-if="loginflag" @click="login">登录</div>
    <div class="login-out" v-else-if="!loginflag" @click="out">退出登录</div>
</van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{},
       show: false,
       loginflag:false,
       textshow:false,

    };
  },
  methods: {
      showPopup() {
      this.show = true;
    },
    out(){
      localStorage.removeItem("login")
      this.textshow = true;
      this.loginflag = true;
      this.info = {};
    },
    login(){
        this.$router.push("/login");
        this.$store.state.mailesong.loginrouter = "/gerenzhongxin";
        
    }
  },
  created(){
      if(!localStorage.login){
        this.$router.push("/login");
      }else{
        this.$axios.get("/getdata",{
          params:{
            token:localStorage.login
          }
        }).then((req)=>{
          this.info = req.data.result;
        })
      }
  }
};
</script>
<style lang="less">
.geren-header {
  width: 100%;
  height: 100px;
  // border: 1px solid black;
  background-color: #008fff;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    color: #fff;
    li {
      padding-top: 20px;
      padding-left: 10px;
    }
    li:nth-child(1) {
      flex: 1;
      height: 100%;
      text-align: center;
      p {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: lightblue;
        line-height: 60px;
        border-radius: 50%;
        // span {
        //   font-size: 60px;
        // }
        .header-img{
          height: 100%;
          width: 100%;
        border-radius: 50%;

        }
      }
    }
    li:nth-child(2) {
      flex: 3;
      height: 100%;
      span {
        font-size: 10px;
      }
    }
    li:nth-child(3) {
      flex: 0.5;
      height: 100%;
      text-align: center;

      line-height: 60px;
      color: #fff;
    }
  }
}

.hongbao-jinbi {
  width: 100%;
  height: 80px;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    a {
      width: 100%;
      height: 100%;

      li {
        width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        padding-top: 15px;
        background-color: #fff;

        p {
          margin-top: 3px;
          font-size: 13px;
        }
        .icon-box {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          line-height: 30px;
          color: #fff;
        }
        .icon-box1 {
          background-color: lightcoral;
          margin: 0 auto;
        }
        .icon-box2 {
          background-color: lightgreen;
          margin: 0 auto;
        }
      }
      li:nth-child(1) {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.geren-content {
  widows: 100%;
  height: 250px;
  // border: 1px solid black;
  margin-top: 10px;
  ul {
    width: 100%;
    height: 100%;
    a {
      .active {
        margin-bottom: 10px;
      }
      li {
        width: 100%;
        height: 15%;
        background-color: #fff;
        display: flex;
        font-size: 13px;
        line-height: 37.5px;
        .icon-dizhi {
          color: lightblue;
          font-size: 25px;
        }
        .icon-icon-test {
          color: lightgreen;
          font-size: 20px;
        }
        .icon-liwu {
          color: lightsalmon;
          font-size: 20px;
        }
        .icon-kefu {
          color: lightskyblue;
          font-size: 20px;
        }
        .icon-changyonglogo40 {
          color: lightskyblue;
          font-size: 40px;
          margin-left: -10px;
        }
        .icon-guizewendang {
          color: lightskyblue;
          font-size: 20px;
        }

        span:nth-child(1) {
          flex: 0.3;
          height: 100%;
          padding-left: 10px;
        }
        span:nth-child(2) {
          flex: 3;
          height: 100%;
        }
        span:nth-child(3) {
          flex: 0.5;
          height: 100%;
          color: #ccc;
        }
      }
    }
  }
}

.yinsi {
  width: 100%;
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  a {
    color: lightskyblue;
  }
}

.login-out{
  width: 100px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #008FFF;
  margin: 50px auto;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color:#008FFF;
}
</style>

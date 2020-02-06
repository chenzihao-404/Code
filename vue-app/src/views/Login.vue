<template>
  <div class="login">
    <p class="iconfont"><span @click="forback" class="iconfont icon-zuo1"></span></p>
    <p class="login-img">
      <img src="../assets/images/login/logo.png" alt />
    </p>
    <p class="login-phoneNumber yz-input">
      <input type="text" v-model="phonenumber" placeholder="请输入账号" />
      <!-- <span class="login-yzm"
      >获取验证码</span-->
    </p>
    <p class="login-yz yz-input">
      <input type="password" v-model="yznumber" placeholder="请输入密码" />
    </p>
    <p class="login-xieyi">
      新用户登录即自动注册，并表示同意
      <a href="#">《用户服务协议》</a>和
      <a href="#">《隐私权政策》</a>
    </p>
    <p class="login-btn" @click="loginclick">登录</p>
    <p class="login-btn" @click="registerclick">注册</p>
    <p class="login-about">
      <a href="#">关于我们</a>
    </p>

  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      phonenumber:null,
      yznumber:null
    };
  },
  methods: {
    loginclick() {
      this.$axios
        .get("/login", {
          params: {
            username: this.phonenumber,
            password: this.yznumber
          }
        })
        .then(response => {
          // console.log(response);
          // console.log(this.phonenumber,this.yznumber)
          if (response.data.code == 200) {
             // 1.把token存储cookie或localStorage
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push(this.$store.state.mailesong.loginrouter);
          } else {
            Toast("账号或密码错误");
          }
        })
      
    },
    registerclick(){
      this.$router.push("/register");
    },
    forback(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
.login {
  width: 100%;
  // padding-top: 30px;
  .iconfont{
    width: 100%;
    height: 30px;
    color: #008CF0;
    line-height:30px;
    box-sizing: border-box;
    padding-left: 5px;
    padding-top: 5px;
  }
  .login-img {
    width: 80%;
    margin: 0 auto;
    img {
      width: 50%;
      height: 25%;
      margin: 0 auto;
    }
  }

  .yz-input {
    width: 90%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    margin: 10px auto;
    input {
      outline: none;
      border: none;
      background-color: transparent;
      height: 100%;
      padding-left: 5px;
      flex: 3;
      font-size: 13px;
    }
    .login-yzm {
      display: block;
      flex: 2;
      color: #ccc;
      text-align: center;
      line-height: 45px;
      font-size: 13px;
    }
  }
  .login-xieyi {
    width: 90%;
    margin: 0 auto;
    color: #999;
    font-size: 13px;
    a {
      color: #2395ff;
    }
  }
  .login-btn {
    width: 90%;
    height: 40px;
    border-radius: 3px;
    background-color: #4cd96f;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }
  .login-about {
    width: 90%;
    margin: 10px auto;
    text-align: center;
    font-size: 12px;
    a {
      color: #999;
    }
  }
}
</style>

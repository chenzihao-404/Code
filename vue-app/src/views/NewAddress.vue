<template>
  <div class="newAddress">
    <div class="header">
      <span class="iconfont icon-zuo1" @click="forback"></span>
      <span style="font-weight:bold;">添加地址</span>
    </div>
    <div class="addcontent" style="margin:0;">
      <p>联系人</p>
      <p>
        <input type="text" placeholder="姓名" v-model="username" />
      </p>
    </div>
    <p class="genderSelect">
      <span ref="man" style="background-color:#4395FF;" @click="genderSelectM()">先生</span>
      <span ref="women" @click="genderSelectW()">女士</span>
    </p>
    <div class="addcontent">
      <p>电话</p>
      <p>
        <input type="text" placeholder="手机号码" v-model="phonenumber" />
      </p>
    </div>
    <div class="addcontent">
      <p>地址</p>
      <p>
        <input type="text" placeholder="小区/写字楼/学校等" v-model="address" />
      </p>
    </div>
    <div class="addcontent">
      <p>门牌号</p>
      <p>
        <input type="text" placeholder="10号楼5层501室222" />
      </p>
    </div>
    <div class="enterBtn" @click="addAddress">确定</div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      address: "",
      phonenumber: "",
      gender: "先生"
    };
  },
  methods: {
    forback() {
      this.$router.push("/address");
    },
    genderSelectW() {
      this.gender = "女士";
      this.$refs.women.style.backgroundColor = "#4395FF";
      this.$refs.man.style.backgroundColor = "#fff";
    },
    genderSelectM() {
      this.gender = "先生";
      this.$refs.man.style.backgroundColor = "#4395FF";
      this.$refs.women.style.backgroundColor = "#fff";
    },

    addAddress() {
      if (
        this.username != "" &&
        this.phonenumber != "" &&
        this.address != "" &&
        this.gender != ""
      ) {
        this.$store.state.mailesong.addressArr.push({
          username: this.username,
          address: this.address,
          phonenumber: this.phonenumber,
          gender: this.gender
        });
        this.username = this.address = this.phonenumber = this.gender = "";
        Toast("添加成功");
        this.$router.push("/address");
    }else{
        Toast("输入不能为空");
         }
    }
  }
};
</script>
<style lang="less">
.newAddress {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: #fff;
  position: fixed;
  top:0;
  left: 0;

  .header {
    width: 100%;
    height: 40px;
    background-color: #008eff;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    span:nth-child(1) {
      flex: 2;
    }
    span:nth-child(2) {
      flex: 3;
    }
  }
  .genderSelect {
    width: 200px;
    box-sizing: border-box;
    margin: 10px auto;
    span {
      display: inline-block;
      width: 60px;
      height: 25px;
      font-size: 13px;
      border: 1px solid #f2f2f2;
      text-align: center;
      line-height: 25px;
      color: #666;
      border-radius: 2px;
      margin-right: 5px;
    }
  }
  .addcontent {
    width: 100%;
    height: 40px;
    display: flex;
    box-sizing: border-box;
    line-height: 40px;
    padding: 0 10px;
    margin: 10px 0;
    p:nth-child(1) {
      flex: 1;
      font-weight: bold;
    }
    p:nth-child(2) {
      flex: 4;
      input {
        font-size: 14px;
        color: #666;
      }
    }
  }
  .enterBtn {
    width: 300px;
    height: 40px;
    background-color: #00d762;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 3px;
    margin: 20px auto;
  }
}
</style>
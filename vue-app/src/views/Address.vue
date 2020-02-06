<template>
  <div class="Address">
    <div class="header">
      <span class="iconfont icon-zuo1" @click="forback"></span>
      <span>选择收货地址</span>
      <span @click="gotoNewaddress">新增地址</span>
    </div>
    <p class="explain">当前地址</p>
    <div class="current-address">
      <span>{{$store.state.mailesong.addresscon.address}}</span>
      <!-- <span>重新定位</span> -->
    </div>
    <p class="explain">收货地址</p>

    <div class="Receiving">
      <div
        class="content"
        v-for="(value,index) in $store.state.mailesong.addressArr"
        :key="index"
        @click="addressSelect(index)"
      >
        <p>
          <span class="username">{{value.username}}</span>
          <span>{{value.gender}}</span>
          <span class="phonenumber">{{value.phonenumber}}</span>
          <span
            @click.stop="deladdress(index)"
            class="iconfont icon-chacha"
            style="float:right;color:#ccc"
          ></span>
        </p>
        <p>{{value.address}}</p>
      </div>
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
      // this.$router.push("/home");
      this.$router.push(this.$store.state.mailesong.currentrouter);
      this.$store.state.mailesong.currentrouter = "/home";
    },
    gotoNewaddress() {
      this.$router.push("/newaddress");
    },
    addressSelect(i) {
      this.$store.state.mailesong.addresscon.address = this.$store.state.mailesong.addressArr[
        i
      ].address;
      this.$store.state.mailesong.addresscon.username = this.$store.state.mailesong.addressArr[
        i
      ].username;
      this.$store.state.mailesong.addresscon.phonenumber = this.$store.state.mailesong.addressArr[
        i
      ].phonenumber;
      this.$store.state.mailesong.addresscon.gender = this.$store.state.mailesong.addressArr[
        i
      ].gender;
    },
    deladdress(i) {
      this.$store.state.mailesong.addressArr.splice(i, 1);
      if (this.$store.state.mailesong.addressArr.length <= 0) {
        this.$store.state.mailesong.addresscon.address = "请添加收货地址";
        this.$store.state.mailesong.addresscon.username = "";
        this.$store.state.mailesong.addresscon.phonenumber = "";
        this.$store.state.mailesong.addresscon.gender = "";
      }
    }
  }
};
</script>
<style lang="less">
.Address {
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  .header {
    width: 100%;
    height: 40px;
    background-color: #00a0ff;
    color: #fff;
    display: flex;
    line-height: 40px;
    font-weight: 900;
    box-sizing: border-box;
    padding: 0 10px;
    span {
      flex: 1;
    }
    span:nth-child(3) {
      text-align: right;
      font-size: 14px;
    }
  }
  .explain {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding-left: 10px;
    line-height: 40px;
    background-color: #f4f4f4;
    font-size: 12px;
    color: #666;
  }
  .current-address {
    width: 100%;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    span:nth-child(1) {
      font-size: 17px;
      color: black;
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: 13px;
      color: #00a0ff;
      float: right;
    }
  }
  .Receiving {
    width: 100%;
    .content {
      width: 100%;
      height: 60px;
      box-sizing: border-box;
      padding: 10px;
      font-size: 13px;
      color: #666;

      p:nth-child(1) {
        margin-bottom: 5px;
        .username {
          font-size: 16px;
          font-weight: bold;
          color: black;
        }
        span:nth-child(2) {
          margin-left: 2px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" v-show="flag">
      <router-link to="/home" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-SSS"></span>
        </div>
        <div class="mint-tab-item-label">首页</div>
      </router-link>
      <router-link to="/faxian" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-faxian"></span>
        </div>
        <div class="mint-tab-item-label">发现</div>
      </router-link>
      <router-link to="/dingdan" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-weibiaoti-"></span>
        </div>
        <div class="mint-tab-item-label">订单</div>
      </router-link>
      <router-link to="/gerenzhongxin" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-gerenzhongxin"></span>
        </div>
        <div class="mint-tab-item-label">个人中心</div>
      </router-link>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      flag: false
    };
  },
  watch: {
    "$route.path": function(newval) {
      if (newval == "/home" || newval == "/dingdan"||newval=="/faxian"||newval =="/gerenzhongxin") {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  }
};
</script>
<style lang="less">
body {
  background-color: #f5f5f5;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
ul,
ol {
  padding: 0;
  margin: 0;
}

ul,
ol,
a {
  list-style: none;
}

a {
  text-decoration: none;
  color: darkgrey;
}
img {
  display: block;
}
.mint-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

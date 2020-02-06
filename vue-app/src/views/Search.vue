<template>
  <div class="Search">
    <p>
      <span class="iconfont icon-zuo1" @click="forback"></span>
    </p>
    <p class="search-input">
      <span>
        <input type="text" placeholder="输入商家、商品名称" />
      </span>
      <span>搜索</span>
    </p>
    <p>
      <span>历史搜索</span>
      <span class="iconfont icon-qingkong1"></span>
    </p>
    <p>
      <span>麦当劳麦乐送</span>
      <span>麦乐送</span>
      <span>北方美食烧烤</span>
      <span>港味式扒饭便当</span>
    </p>
    <p>热门搜素</p>
    <p>
      <span>麦当劳麦乐送</span>
      <span>港味式扒饭便当</span>
      <span>北方美食烧烤</span>
      <span>华莱士</span>
      <span>饭戒</span>
      <span>披萨</span>
      <span>72</span>
      <span>木桶饭</span>
      <span>黄焖鸡</span>
      <span>正新</span>
      <span>海底捞</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    forback() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less">
.Search {
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top:0;
  left: 0;

  .iconfont {
    width: 100%;
    font-size: 20px;
    color: #666;
    height: 30px;
    line-height: 30px;
    display: block;
  }
  .search-input {
    width: 100%;
    height: 30px;
    font-size: 12px;
    // text-align: center;
    box-sizing: border-box;
    padding-left: 10px;
    margin-top: 10px;
    input {
      background-color: #f8f8f8;
      height: 100%;
      width: 70%;
      padding-left: 10px;
    }
    span:nth-child(2) {
      font-weight: bold;
      font-size: 16px;
      margin-left: 20px;
    }
  }
  p:nth-child(3) {
    width: 100%;
    height: 30px;
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;

    span:nth-child(1) {
      font-weight: bold;
    }
    span:nth-child(2) {
      display: inline;
      font-size: 13px;
    }
  }
  p:nth-child(4) {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    span {
      display: inline-block;
      height: 20px;
      background-color: #f8f8f8;
      line-height: 20px;
      font-size: 13px;
      border-radius: 2px;
      margin-left: 5px;
      padding: 5px;
    }
  }
  p:nth-child(5) {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    box-sizing: border-box;
  }
  p:nth-child(6) {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    span {
      display: inline-block;
      height: 20px;
      background-color: #f8f8f8;
      line-height: 20px;
      font-size: 13px;
      border-radius: 2px;
      margin-left: 5px;
      padding: 5px;
      margin-top: 10px;
    }
  }
}
</style>

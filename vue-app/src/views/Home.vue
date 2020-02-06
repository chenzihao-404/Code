<template>
  <div class="e-index">
    <!-- index -->
    <!-- index-header -->
    <div class="i-header">
      <div class="dingwei">
        <span class="iconfont icon-dizhi"></span>
        <span class="address" @click="gotoAddress">
          {{$store.state.mailesong.addresscon.address}}
          <span class="iconfont icon-xia"></span>
        </span>
      </div>
      <a href="#">
        <div class="search">
          <p @click="gotoSearch">
            <span>搜索饿了么商家、商品名称</span>
          </p>
        </div>
      </a>
    </div>

    <!-- index-nav -->
    <div class="i-nav">
      <div class="navbox">
        <ul>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
              </p>
              <p>美食</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
                 
              </p>
              <p>大牌惠吃</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
               
              </p>
              <p>商超便利</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
              
          
              </p>
              <p>水果</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
         
              </p>
              <p>医药健康</p>
            </li>
          </a>
        </ul>
      </div>
      <div class="navbox">
        <ul>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
              
              </p>
              <p>浪漫鲜花</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
             
              </p>
              <p>跑腿代购</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />

               
              </p>
              <p>汉堡披萨</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
               
              </p>
              <p>厨房生鲜</p>
            </li>
          </a>
          <a href="#">
            <li>
              <p>
                <img src="../assets/images/index/meishi.png" alt />
              
              </p>
              <p>甜品饮料</p>
            </li>
          </a>
        </ul>
      </div>
    </div>

    <div class="taocan">
      <a href="#">
        <ul>
          <li>
            <p>品质套餐</p>
            <p>搭配齐全吃得好</p>
            <p>立即抢购 ></p>
          </li>
          <li>
            <img src="../assets/images/index/pinzhitaocan.png" alt />
          </li>
        </ul>
      </a>
    </div>

    <!-- index-content -->
    <div class="i-content">
      <div class="tuijian">— 推荐商家 —</div>
      <div class="goods-select">
        <van-tabs v-model="active">
          <van-tab title="综合排序">
            <Zonghepaixu></Zonghepaixu>
          </van-tab>
          <van-tab title="距离最近">
            <Juli></Juli>
          </van-tab>
          <van-tab title="品质联盟">
            <Pinzhi></Pinzhi>
          </van-tab>
          <van-tab title="筛选">
            <Shaixuan></Shaixuan>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Juli from "@/components/Index/content/Juli.vue";
import Pinzhi from "@/components/Index/content/Pinzhi.vue";
import Shaixuan from "@/components/Index/content/Shaixuan.vue";
import Zonghepaixu from "@/components/Index/content/Zonghepaixu.vue";
export default {
  data() {
    return {
      selected: "",
      active: ""
    };
  },
  methods:{
    gotoSearch(){
      this.$router.push("/search");
      this.$store.state.mailesong.currentrouter = "/home";
    },
    gotoAddress(){
      this.$router.push("/address");
    }
  },

  components: {
    Juli,
    Pinzhi,
    Shaixuan,
    Zonghepaixu
  }
};
</script>

<style lang="less">
.e-index {
  padding-bottom: 55px;
}
.i-header {
  width: 100%;
  height: 80px;
  background-color: rgb(35, 168, 250);
  .dingwei {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    line-height: 30px;
    .iconfont {
      font-size: 20px;
      color: #fff;
    }
    .address {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }

  .search {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: rgb(35, 168, 250);
    font-size: 13px;
    padding:0;
    p {
      width: 90%;
      height: 33px;
      background-color: #fff;
      margin: 0 auto;
      box-sizing: border-box;
      line-height: 33px;
      border-radius: 2px;
    }
  }
}

.i-nav {
  width: 100%;
  height: 170px;
  box-sizing: border-box;
  padding-top: 15px;
  background-color: #fff;
  .navbox {
    width: 100%;
    height: 50%;
    ul {
      width: 95%;
      height: 100%;
      display: flex;
      margin: 0 auto;
      box-sizing: border-box;
      a {
        width: 100%;
        height: 100%;
        li {
          flex: 1;
          height: 100%;
          p:nth-child(1) {
            width: 100%;
            text-align: center;
            img {
              margin: 0 auto;
              width: 70%;
              height: 60%;
              max-width: 80px;
              max-height: 80px;
            }
          }
          p:nth-child(2) {
            width: 100%;
            text-align: center;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.taocan {
  width: 100%;
  height: 90px;
  background-color: #fff;
  overflow: hidden;
  ul {
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    background-color: #f5f5f5;
    li {
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 10px;
    }
    li:nth-child(1) {
      p:nth-child(1) {
        font-weight: bold;
        color: black;
        font-size: 15px;
        margin: 7px 0;
      }
      p:nth-child(2) {
        font-size: 12px;
      }
      p:nth-child(3) {
        font-size: 12px;
        color: coral;
        margin-top: 5px;
      }
    }

    li:nth-child(2) {
      img {
        width: 100%;
        height: 100%;
        max-width: 150px;
        max-height: 150px;
      }
    }
  }
}

.i-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .tuijian {
    width: 100%;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    font-size: 14px;
  }

  .content-select {
    width: 100%;
    height: 30px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        font-size: 12px;
        color: #ccc;
        text-align: center;
      }
      .active {
        font-weight: bold;
        color: black;
      }
    }
  }
}
</style>

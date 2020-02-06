<template>
  <div class="dingcancom">
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content" style>
        <ul>
          <li v-for="(food,index) in foods" :key="index">
            <div class="foods-select" v-if="activeIndex === food.num">
              <div @click="foodsdetailedshow(index)">
                <img :src="food.img" />
              </div>
              <div>
                <div class="foodname">
                  <p>{{food.name}}</p>
                  <p>{{food.text}}</p>
                </div>
                <div class="foodprice">
                  <p>
                    <span>{{food.zhekou}}</span>
                    <span>{{food.tejia}}</span>
                  </p>
                  <p>
                    <span>
                      ￥{{food.price}}
                      <s>{{food.oldprice}}</s>
                    </span>
                    <span class="iconfont icon-tianjia" style="margin-right:10px;" @click="addCar(index)"></span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </van-tree-select>
    <div class="Car">
      <div class="caricon">
        <p
          ref="caricon"
          :class="{'showcaricon':$store.state.mailesong.classflag}"
          @click="foodcarshow"
        >
          <span class="iconfont icon-gouwuche"></span>
          <span
            class="iconnum"
            v-show="$store.state.mailesong.numflag"
          >{{$store.state.mailesong.number}}</span>
          <!-- -- -->
          <!-- --- -->
        </p>
      </div>
      <div class="cartext">
        <p ref="price" :class="{'showprice':$store.state.mailesong.classflag}">
          <span v-show="!$store.state.mailesong.showprice">未选购商品</span>
          <span v-show="$store.state.mailesong.showprice">￥{{$store.state.mailesong.price}}</span>
        </p>
        <p>另需配送费9元</p>
      </div>
      <div class="carpay">
        <p ref="pay" v-show="!$store.state.mailesong.payflag">￥0起送</p>
        <p class="paybtn" v-show="$store.state.mailesong.payflag" @click="goforpay">去结算</p>
      </div>
    </div>
    <div class="foodcar" v-if="foodcarflag">
      <div class="foodcarbgc" @click="foodcarbgcshow"></div>
      <div class="foodcon">
        <p class="yijian">已减999元</p>
        <p class="yixuan">
          <span>已选商品</span>
          <span @click="clearcar">
            <b class="iconfont icon-qingkong2"></b> 清空
          </span>
        </p>
        <ul>
          <li v-for="(value,index) in $store.state.mailesong.foodcarcon" :key="index">
            <p>
              <span>{{value.foodname}}</span>
            </p>
            <p class="pricenum">
              <span>￥{{value.foodprice*value.foodnum}}</span>
              <span v-if="value.btnflag">
                <b @click="foodcarred(index)" class="iconfont icon-jian" style="font-size:25px"></b>
                {{value.foodnum}}
                <b
                  @click="foodcaradd(index)"
                  class="iconfont icon-tianjia1"
                  style="font-size:27px;"
                ></b>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="foodsdetailed" v-if="foodsdetailedflag">
      <div class="foodimg">
        <span class="iconfont icon-chacha" @click="foodsdetailedflag = false"></span>
        <p>
          <img :src="$store.state.mailesong.foodsdetailed.foodimg" alt />
        </p>
      </div>
      <div class="foodcon">
        <p class="foodname">{{$store.state.mailesong.foodsdetailed.foodname}}</p>
        <p class="foodsales">{{$store.state.mailesong.foodsdetailed.foodsales}}</p>
        <p class="foodprice">
          <span>
            {{$store.state.mailesong.foodsdetailed.foodprice}}
            <s>$30</s>
          </span>
          <span>5折</span>
          <span>每单限1份优惠</span>
        </p>
        <p class="foodtext">{{$store.state.mailesong.foodsdetailed.foodtext}}</p>
        <p>价格说明</p>
      </div>
    </div>
  </div>
</template>
<script>
// import { Toast } from "vant";
export default {
  data() {
    return {
      foodcarflag: false,
      show: false,
      activeIndex: 0,
      foodsdetailedflag: false,
      addflag: true,
      items: [
        { text: "商品列 1" },
        { text: "商品列 2" },
        { text: "商品列 3" },
        { text: "商品列 4" },
        { text: "商品列 5" },
      ],
      foods: [
        {
          img: require("@/assets/images/detailspage/mailesong/1.png"),
          name: "板烧鸡腿堡",
          text: "板烧鸡腿堡1份 主要原料:..",
          zhekou: "0.9折",
          tejia: "新用户特价菜",
          price: 12,
          oldprice: "￥18",
          num: 0,
          kouwei: "不辣",
          foodid: 0
        },
        {
          img: require("@/assets/images/detailspage/mailesong/2.png"),
          name: "可乐套餐鸡翅",
          text: "板烧鸡腿堡1份 主要原料:..",
          zhekou: "0.65折",
          tejia: "新用户特价菜",
          price: 52,
          oldprice: "￥99",
          num: 0,
          kouwei: "不辣",
          foodid: 1
        },
        {
          img: require("@/assets/images/detailspage/mailesong/3.png"),
          name: "菠萝派",
          text: "菠萝派1份 主要原料:..",
          zhekou: "0.7折",
          tejia: "新用户特价菜",
          price: 15,
          oldprice: "￥20",
          num: 0,
          kouwei: "不辣",
          foodid: 2
        },
        {
          img: require("@/assets/images/detailspage/mailesong/4.png"),
          name: "辣腿四件套",
          text: "麦辣鸡腿堡一个+黄金脆薯条..",
          zhekou: "0.78折",
          tejia: "新用户特价菜",
          price: 44,
          oldprice: "￥68",
          num: 1,
          kouwei: "不辣",
          foodid: 3
        },
        {
          img: require("@/assets/images/detailspage/mailesong/5.png"),
          name: "草莓冰淇凌",
          text: "板烧鸡腿堡1份 主要原料:..",
          zhekou: "0.8折",
          tejia: "新用户特价菜",
          price: 15,
          oldprice: "￥20",
          num: 1,
          kouwei: "不辣",
          foodid: 4
        },
        {
          img: require("@/assets/images/detailspage/mailesong/6.png"),
          name: "巨无霸汉堡四件套",
          text: "巨无霸1个+麦辣鸡翅1对+中薯条+...",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 44,
          oldprice: "￥66",
          num: 1,
          kouwei: "不辣",
          foodid: 5
        },
        {
          img: require("@/assets/images/detailspage/mailesong/7.png"),
          name: "可乐汉堡套餐",
          text: "鸡腿堡1份 主要原料:...",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 16,
          oldprice: "￥99",
          num: 2,
          kouwei: "不辣",
          foodid: 6
        },
        {
          img: require("@/assets/images/detailspage/mailesong/8.png"),
          name: "牛肉汉堡",
          text: "牛肉汉堡1份 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 18,
          oldprice: "￥99",
          num: 2,
          kouwei: "不辣",
          foodid: 7
        },
        {
          img: require("@/assets/images/detailspage/mailesong/9.png"),
          name: "欢乐套餐",
          text: "板烧鸡腿堡1份 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 23,
          oldprice: "￥99",
          num: 3,
          kouwei: "不辣",
          foodid: 8
        },
        {
          img: require("@/assets/images/detailspage/mailesong/10.png"),
          name: "双鸡翅",
          text: "鸡翅1份 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 16,
          oldprice: "￥99",
          num: 3,
          kouwei: "不辣",
          foodid: 9
        },
        {
          img: require("@/assets/images/detailspage/mailesong/11.png"),
          name: "可乐牛肉堡套餐",
          text: "牛肉堡1份+可乐 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 17,
          oldprice: "￥99",
          num: 3,
          kouwei: "不辣",
          foodid: 10
        },
        {
          img: require("@/assets/images/detailspage/mailesong/12.png"),
          name: "双层汉堡可乐套餐",
          text: "双层汉堡1份+可乐 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 17,
          oldprice: "￥99",
          num: 4,
          kouwei: "不辣",
          foodid: 11
        },
        {
          img: require("@/assets/images/detailspage/mailesong/13.png"),
          name: "可乐鸡翅汉堡套餐",
          text: "板烧鸡腿堡1份+可乐 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 139,
          oldprice: "￥150",
          num: 4,
          kouwei: "不辣",
          foodid: 12
        },
        {
          img: require("@/assets/images/detailspage/mailesong/14.png"),
          name: "欢乐全家套餐",
          text: "全家套餐1份 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 188,
          oldprice: "￥199",
          num: 4,
          kouwei: "不辣",
          foodid: 13
        },
        {
          img: require("@/assets/images/detailspage/mailesong/15.png"),
          name: "欢乐鸡翅套餐",
          text: "鸡翅3份 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 33,
          oldprice: "￥99",
          num: 4,
          kouwei: "不辣",
          foodid: 14
        },
        {
          img: require("@/assets/images/detailspage/mailesong/16.png"),
          name: "欢乐全家桶",
          text: "可乐+汉堡+香芋派 主要原料:..",
          zhekou: "0.5折",
          tejia: "新用户特价菜",
          price: 66,
          oldprice: "￥99",
          num: 4,
          kouwei: "不辣",
          foodid: 15
        }
      ]
    };
  },
  methods: {
    addCar(i) {
      //添加商品到购物车
      this.$store.state.mailesong.price += this.foods[i].price;
      this.$store.state.mailesong.showprice = true;
      this.$store.state.mailesong.classflag = true;
      this.$store.state.mailesong.numflag = true;
      this.$store.state.mailesong.payflag = true;
      this.$store.state.mailesong.number++;
      this.$refs.pay.innerHTML = "";

      this.addflag = true;
      if (this.$store.state.mailesong.foodcarcon.length > 0) {
        this.$store.state.mailesong.foodcarcon.forEach(value => {
          if (value.foodid == this.foods[i].foodid) {
            value.foodnum++;
            this.addflag = false;
          }
        });
      }
      if (this.addflag) {
        this.$store.state.mailesong.foodcarcon.push({
          img: this.foods[i].img,
          name: this.foods[i].name,
          text: this.foods[i].text,
          zekou: this.foods[i].zekou,
          price: this.foods[i].price,
          oldprice: this.foods[i].oldprice,
          num: this.foods[i].num,
          kouwei: this.foods[i].kouwei,
          foodname: this.foods[i].name,
          foodprice: this.foods[i].price,
          foodnum: 1,
          btnflag: true,
          foodid: i
        });
      }
    },
    goforpay() {
      this.$router.push("/querendingdan");

      this.$store.state.mailesong.foodcarcon.forEach(value => {
        this.$store.state.mailesong.foodLists.push({
          //传值给确认订单
          img: value.img,
          name: value.name,
          text: value.text,
          zhekou: value.zhekou,
          tejia: value.tejia,
          price: value.price,
          oldprice: value.oldprice,
          num: value.num,
          kouwei: value.kouwei,
          foodnumber: value.foodnum
        });
         this.$store.state.mailesong.foodcarArr.push({
          //传值给订单
          img: value.img,
          name: value.name,
          text: value.text,
          zhekou: value.zhekou,
          tejia: value.tejia,
          price: value.price,
          oldprice: value.oldprice,
          num: value.num,
          kouwei: value.kouwei,
          foodnumber: value.foodnum
        });
      });

    },
    foodcarshow() {
      //显示购物车详细页
      if (this.$store.state.mailesong.foodcarcon.length < 1) {
        //判断购物车没有商品则不显示购物车页
        this.foodcarflag = false;
      } else {
        this.foodcarflag = !this.foodcarflag;
      }
    },
    foodcarbgcshow() {
      //点击背景隐藏购物车详细页
      this.foodcarflag = false;
    },
    foodcaradd(i) {
      //添加商品
      this.$store.state.mailesong.foodcarcon[i].foodnum++;
      this.$store.state.mailesong.number++;
      this.$store.state.mailesong.price += this.$store.state.mailesong.foodcarcon[
        i
      ].foodprice;
      this.$store.state.mailesong.showprice = true;
    },
    foodcarred(i) {
      //减商品数量
      this.$store.state.mailesong.price -= this.$store.state.mailesong.foodcarcon[
        i
      ].foodprice;
      this.$store.state.mailesong.showprice = true;
      this.$store.state.mailesong.number--;

      if (this.$store.state.mailesong.foodcarcon[i].foodnum <= 1) {
        this.$store.state.mailesong.foodcarcon.splice(i, 1);
        this.$store.state.mailesong.foodLists.splice(i, 1);
        this.$store.state.mailesong.orderlists.splice(i, 1);

        if (this.$store.state.mailesong.foodcarcon.length < 1) {
          this.clearcar();
        }
      } else {
        this.$store.state.mailesong.foodcarcon[i].foodnum--;
      }
    },
    clearcar() {
      //清除购物车
      this.$store.state.mailesong.price = 0;
      this.$refs.pay.innerHTML = "￥0起送";
      this.$store.state.mailesong.number = 0;
      this.$store.state.mailesong.numflag = false;
      this.$store.state.mailesong.payflag = false;
      this.$store.state.mailesong.classflag = false;
      this.$store.state.mailesong.foodcarcon = [];
      this.$store.state.mailesong.foodLists = [];
    },
    foodsdetailedshow(i) {
      this.foodsdetailedflag = true;
      this.$store.state.mailesong.foodsdetailed.foodimg = this.foods[i].img;
      this.$store.state.mailesong.foodsdetailed.foodname = this.foods[i].name;
      this.$store.state.mailesong.foodsdetailed.foodtext = this.foods[i].text;
      this.$store.state.mailesong.foodsdetailed.foodprice = this.foods[i].price;
    }
  }
};
</script>

<style lang="less" scoped>
.Car {
  width: 100%;
  height: 45px;
  background-color: #505052;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  font-size: 12px;
  color: #666;
  display: flex;
  .caricon {
    flex: 1;
    color: #666;
    box-sizing: border-box;
    padding: 0 10px;
    .showcaricon {
      background-color: #3190e8;
    }
    p {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 3px solid #666;
      text-align: center;
      line-height: 35px;
      margin-top: -10px;
      background-color: #505052;
      .iconfont {
        font-size: 30px;
      }
      .iconnum {
        border-radius: 50%;
        background-color: red;
        color: #fff;
        display: block;
        width: 20px;
        height: 20px;
        margin-top: -50px;
        margin-left: 20px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
  .cartext {
    flex: 3;
    font-size: 13px;
    .showprice {
      color: #fff;
    }
    p {
      margin-top: 5px;
    }
  }
  .carpay {
    flex: 1;
    text-align: center;
    line-height: 45px;
    color: #fff;
    p {
      width: 100%;
      height: 100%;
    }
    .paybtn {
      color: #fff;
      font-weight: bold;
      background-color: #38ca73;
      // margin-top: -45px;
    }
  }
}
.foods-select {
  width: 100%;
  display: flex;
  margin-top: 6px;
  div:nth-child(1) {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 2;
    .foodname {
      width: 100%;
      height: 50%;
      p:nth-child(1) {
        font-size: 16px;
        margin-bottom: 5px;
      }
      p:nth-child(2) {
        font-size: 12px;
      }
    }
    .foodprice {
      width: 100%;
      height: 50%;
      p {
        font-size: 12px;
      }
      p:nth-child(1) {
        span {
          margin-left: 5px;
          color: red;
        }
      }
      p:nth-child(2) {
        margin-top: 5px;
        span:nth-child(1) {
          color: red;
          s {
            color: #666;
          }
        }
        span:nth-child(2) {
          color: blue;
          float: right;
          font-size: 20px;
        }
      }
    }
  }
}

.wrapper {
  display: flex;
  height: 100%;
}

.block {
  width: 100%;
  height: 250px;
  background-color: #fff;
  position: fixed;
  bottom: 45px !important;
  left: 0px !important;
}

.foodcar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  z-index: 800;
  .foodcarbgc {
    background-color: #666;
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }

  .foodcon {
    width: 100%;
    height: 300px;
    background-color: #fff;
    position: fixed;
    bottom: 45px;
    left: 0;
    color: #666;
    overflow-y: auto;
    .yijian {
      width: 100%;
      height: 15px;
      text-align: center;
      line-height: 15px;
      font-size: 12px;
      background-color: #fffad8;
    }
    .yixuan {
      width: 100%;
      height: 30px;
      background-color: #eceff1;
      box-sizing: border-box;
      padding: 0 10px;
      line-height: 30px;
      span:nth-child(2) {
        font-size: 12px;
        float: right;
      }
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
        line-height: 60px;
        p {
          flex: 1;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .pricenum {
          color: red;
          span:nth-child(2) {
            float: right;
            font-size: 20px;
            color: #666;
            b {
              color: blue;
            }
          }
        }
      }
    }
  }
}

.foodsdetailed {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  font-size: 16px;
  .foodimg {
    width: 100%;
    height: 50%;
    span {
      display: block;
      font-size: 20px;
      width: 30px;
      height: 30px;
      background-color: #cccccc;
      color: #fff;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      float: right;
      transform: translate(-15px, 15px);
    }
    p {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        display: block;
        transform: translateY(-30px);
        position: relative;
        z-index: -1;
      }
    }
  }
  .foodcon {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    padding: 15px;
    p:nth-child(1) {
      font-size: 20px;
      font-weight: bold;
    }
    p:nth-child(2) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #666;
    }
    p:nth-child(3) {
      width: 100%;
      height: 30px;
      line-height: 30px;
      span:nth-child(1) {
        color: red;
        margin-right: 5px;
        s {
          font-size: 12px;
          color: #666;
          margin-left: 5px;
        }
      }
      span:nth-child(2) {
        color: red;
        font-size: 12px;
        border: 1px solid red;
        margin-right: 5px;
      }
      span:nth-child(3) {
        font-size: 12px;
        color: red;
      }
    }
    p:nth-child(4) {
      width: 90%;
      font-size: 12px;
      color: #666;
    }
    p:nth-child(5) {
      font-size: 13px;
      color: #666;
      margin-top: 10px;
    }
  }
}
</style>
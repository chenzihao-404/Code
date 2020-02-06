<template>
  <div>
    <!-- 空订单 -->
    <div class="Empty-menu" v-if="$store.state.dingdanflag">
      <div class="box">
        <p class="d-bgi"></p>
        <h3 style="font-size:25px;">近三个月无外卖订单</h3>
        <a href="#">
          <p class="chakan">
            查看三个月得外卖订单
            <span class="iconfont icon-weibiaoti35"></span>
          </p>
        </a>
      </div>
    </div>
    <div class="dingdan" v-if="!$store.state.dingdanflag">
      <div class="dingdancon">
        <ul>
          <li v-for="(value,index) in $store.state.mailesong.orderlists" :key="index" @click="gotodetailspage(index)">
            <div class="shangjianame">
              <p>
                <img src="@/assets/images/index/maidanglao.jpeg" alt />
              </p>
              <p>
                <span>麦当劳麦乐送</span>
                <span>{{datatime}}</span>
              </p>
              <p>订单已付款</p>
            </div>
            <div class="foodname">
              <span>一共{{value.text}}份商品</span>
              <span>￥{{value.price}}</span>
            </div>
            <div class="more" @click.stop="go">
              <span>再来一单</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datatime:"",
      arrContent:[],
    };
  },
  methods:{
    go(){
      this.$router.push("/detailspage");
    },
      gotodetailspage(i){
      this.$router.push("/orderdetailspage");
        this.arrContent = [];
         this.$store.state.mailesong.orderlists[i].content.forEach(value=>{
            this.arrContent.push({
              foodimg:value.img,
              foodnumber:value.foodnumber,
              foodname:value.name,
              foodprice:value.price,
            });
        });
      this.$store.state.mailesong.orderdetailspage.price = this.$store.state.mailesong.orderlists[i].price;
      this.$store.state.mailesong.orderdetailspage.address = this.$store.state.mailesong.orderlists[i].address;
      this.$store.state.mailesong.orderdetailspage.username = this.$store.state.mailesong.orderlists[i].username;
      this.$store.state.mailesong.orderdetailspage.phonenumber = this.$store.state.mailesong.orderlists[i].phonenumber;
      this.$store.state.mailesong.orderdetailspage.gender = this.$store.state.mailesong.orderlists[i].gender;
      this.$store.state.mailesong.orderdetailspage.time = this.datatime;
      this.$store.state.mailesong.orderdetailspage.content = this.arrContent;
    },
  },
  created(){
        var time = new Date();
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss =time.getSeconds();
        this.datatime = y+"-"+m+"-"+d+" "+hh+":"+mm+":"+ss 
  }
};
</script>

<style lang="less">
.Empty-menu {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    height: 300px;
    margin-top: 50px;
    text-align: center;
    .d-bgi {
      width: 100%;
      height: 130px;
      background-image: url(../assets/images/dingdan/null.png);
      background-size: 180px 130px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .jilu {
      width: 100%;
      height: 15%;
    }
    .chakan {
      width: 100%;
      height: 15%;
      font-size: 10px;
      margin-top: 5px;
    }
  }
}
.dingdan {
  width: 100%;
  height: 100%;
  // background-color: #f5f5f5;
  font-size: 16px;
  overflow: hidden;
  padding-bottom: 55px;
  .dingdancon {
    width: 100%;
    height: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 150px;
        background-color: #fff;
        margin-top: 10px;
        .shangjianame {
          display: flex;
          border: 1px solid #f2f2f2;
          p:nth-child(1) {
            flex: 1;
            box-sizing: border-box;
            padding: 5px 5px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p:nth-child(2) {
            flex: 4;
            box-sizing: border-box;
            padding-top: 15px;
            span:nth-child(2) {
              display: block;
              font-size: 12px;
              color: #666;
              margin-top: 5px;
            }
          }
          p:nth-child(3) {
            flex: 2;
            line-height: 50px;
            font-size: 14px;
            text-align: center;
          }
        }
        .foodname {
          width: 90%;
          margin: 0 auto;
          display: flex;
          line-height: 50px;
          font-size: 14px;
          span:nth-child(1) {
            text-align: center;
            flex: 3;
          }
          span:nth-child(2) {
            flex: 1;
            text-align: right;
            font-weight: bold;
          }
        }
        .more {
          width: 100%;
          span {
            display: block;
            width: 70px;
            height: 30px;
            border: 1px solid #60b3ff;
            text-align: center;
            line-height: 30px;
            font-size: 13px;
            color: #60b3ff;
            float: right;
            margin-right: 10px;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>

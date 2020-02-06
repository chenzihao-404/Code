<template>
  <div class="evaluate">
    <div class="evaluate-header">
      <p>4.9</p>
      <p>
        <span>商家评分</span>
        <span>
          <van-rate size="12px" gutter="2px" v-model="count" readonly />
        </span>
      </p>
      <p>
        <span>味道</span>
        <span>4.9</span>
      </p>
      <p>
        <span>包装</span>
        <span>4.9</span>
      </p>
      <p>
        <span>配送</span>
        <span>4.9</span>
      </p>
    </div>
    <div class="evaluatecon">
      <div class="header">
        <p style="background-color:#0097FF;color:#fff;">全部 36</p>
        <p style="background-color:#EBF5FF">最新</p>
        <p style="background-color:#EBF5FF">好评 34</p>
        <p style="background-color:#F5F5F5">差评</p>
        <p style="background-color:#EBF5FF">有图 6</p>
      </div>
      <p class="onlycon">
        <span>
          <van-icon name="success" size="12px" />
        </span>只看有内容的评价
      </p>
      <div class="content">
        <div>
          <ul v-for="(value,index) in evaluatecon" :key="index">
            <li>
              <p>
                <img :src="value.headimg" alt />
              </p>
            </li>
            <li>
              <p>
                <span>{{value.username}}</span>
                <span>{{value.time}}</span>
              </p>
              <p>
                <span>
                  <van-rate size="12px" gutter="2px" v-model="count" readonly />
                </span>
                <span style="color:#FFA56F;font-size:14px;">超赞</span>
              </p>
              <p>
             {{value.text}}
              </p>
              <p>
                <img :src="value.goodsimg" alt />
              </p>
              <p>
                <span class="iconfont icon-zan11"></span>
                <span>{{value.foodname}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 5,
      evaluatecon:[
        {
          username:"3******5",
          time:"2019-6-3",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang1.jpeg"),
          text:"   奥体麦当劳开始送餐了，我算经常去吃的老顾客了，还是辣翅经典又美味。这次经不住诱惑下了单。  平时都喜欢带孩子去优托邦那边玩耍，我孩子喜欢他们家的薯条，脆脆甜甜的又不敢让他多吃，真是又爱又恨。😍😍",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun1.jpeg"),
        },
            {
          username:"f******5",
          time:"2019-6-25",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang2.jpeg"),
          text:"我终于等到这家麦当劳有麦乐送了，需然蓝莓派没有了，但是点到我喜欢的薯格，薯格很新鲜，小哥送餐也很快，下次再来",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun2.jpeg"),
        },
            {
          username:"g****6",
          time:"2019-7-30",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang3.jpeg"),
          text:"   奥体麦当劳开始送餐了，我算经常去吃的老顾客了，还是辣翅经典又美味。这次经不住诱惑下了单。  平时都喜欢带孩子去优托邦那边玩耍，我孩子喜欢他们家的薯条，脆脆甜甜的又不敢让他多吃，真是又爱又恨。😍😍",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun2.jpeg"),
        },
            {
          username:"f******7",
          time:"2019-8-24",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang1.jpeg"),
          text:"   奥体麦当劳开始送餐了，我算经常去吃的老顾客了，还是辣翅经典又美味。这次经不住诱惑下了单。  平时都喜欢带孩子去优托邦那边玩耍，我孩子喜欢他们家的薯条，脆脆甜甜的又不敢让他多吃，真是又爱又恨。😍😍",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun1.jpeg"),
        },
            {
          username:"l******0",
          time:"2019-10-20",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang2.jpeg"),
          text:"   奥体麦当劳开始送餐了，我算经常去吃的老顾客了，还是辣翅经典又美味。这次经不住诱惑下了单。  平时都喜欢带孩子去优托邦那边玩耍，我孩子喜欢他们家的薯条，脆脆甜甜的又不敢让他多吃，真是又爱又恨。😍😍",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun2.jpeg"),
        },
            {
          username:"d******9",
          time:"2019-10-31",
          headimg:require("@/assets/images/detailspage/mailesong/touxiang3.jpeg"),
          text:"   奥体麦当劳开始送餐了，我算经常去吃的老顾客了，还是辣翅经典又美味。这次经不住诱惑下了单。  平时都喜欢带孩子去优托邦那边玩耍，我孩子喜欢他们家的薯条，脆脆甜甜的又不敢让他多吃，真是又爱又恨。😍😍",
          foodname:"麦辣鸡翅2块",
          goodsimg:require("@/assets/images/detailspage/mailesong/pinglun2.jpeg"),
        },
        
        

      ]
    };
  }
};
</script>
<style lang="less">
.evaluate {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  font-size: 14px;
  color: #929292;
  font-weight: 600;
  .evaluate-header {
    width: 100%;
    height: 100px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
    p {
      flex: 1;
    }
    p:nth-child(1) {
      font-size: 40px;
      text-align: center;
      line-height: 80px;
      color: #ff6000;
      flex: 1.5;
    }
    p:nth-child(2) {
      box-sizing: border-box;
      padding: 25px;
      span {
        display: block;
      }
      span:nth-child(2) {
        margin-top: 5px;
      }
    }
    p:nth-child(3) {
      span {
        display: block;
      }
      span:nth-child(1) {
        margin-top: 20px;
      }
      span:nth-child(2) {
        font-size: 20px;
        margin-top: 5px;
      }
    }
    p:nth-child(4) {
      span {
        display: block;
      }
      span:nth-child(1) {
        margin-top: 20px;
      }
      span:nth-child(2) {
        font-size: 20px;
        margin-top: 5px;
      }
    }
    p:nth-child(5) {
      span {
        display: block;
      }
      span:nth-child(1) {
        margin-top: 20px;
      }
      span:nth-child(2) {
        font-size: 20px;
        margin-top: 5px;
      }
    }
  }

  .evaluatecon {
    width: 100%;
    margin-top: 7px;
    background-color: #fff;
    .header {
      width: 90%;
      display: flex;
      margin: 0 auto;
      p {
        flex: 1;
        margin-left: 5px;
        margin-top: 10px;
        border-radius: 2px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
    .onlycon {
      width: 90%;
      height: 40px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
      line-height: 40px;
      span {
        background-color: #76d572;
        border-radius: 50%;
        color: #fff;
        display: inline-block;
        width: 12px;
        height: 12px;
        text-align: center;
        line-height: 12px;
        margin-left: 10px;
        margin-right: 2px;
      }
    }
    .content {
      width: 100%;
      margin-top: 10px;
      // border-bottom: 1px solid #f2f2f2;

      div {
        width: 100%;
        height: 100%;
        ul {
          width: 100%;
          height: 350px;
          display: flex;
          li:nth-child(1) {
            flex: 1.5;
            p {
              width: 30px;
              height: 30px;
              margin: 0 auto;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          li:nth-child(2) {
            flex: 9;
            p {
              width: 100%;
            }
            p:nth-child(1) {
              height: 20px;
              font-size: 14px;
              span:nth-child(2) {
                float: right;
                margin-right: 10px;
                font-size: 12px;
              }
            }
            p:nth-child(2) {
              width: 100px;
              span {
                display: inline-block;
                margin-right: 5px;
              }
            }
            p:nth-child(3) {
              width: 95%;
              margin: 10px 0;
            }
            p:nth-child(4) {
              width: 150px;
              height: 150px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            p:nth-child(5) {
              width: 100%;
              height: 20px;
              margin-top: 10px;
              line-height: 20px;
              span:nth-child(1) {
                margin-right: 5px;
              }
              span:nth-child(2) {
                background-color: #ebf5ff;
                font-size: 12px;
                display: inline-block;
                height: 20px;
                border-radius: 2px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

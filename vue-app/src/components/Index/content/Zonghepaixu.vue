<template>
  <div class="index-zonghe">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul v-for="(Zitem, index) in Zlists" :key="index">
        <li @click="go">
          <div class="con1">
            <div class="z-img">
              <img :src="Zitem.Zimg" />
            </div>
            <div class="z-con">
              <p>
                <span class="z-name">{{ Zitem.Zname }}</span>
                <span class="z-more">...</span>
              </p>
              <p>
                <van-rate size="12px" gutter="0px" v-model="value" readonly />
                <span>{{ Zitem.Zpingfen }}</span>
                <span>{{ Zitem.Zdingdan }}</span>
              </p>
              <p>
                <span>{{ Zitem.Zpeisong }}</span>
                <span class="z-time">{{ Zitem.Ztime }}</span>
              </p>
            </div>
          </div>
          <div class="con2">
            <div class="null"></div>
            <div class="z-huodong">
              <p>
                <span class="iconfont icon-jian2" style="color:red"></span>
                <span>{{ Zitem.Zhuodong1 }}</span>
                <span>{{ Zitem.ZhuodongNum }}</span>
              </p>
              <p>
                <span class="iconfont icon-tejia" style="color:green"></span>
                <span>{{ Zitem.Zhuodong2 }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4,
      finished: false,
      loading: false,
      num: 1,
      Zlists: [
        {
          Zimg: require("@/assets/images/index/maidanglao.jpeg"),
          Zname: "麦当劳麦乐送(广州华穗路...)",
          Zpingfen: 4.0,
          Zpeisong: "￥0 起送|配送费￥9",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/shaokao.jpeg"),
          Zname: "北方美食烧烤",
          Zpingfen: 4.0,
          Zpeisong: "￥30 起送|配送费￥2",
          Zdingdan: "月售1411单",
          ZhuodongNum: "6个活动",
          Ztime: "1.25km|32分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "满38减13,满68减25,满98减38,满1.."
        },
        {
          Zimg: require("@/assets/images/index/shenhuo.jpeg"),
          Zname: "神火烧烤",
          Zpingfen: 4.3,
          Zpeisong: "￥0 起送|配送费￥5",
          Zdingdan: "月售3122单",
          ZhuodongNum: "3个活动",
          Ztime: "2.67km|36分钟",
          Zhuodong1: "新用户下单立减12元",
          Zhuodong2: "满25减12,满45减21,满60减30"
        },
        {
          Zimg: require("@/assets/images/index/zhizun.jpeg"),
          Zname: "至尊比萨(天河店)",
          Zpingfen: 4.2,
          Zpeisong: "￥20起送|免配费",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/quanjia.jpeg"),
          Zname: "全家便利店(杨箕店)",
          Zpingfen: 4.0,
          Zpeisong: "￥30 起送|夜间配送费￥9",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "815m|30分钟",
          Zhuodong1: "折扣商品8折起",
          Zhuodong2: "第2份商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/mijue.jpeg"),
          Zname: "秘觉外卖(天河正佳店)",
          Zpingfen: 4.6,
          Zpeisong: "￥20 起送|配送费￥3",
          Zdingdan: "月售1575单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/maidanglao.jpeg"),
          Zname: "麦当劳麦乐送(广州华穗路...)",
          Zpingfen: 4.0,
          Zpeisong: "￥0 起送|配送费￥9",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/maidanglao.jpeg"),
          Zname: "麦当劳麦乐送(广州华穗路...)",
          Zpingfen: 4.0,
          Zpeisong: "￥0 起送|配送费￥9",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        },
        {
          Zimg: require("@/assets/images/index/shaokao.jpeg"),
          Zname: "北方美食烧烤",
          Zpingfen: 4.0,
          Zpeisong: "￥30 起送|配送费￥2",
          Zdingdan: "月售1411单",
          ZhuodongNum: "6个活动",
          Ztime: "1.25km|32分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "满38减13,满68减25,满98减38,满1.."
        },
        {
          Zimg: require("@/assets/images/index/shenhuo.jpeg"),
          Zname: "神火烧烤",
          Zpingfen: 4.3,
          Zpeisong: "￥0 起送|配送费￥5",
          Zdingdan: "月售3122单",
          ZhuodongNum: "3个活动",
          Ztime: "2.67km|36分钟",
          Zhuodong1: "新用户下单立减12元",
          Zhuodong2: "满25减12,满45减21,满60减30"
        },
        {
          Zimg: require("@/assets/images/index/zhizun.jpeg"),
          Zname: "至尊比萨(天河店)",
          Zpingfen: 4.2,
          Zpeisong: "￥20起送|免配费",
          Zdingdan: "月售1084单",
          ZhuodongNum: "3个活动",
          Ztime: "1.36km|28分钟",
          Zhuodong1: "新用户下单立减17元",
          Zhuodong2: "新客特价商品1元起"
        }
      ]
    };
  },
  methods: {
    go() {
      this.$router.push("/detailspage");
    },
    onLoad() {
      // 异步更新数据 axios 请求数据
      const Llists = {
        Zimg: require("@/assets/images/index/maidanglao.jpeg"),
        Zname: "麦当劳麦乐送(广州华穗路...)",
        Zpingfen: 4.0,
        Zpeisong: "￥0 起送|配送费￥9",
        Zdingdan: "月售1084单",
        ZhuodongNum: "3个活动",
        Ztime: "1.36km|28分钟",
        Zhuodong1: "新用户下单立减17元",
        Zhuodong2: "新客特价商品1元起"
      };

      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.Zlists.push(Llists);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        this.num++;
        if (this.num > 5) {
          this.finished = true;
        }
      }, 800);
    }
  }
};
</script>

<style lang="less">
.index-zonghe {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 150px;
      font-size: 12px;
      .con1 {
        display: flex;
        width: 100%;
        .z-img {
          flex: 1;
          box-sizing: border-box;

          img {
            width: 80%;
            height: 80%;
            margin: 5px auto;
          }
        }
        .z-con {
          flex: 3;
          padding: 5px;
          p {
            margin-bottom: 4px;
            span {
              margin-left: 3px;
            }
          }
          .z-name {
            font-size: 13px;
            font-weight: bold;
            overflow: wrap;
          }
          .z-more {
            float: right;
          }
          .z-time {
            float: right;
          }
        }
      }
      .con2 {
        width: 100%;
        display: flex;
        .null {
          flex: 1;
        }
        .z-huodong {
          flex: 3;

          padding: 5px;
        }
      }
    }
  }
}
</style>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dingdanflag: true,
  },
  mutations: {},
  actions: {},
  modules: {
    mailesong: {
      state: {
        price: 0,
        number: 0,
        ordernumber: 0,
        numflag: false,
        payflag: false,
        classflag: false,
        showprice: false,
        loginrouter:"/gerenzhongxin",
        currentrouter: "/home",
        foodLists: [],
        foodcarcon: [],
        orderlists: [],
        foodcarArr:[],
        addressArr: [
          {
            address: "广东信息工程职业学院",
            username: "陈子豪",
            phonenumber: "17817925360",
            gender: "先生",
          },
          {
            address: "清华大学",
            username: "陈彦祖",
            phonenumber: "17817925360",
            gender: "先生",
          }

        ],
        addresscon: {
          address: "广东信息工程职业学院",
          username: "陈子豪",
          phonenumber: "17817925360",
          gender: "先生",

        },
        foodsdetailed: {
          foodimg: "",
          foodname: "",
          foodsales: "月售23份 好评率100%",
          foodprice: "28.9",
          foodtext: "",
        },
        orderdetailspage: {
          content: "",
          price: "",
          address: "",
          username: "",
          phonenumber: "",
          gender: "",
          time: "",
        }
      },
      mutations: {},
      actions: {},
      getters: {},
      modules: {},
    }
  }
});

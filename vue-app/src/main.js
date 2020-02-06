import Vue from "vue";
import router from "./router";
import store from "./store";
import Mint from "mint-ui";
import Vant from "vant";
import "swiper/dist/css/swiper.css";
import "vant/lib/index.css";
import "./assets/font/iconfont.css";
import "amfe-flexible";
import App from "./App.vue";

import axios from "axios";
// 统一配置全局路径
// axios.defaults.baseURL = "http://192.168.54.33:3000";
axios.defaults.baseURL = "http://39.106.225.11:8888";
Vue.prototype.$axios = axios;

Vue.use(Mint);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

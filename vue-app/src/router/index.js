import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Faxian from "../views/Faxian.vue";
import Dingdan from "../views/Dingdan.vue";
import Gerenzhongxin from "../views/Gerenzhongxin.vue";
import Querendingdan from "../views/Querendingdan.vue"
import Register from "../views/Register.vue";
import Swiper from "../views/Swiper.vue";
import Advertisement from "../views/Advertisement.vue";
import Login from "../views/Login.vue";
import Detailspage from "../views/Detailspage.vue";
import Search from "../views/Search.vue";
import Address from "../views/Address.vue";
import NewAddress from "../views/NewAddress.vue";
import Orderdetailspage from "../views/Qrderdetailspage.vue";

Vue.use(VueRouter);

import Cube from 'cube-ui'
Vue.use(Cube)


const routes = [
  { path: "/", redirect:"/swiper"},
  { path: "/swiper",component: Swiper },
  { path: "/advertisement", component: Advertisement },
  { path: "/home", component: Home },
  { path: "/faxian", component: Faxian },
  { path: "/dingdan", component: Dingdan },
  { path: "/gerenzhongxin", component: Gerenzhongxin },
  { path: "/login", component: Login },
  { path: "/detailspage", component: Detailspage },
  { path: "/querendingdan", component: Querendingdan },
  { path: "/register", component: Register },
  { path: "/search", component: Search },
  { path: "/address", component: Address },
  { path: "/newaddress", component: NewAddress },
  {path:"/orderdetailspage",component:Orderdetailspage}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

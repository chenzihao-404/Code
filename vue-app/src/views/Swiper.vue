<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img  src="@/assets/images/yindao/yindao1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img  src="@/assets/images/yindao/yindao2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img  src="@/assets/images/yindao/yindao3.jpg" alt />   
        </div>
           <div class="swiper-slide">
          <img  src="@/assets/images/yindao/yindao4.jpg" alt />
        </div>
           <div class="swiper-slide"  @click="go">
          <img  src="@/assets/images/yindao/yindao5.jpg" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
    data(){
        return{
            flag:true
        }
    },
  methods: {
    go() {
      this.$router.push("/home");
    }
  },
  created() {
    if (localStorage.one) {
      this.$router.push("/advertisement");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
      var _this = this;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
            _this.flag = false;
        },
         slideChangeTransitionEnd: function() {
            _this.flag = true;
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}

</style>

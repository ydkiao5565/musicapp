<template>
  <div class="swipercom">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

import { getBanners } from "@/api/index.js";

export default {
  name: "SwiperComponent",
  data() {
    return {
      imgs: [
        { pic: require("../assets/img/swiper2.jpg") },
        { pic: require("../assets/img/swiper1.png") },
        { pic: require("../assets/img/swiper3.png") },
        { pic: require("../assets/img/swiper4.jpg") },
        { pic: require("../assets/img/swiper5.jpg") },
      ],
    };
  },
  components: {},
  created() {},
  async mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
    let res = await getBanners(1);
    this.imgs = res.data.banners;
  },
  methods: {},
};
</script>
<style >
.swipercom {
  width: 7.5rem;
}
.swiper-container {
  /* padding: 0 0.2rem; */
  width: 7.1rem;
  height: 2.65rem;
  border-radius: 0.1rem;
}
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background-color: orangered;
}
</style>

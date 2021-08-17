<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <div class="swiper-container" id="musicList">
        <div class="swiper-wrapper">
          <router-link :to="{path:'/listView',query:{id: item.id}}"
            class="swiper-slide"
            v-for="(item, index) in state.musicList"
            :key="index"
          >
            <img :src="item.picUrl" :alt="item.name" />
            <div class="title">{{ item.name }}</div>
            <div class="count">{{ changValue(item.playCount) }}</div>
          </router-link>
        </div>
        <!-- Add Pagination -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

import { getMusicList } from "@/api/index.js";
import { reactive, onMounted, onUpdated } from "vue";

export default {
  setup() {
    let state = reactive({musicList:[]});
    function changValue(num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    onMounted(async() => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    onUpdated(() => {
      var swiper = new Swiper("#musicList", {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      state,
      changValue,
    };
  },
};

// export default {
//   name: "MusicList",
//   data() {
//     return {
//       musicList: []
//     };
//   },
//   components: {},
//   created() {},
//   async mounted() {
//     let res = await getMusicList()
//     this.musicList = res.data.result
//   },
//   updated() {
//     var swiper = new Swiper('#musicList', {
//       slidesPerView: 3,
//       spaceBetween: 10,

//     });
//   },
//   methods: {
//     changValue(num) {
//       let res =0
//       if(num>100000000) {
//         res = num/100000000
//         res = res.toFixed(2) + '亿'
//       }
//       else if(num>10000) {
//         res = num/10000
//         res = res.toFixed(2) + '万'
//       }
//       return res
//     }
//   },
// };
</script>
<style scoped>
.musicList {
  width: 7.5rem;
  padding: 0.2rem;
}
.musicList .musicList-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.musicList-top .title {
  font-size: 0.4rem;
  font-weight: 900;
}
.musicList-top .more {
  padding: 0.05rem 0.15rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.4rem;
  font-size: 0.3rem;
  font-weight: 500;
}
.mlist {
  margin: 0.2rem 0;
}
.mlist .swiper-container {
  width: 100%;
  height: 3rem;
}
.swiper-container .swiper-slide {
  /* background-color: lightpink; */
  display: flex;
  flex-direction: column;
  position: relative;
}
.swiper-slide img {
  width: 100%;
  height: auto;
  border-radius: 0.1rem;
}
.swiper-slide .name {
  height: 0.6rem;
  width: 100%;
  font-size: 0.24rem;
  line-height: 0.4rem;
}
.swiper-slide .count {
  position: absolute;
  right: 0.01rem;
  top: 0.01rem;
  color: #fff;
}
</style>

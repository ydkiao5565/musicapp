<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang-black"></use>
        </svg>
        <div class="text">
          <span class="title">播放全部</span>
          <span class="num">（共{{ playlist.tracks.length }}首）</span>
        </div>
      </div>
      <div class="btn">
        + 收藏（{{ changValue(playlist.subscribedCount) }}）
      </div>
    </div>

    <div class="list" v-for="(item, index) in playlist.tracks" :key="index">
      <div class="left">
        <div class="index">{{ index + 1 }}</div>
        <div class="content">
          <div class="title">{{ item.name }}</div>
          <div class="anthors">
            <!-- <span class="tags" v-for="(tag , index3) in item.tags" :key="index3">{{tag}}</span> -->
            <span
              class="anthor"
              v-for="(item2, index2) in item.ar"
              :key="index2"
              >{{ item2.name + " " }}</span
            >
          </div>
        </div>
      </div>
      <div class="right">
        <svg class="icon bofang" aria-hidden="true" @click="setPlayIndex(index); changePaused()">
          <use xlink:href="#icon-bofangshu"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-black"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PlayList",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    changValue(num) {
      let res = num;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    },
    ...mapMutations(["setPlayIndex"]),
    
  },
  props: ["playlist"],
};
</script>
<style scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.1rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-top: 0.4rem;
}
.playlist-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
}
.playlist-top .left {
  display: flex;
  align-items: center;
}
.left .icon {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.2rem;
}
.left .text {
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
}
.left .title {
  font-size: 0.4rem;
}
.left .num {
  font-size: 0.3rem;
  color: #ccc;
}
.btn {
  font-size: 0.25rem;
  color: #fff;
  background-color: red;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.4rem;
  padding: 0 0.1rem;
}
.playlist .list {
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.list .left {
  display: flex;
  align-items: center;
  margin-left: 0.15rem;
}
.left .content {
  margin-left: 0.4rem;
}
.left .index {
  font-size: 19px;
  width: 0.2rem;
}
.content .title {
  font-weight: 900;
  font-size: 19px;
}
.content .anthors .anthor {
  font-size: 14px;
  color: #999;
}
.list .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right svg {
  width: 0.5rem;
  height: 0.5rem;
  fill: rgb(151, 151, 151);
}
.right .bofang {
  margin-right: 0.3rem;
}
</style>

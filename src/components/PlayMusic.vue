<template>
  <div class="playMusic">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
    ></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scorll" direction="left">{{
            playDetail.al.name
          }}</marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div v-show="!isLyric" class="playContent">
      <img class="disc" src="@/assets/img/quan.png" alt="" />
      <img
        class="needle"
        :class="{ active: !paused }"
        src="@/assets/img/needle-ab.png"
        alt=""
      />
      <img class="playImg" :src="playDetail.al.picUrl" alt="" />
    </div>
    <div v-show="isLyric" class="playLyric" ref="playLyric">
      <p
        :class="{
          active:
            currentTime * 1000 < parseInt(item.next) &&
            currentTime * 1000 >= parseInt(item.time),
        }"
        v-for="(item, index) in $store.getters.lyricList"
        :key="index"
      >
        {{ item.lyric }}
      </p>
    </div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige" @click="goPlay(-1)"></use>
      </svg>
      <svg
        v-if="paused"
        class="icon play"
        aria-hidden="true"
        @click="playMusic()"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="playMusic()">
        <use xlink:href="#icon-caozuo-bofang-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou" @click="goPlay(1)"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayMusic",
  data() {
    return {
      isLyric: true,
    };
  },
  props: ["playDetail", "paused", "playMusic"],
  components: {},
  created() {},
  mounted() {},
  methods: {
    goPlay(num) {
      // console.log(num)
      // console.log(this.playlist)
      // console.log(this.playCurrentIndex)
      let index = this.playCurrentIndex+num
      if(index<0) {
        index = this.playlist.length - 1
      }else if(index == this.playlist.length) {
        index = 0
      }
      this.$store.commit('setPlayIndex', index)
    }
  },
  computed: {
    ...mapState(["lyric", "currentTime","playlist","playCurrentIndex"]),
  },
  watch: {
    currentTime() {
      let p = document.querySelector("p.active");
      if (p) {
        let offsetTop = p.offsetTop;

        if (offsetTop >= 262) {
          this.$refs.playLyric.scrollTop = offsetTop - 262;
        }
      }
    },
  },
};
</script>
<style scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.playMusic .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  filter: blur(60px);
}
.playTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  height: 1.2rem;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  padding: 0 0.2rem;
  font-size: 0.35rem;
}
.playTop .icon {
  width: 0.6rem;
  height: 0.6rem;
}
.playTop marquee {
  width: 5rem;
}
.playContent {
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  left: 0;
  top: 1.5rem;
}
.playContent .needle {
  width: 2rem;
  height: auto;
  position: absolute;
  left: 3.5rem;
  transform-origin: 0.3rem 0.3rem;
  transform: rotate(-30deg);
  transition: all 0.75s;
}
.playContent .needle.active {
  width: 2rem;
  height: auto;
  position: absolute;
  left: 3.5rem;
  transform-origin: 0.3rem 0.3rem;
  transform: rotate(0deg);
  transition: all 0.75s;
}
.playContent .disc {
  width: 5.5rem;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.8rem;
}
.playContent .playImg {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.75rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.8rem;
}
.playFooter {
  width: 7.5rem;
  height: 1.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
}
.playFooter .icon {
  width: 0.5rem;
  height: 0.5rem;
}
.playFooter .play {
  width: 1rem;
  height: 1rem;
}
.playLyric {
  position: absolute;
  left: 0;
  top: calc(50% - 35vh);
  width: 7.5rem;
  height: 70vh;
  overflow: scroll;
  text-align: center;
  color: #fff;
  
  color: rgba(255, 255, 255, 0.6);

  scroll-behavior: smooth;
  transition: all 0.5s;
}
.playLyric .active {
  color: #fff;
}
.playLyric p {
  font-size: 0.4rem;
  margin: 0.2rem 0;
}
</style>

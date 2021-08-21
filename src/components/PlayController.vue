<template>
  <div class="playController">
    <div class="left" @click="show = !show">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg v-show="paused" class="icon" aria-hidden="true" @click="playMusic">
        <use xlink:href="#icon-bofang-black"></use>
      </svg>
      <svg v-show="!paused" class="icon" aria-hidden="true" @click="playMusic">
        <use xlink:href="#icon-caozuo-bofang-zanting-black"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao1"></use>
      </svg>
    </div>
    <play-music
      :playMusic="playMusic"
      :paused="paused"
      @back="show = !show"
      v-show="show"
      :playDetail="playlist[playCurrentIndex]"
    ></play-music>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PlayMusic from "@/components/PlayMusic.vue";
export default {
  name: "PlayController",
  data() {
    return {
      paused: true,
      show: false,
    };
  },
  components: { PlayMusic },
  created() {},
  mounted() {
    
    // console.log(this.$refs.audio)
  },
  methods: {
    playMusic() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.paused = false;
        this.UpdateTime();
      } else {
        this.$refs.audio.pause();
        this.paused = true;
        clearInterval(this.$store.state.id)
      }
    },
    UpdateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit("setCurrentTime", this.$refs.audio.currentTime);
      }, 1000);
    },
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  updated() {
    this.$store.dispatch("reqLyric", {
      id: this.playlist[this.playCurrentIndex].id,
    });

    console.log(this.playlist[this.playCurrentIndex]);
  },
};
</script>
<style scoped>
.playController {
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff;
  z-index: 99;
}
.playController .left {
  display: flex;
  padding: 0 0.2rem;
  align-items: center;
}
.playController .left img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
}
.playController .left .content {
  padding: 0 0.2rem;
}
.content .tips {
  font-size: 0.2rem;
  color: #999;
}
.playController .right {
  display: flex;
  align-items: center;
}
.playController .right .icon {
  margin: 0 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
}
</style>

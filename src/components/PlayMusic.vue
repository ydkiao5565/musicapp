<template>
  <div class='playMusic'>
    <div class="bg" :style="{backgroundImage: `url(${playDetail.al.picUrl})`}"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-arrowLeft"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scorll" direction="left">{{playDetail.al.name}}</marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent">
      <img class="disc" src="@/assets/img/quan.png" alt="">
      <img class="needle" src="@/assets/img/needle-ab.png" alt="">
      <img class="playImg" :src="playDetail.al.picUrl" alt="">
    </div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayMusic',
  data(){
    return {}
  },
  props: ['playDetail'],
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
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
</style>

<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-component></swiper-component>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import SwiperComponent from "@/components/SwiperComponent"
import IconList from "@/components/IconList.vue"
import MusicList from "@/components/MusicList.vue"

export default {
  name: "Home",
  components: {
    TopNav,
    SwiperComponent,
    IconList,
    MusicList
  },
};
</script>
<style scoped>

</style>

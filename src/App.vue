<template>
  <router-view/>
  <play-controller></play-controller>
</template>

<script>
import PlayController from '@/components/PlayController.vue'
export default {
  components: {
    PlayController
  },  
  mounted() {
    let userData = JSON.parse(localStorage.userData)
    this.$store.commit('setUser',userData)
  }
}
  
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
a {
  color: #000;
  text-decoration: none;
}
</style>

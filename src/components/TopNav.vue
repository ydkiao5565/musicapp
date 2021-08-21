<template>
  <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBth">我的</span>
        <span class="navBth active">发现</span>
        <span class="navBth">云村</span>
        <span class="navBth">视频</span>
      </div>
      <div class="topRight" @click="$router.push('/searchview')">
        <svg class="icon serch" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.topNav {
  width: 7.5rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
}
.topNav .icon {
  width: 0.5rem;
  height: 0.5rem;
}
.topNav .serch {
  width: 0.4rem;
  height: 0.4rem;
}
.topCenter {
  width: 4.5rem;
  display: flex;
  justify-content: space-around;
}
.topCenter .active {
  font-weight: 900;
}
</style>

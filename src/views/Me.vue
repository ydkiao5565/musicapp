<template>
  <div class="me">
    <div class="meTop">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft-black"></use>
        </svg>
        <h1 class="nickname">{{nickname}}</h1>
        </div>
        <div class="about">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao-black"></use>
          </svg>
        </div>
    </div>
    <div class="head">
      <div class="touxiang">
        <img :src="headimgUrl" alt="">
      </div>
      <div class="message">
        <div class="top">
          <div class="fun">
            <p class="count">1</p>
            <p>粉丝</p>
          </div>
          <div class="focus">
            <p class="count">2</p>
            <p>关注</p>
          </div>
          <div class="level">
            <p class="count">3</p>
            <p>等级</p>
          </div>
        </div>
        <div class="buttom">
          <p>编辑信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/api/index.js"
export default {
  name: 'Me',
  data(){
    return {
      headimgUrl: this.$store.state.user.theUserDetail.profile.avatarUrl,
      nickname: this.$store.state.user.theUserDetail.profile.nickname
    }
  },
  components: {},
  created(){},
  async mounted(){
    let res = await getMusicList(10)
    console.log(res)
  },
  methods: {}
}
</script>
<style scoped>
.meTop {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
}
.back {
  display: flex;
  padding-left: 0.2rem;
}
.meTop .icon {
  width: 0.5rem;
  height: 0.5rem;
}
.back .nickname {
  margin-left: 0.25rem;
  font-size: 0.4rem;
}
.touxiang img {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
}
.head {
  width: 7.5rem;
  height: 1.6rem;
  display: flex;
  padding: 0 0.5rem;
  margin: 0.4rem 0;
}
.head .message {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0.4rem;
}
.head .message .top {
  display: flex;
  justify-content:space-around;
}
.head .message .buttom {
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
}
.message .buttom p {
  width: 100%;
  padding: 0.1rem 0;
  text-align: center;
  border:1px solid #ccc;
  border-radius: 16.5px;
}
.top .count {
  text-align: center;
}
</style>

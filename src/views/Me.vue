<template>
  <div class=''>
    <div class="touxiang">
      <img :src="$store.state.user.theUserDetail.profile.avatarUrl" alt="">
    </div>
    <div class="nickname">
      <h1>{{$store.state.user.theUserDetail.profile.nickname}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
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
</style>

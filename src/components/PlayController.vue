<template>
  <div class="playController">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{playlist[playCurrentIndex].al.name}}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao1"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "PlayController",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapState(['playlist','playCurrentIndex'])
  }
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

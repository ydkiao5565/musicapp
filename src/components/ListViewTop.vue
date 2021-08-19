<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl">
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon serch" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl">
        <span>{{ changValue(playlist.playCount) }}</span>
      </div>
      <div class="contentRight">
        <h3>{{playlist.name}}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header">
          <span>{{playlist.creator.nickname}}</span>
          <div class="borderr"></div>
        </div>
        <div class="description">
          {{playlist.description}}
        </div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
        <div class="title">{{playlist.commentCount}}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <div class="title">{{playlist.shareCount}}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <div class="title">下载</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <div class="title">多选</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListViewTop",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    changValue(num) {
      let res =0
      if(num>100000000) {
        res = num/100000000
        res = res.toFixed(2) + '亿'
      }
      else if(num>10000) {
        res = num/10000
        res = res.toFixed(2) + '万'
      }
      return res
    }
  },
  props: ['playlist']
};
</script>
<style scoped>
.listViewTop {
  width: 7.5rem;
  padding: 0 0.4rem;
  /* height: 6rem; */
}
.listViewTop .bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 7.5rem;
  height: auto;
  z-index: -1;
  filter: blur(40px);
}
.listViewTopNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  font-size: 0.35rem;
}
.listViewTopNav .title {
  color: #fff;
  margin-left: 0.4rem;
}
.listViewTopNav .serch {
  margin-right: 0.5rem;
}
.listViewTopNav .icon {
  width: 0.5rem;
  height: 0.5rem;
  fill: #fff;
}
.listViewTopNav .back,.right {
  display: flex;
}
.content {
  padding: 0.6rem 0;
  display: flex;
  justify-content:space-between;
}
.contentLeft {
  position: relative;
}
.contentLeft img {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 0.1rem;
}
.contentLeft span {
  position: absolute;
  top: 0;
  right: 0.05rem;
  color: #fff;
  font-size: 0.24rem;
}
.contentRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3.5rem;
}
.contentRight h3 {
  color: #fff;
}
.contentRight .author {
  display: flex;
  align-items: center;
}
.author .header {
  margin-right: 0.15rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
}
.author span {
  color: #ccc;
}
.borderr {
  margin-left: 0.08rem;
  width: 0.16rem;
  height: 0.16rem;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  transform: translateY(0.05rem) rotateZ(45deg);
}
.description {
  font-size: 0.24rem;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.iconList {
  display: flex;
  justify-content: space-around;
}
.iconList .iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconItem .icon {
  width: 0.5rem;
  height: 0.5rem;
}
.iconItem .title {
  color: #fff;
  padding-top: 0.1rem;
}
</style>

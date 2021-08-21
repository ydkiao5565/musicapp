<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft-black"></use>
        </svg>
      </div>
      <div class="right">
        <input type="text" v-model="searchKeyWord" :placeholder="placeholder" @keydown.enter="saveKeyWord">
      </div>
    </div>
    <div class="history" v-show="searchSongs.length ==0">
      <div class="historyLeft">
        历史
      </div>
      <div class="historyRight">
        <div @click="historySearch(item)" class="keywordItem" v-for="(item,index) in keywordList" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
  <div class='searchSongs' v-show="searchSongs.length !== 0">
    <div class="searchSongs-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang-black"></use>
        </svg>
        <div class="text">
          <span class="title">播放全部</span>
          <span class="num">（共{{searchSongs.length}}首）</span>
        </div>
      </div>
      <!-- <div class="btn">+ 收藏（{{changValue(searchSongs.subscribedCount)}}）</div> -->
    </div>

    <div class="list" v-for="(item , index) in searchSongs" :key="index">
      <div class="left">
        <div class="index">{{index + 1}}</div>
        <div class="content">
          <div class="title">{{item.name}}</div>
          <div class="anthors">
            <!-- <span class="tags" v-for="(tag , index3) in item.tags" :key="index3">{{tag}}</span> -->
            <span class="anthor" v-for="(item2 , index2) in item.artists" :key="index2">{{item2.name + ' '}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <svg class="icon bofang" aria-hidden="true" @click="setPlay(item,index)">
          <use xlink:href="#icon-bofangshu"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-black"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {searchMusic} from '@/api/index.js'
export default {
  name: "SearchTop",
  data() {
    return {
      placeholder: '让风告诉你',
      keywordList: [],
      searchKeyWord: '',
      searchSongs: []
    };
  },
  beforeMount(){
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods:{
    async saveKeyWord(){
      this.keywordList.push(this.searchKeyWord)
      this.keywordList = Array.from(new Set(this.keywordList))
      if(this.keywordList>10) {
        this.keywordList = this.keywordList.slice(this.keywordList.length-10,this.keywordList.length)
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      let res = await searchMusic(this.searchKeyWord)
      console.log(res)
      this.searchSongs = res.data.result.songs
    },
    historySearch(keyword) {
      this.searchKeyWord = keyword
      this.saveKeyWord()
    },
    setPlay(item,index) {
      item.al = item.album
      item.al.picUrl = item.album.artist.img1v1Url
      this.$store.commit('pushPlaylist',item)
      this.$store.commit('setPlayIndex',this.$store.state.playlist.length-1)
    }
  }
};
</script>
<style scoped>
.searchTop {
  width: 7.5rem;
  padding: 0 0.4rem;

}
.searchTop .searchTopNav {
  display: flex;
  width: 100%;
  height: 1.2rem; 
  align-items: center;
}
.searchTopNav .icon {
  width: 0.6rem;
  height: 0.6rem;
}
.right  {
  padding: 0 0 0 0.4rem;
  flex: 1;
}
.right input {
  border: none;
  outline: none;
  border-bottom: 1px solid #666;
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
}
.history {
  display: flex;
  align-items: center;
}
.history .historyLeft {
  width: 1rem;
  height: 0.8rem;
  font-weight: 900;
  line-height: 0.8rem;
}
.history .historyRight {
  color: #666;
  display: flex;
  flex-wrap: wrap;
  flex: 1;

}
.historyRight .keywordItem {
  background-color: #eee;
  height: 0.8rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
  line-height: 0.8rem;
  margin: 0.1rem 0.1rem;
}
.searchSongs {
  width: 7.5rem;
  padding: 0 0.1rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-top: 0.4rem;
}
.searchSongs-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  margin-left: 0.2rem;
}
.searchSongs-top .left {
  display: flex;
  align-items: center;
}
.searchSongs-top .left .icon {
  width: 0.5rem;
  height: 0.5rem;
}
.searchSongs-top .left .text {
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
}
.searchSongs-top .left .title {
  font-size: 0.4rem;
}
.searchSongs-top .left .num {
  font-size: 0.3rem;
  color: #ccc;
}
.btn {
  font-size: 0.25rem;
  color: #fff;
  background-color:red;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.4rem;
  padding: 0 0.1rem;
}
.searchSongs .list {
  display: flex;  
  justify-content: space-between;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.list .left {
  display: flex;
  align-items: center;
  margin-left: 0.15rem;
}
.list .left .content {
  margin-left: 0.4rem;
}
.list .left .index {
  font-size: 19px;
  width: 0.2rem;
}
.content .title {
  font-weight: 900;
  font-size: 19px;
}
.content .anthors .anthor {
  font-size: 14px;
  color: #999;
}
.list .right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.list .right svg {
  width: 0.5rem;
  height: 0.5rem;
  fill: rgb(151, 151, 151)
}
.list .right .bofang {
  margin-right: 0.3rem;
}
</style>

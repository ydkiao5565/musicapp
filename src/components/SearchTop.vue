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
    <div class="history">
      <div class="historyLeft">
        历史
      </div>
      <div class="historyRight">
        <div class="keywordItem" v-for="(item,index) in keywordList" :key="index">{{item}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "SearchTop",
  data() {
    return {
      placeholder: '让风告诉你',
      keywordList: [],
      searchKeyWord: ''
    };
  },
  beforeMount(){
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods:{
    saveKeyWord(){
      this.keywordList.push(this.searchKeyWord)
      localStorage.keywordList = JSON.stringify(this.keywordList)
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
</style>

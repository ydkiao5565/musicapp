import { createStore } from 'vuex'
import { getLyric } from '@/api/index.js'
import { phoneLogin } from '@/api/index.js'
import { userDetail } from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      id: 123954657, name: "追",
      al: {
        id: 123954657,
        name: "追",
        pic: 109951165787117940,
        picUrl: "http://p4.music.126.net/Q9T83RN_me6ZpcIk9DVSYg==/109951165787117942.jpg",
        pic_str: "109951165787117942"
      }
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account: {},
      theUserDetail: {}
      }
    },
  getters: {
    lyricList(state) {
      let arr = state.lyric.split(/\n/igs).map((item,index,arr)=> {
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill = item.slice(7,10)
        // console.log(min,sec,mill)
        return {
          min,sec,mill,
          lyric:item.slice(10,item.length),
          content:item,
          time:parseInt(mill) + parseInt(sec)*1000 + parseInt(min)*60*1000
        } 
      })
      arr.forEach((item,index)=> {
        if(index==arr.length-1){
          item.next = arr[length-1]
        }else {
          item.next = arr[index+1].time
        }
      })
      console.log(arr)
      return arr
    }
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },
    pushPlaylist(state, value) {
      state.playlist.push(value)
    },
    setPlayIndex(state,value) {
      state.playCurrentIndex = value
    },
    setLyric(state,value) {
      state.lyric = value
    },
    setCurrentTime(state,value) {
      state.currentTime = value
    },
    setUser(state,value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      let res = await getLyric(payload.id)
      content.commit('setLyric',res.data.lrc.lyric)
    },
    async phoneLogin(content, payload) {
      // console.log(payload)
      let res = await phoneLogin(payload.phone,payload.password)
      console.log(res)
    
      if(res.data.code === 200) {
        content.state.user.isLogin = true
        content.state.user.account = res.data.account

        let theUserDetail = await userDetail(res.data.account.id)
        content.state.user.theUserDetail = theUserDetail.data
        localStorage.userData = JSON.stringify(content.state.user)

        console.log(theUserDetail)
        content.commit('setUser',content.state.user)
      }
      return res
    }
  },
  modules: {
  }
})

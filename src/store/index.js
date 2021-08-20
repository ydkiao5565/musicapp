import { createStore } from 'vuex'

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
    playCurrentIndex: 0
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },
    setPlayIndex(state,value) {
      state.playCurrentIndex = value
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [{al:{}}],
    playCurrentIndex: 0
  },
  mutations: {
    setPlaylist(state,value) {
      state.playlist = value
    }
  },
  actions: {
  },
  modules: {
  }
})

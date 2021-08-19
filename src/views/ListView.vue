<template>
  <div class='listView'>
    <list-view-top :playlist="state.playlist"></list-view-top>
    <play-list :playlist="state.playlist"></play-list>
  </div>
</template>

<script>
import ListViewTop from "@/components/ListViewTop"
import PlayList from "@/components/PlayList"
import {getPlaylistDetail} from "@/api/index.js"
import { onMounted,reactive } from 'vue'
import {useRoute} from 'vue-router'
import store from '@/store/index.js'
export default {
  setup() {
    const route = useRoute()
    let state = reactive({list:[],playlist:{creator:{},tracks:[]}})
    onMounted(async()=> {
      // console.log(route.query.id)
      let res = await getPlaylistDetail(route.query.id)
      // this.list = res
      console.log(res)
      state.playlist = res.data.playlist
      store.commit('setPlaylist',state.playlist.tracks)
    })
    return {
      state
    }
  },
  components: {
    ListViewTop,
    PlayList
  },
  
}
</script>
<style scoped>
</style>

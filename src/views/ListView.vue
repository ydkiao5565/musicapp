<template>
  <div class='listView'>
    <list-view-top :playlist="state.playlist"></list-view-top>
  </div>
</template>

<script>
import ListViewTop from "@/components/ListViewTop"
import {getPlaylistDetail} from "@/api/index.js"
import { onMounted,reactive } from 'vue'
import {useRoute} from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    let state = reactive({list:[],playlist:{creator:{}}})
    onMounted(async()=> {
      // console.log(route.query.id)
      let res = await getPlaylistDetail(route.query.id)
      // this.list = res
      console.log(res)
      state.playlist = res.data.playlist
    })
    return {
      state
    }
  },
  components: {
    ListViewTop
  },
  
}
</script>
<style scoped>
</style>

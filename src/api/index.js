import axios from "axios"

// 0.pc
// 1.android  2.iphone  3.ipad
export function getBanners(type=0) {
  return axios.get(`http://localhost:3000/banner?type=${type}`)
}

export function getMusicList(limit=10) {
  return axios.get(`http://localhost:3000/personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`http://localhost:3000/playlist/detail?id=${id}`)
}
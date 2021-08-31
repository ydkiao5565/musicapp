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

//获取歌词
export function getLyric(id) {
  return axios.get(`http://localhost:3000/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keyword) {
  return axios.get(`http://localhost:3000/search?keywords=${keyword}`)
}

//手机登录
export function phoneLogin(phone,password) {
  return axios.get(`http://localhost:3000/login/cellphone?phone=${phone}&password=${password}`)
}

//获取用户详情

export function userDetail(uid) {
  return axios.get(`http://localhost:3000/user/detail?uid=${uid}`)
}

//获取用户等级
export function getUserSubcount() {
  return axios.get(`http://localhost:3000/user/subcount`)
}
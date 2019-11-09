import axios from '@/axios.js'
import urls from './urls'

let api = {
  login (params) {
    return axios.get(urls.login, params)
  },
  register (params) {
    return axios.get(urls.register, params)
  },
  search () {
    return axios.get(urls.search)
  },
  searchHotWord (params) {
    return axios.get(urls.searchHotWord, params)
  },
  nav () {
    return axios.get(urls.nav)
  },
  resultsByKeywords () {
    return axios.get(urls.resultsByKeywords)
  },
  cityList () {
    return axios.get(urls.cityList)
  },
  hotCity () {
    return axios.get(urls.hotCity)
  },
  province () {
    return axios.get(urls.province)
  },
  recentCity () {
    return axios.get(urls.recentCity)
  },
  goodsList () {
    return axios.get(urls.goodsList)
  },
  recommend () {
    return axios.get(urls.recommend)
  },
  classify () {
    return axios.get(urls.classify)
  },
  areaList () {
    return axios.get(urls.areaList)
  },
  getPosition () {
    return axios.get(urls.getPosition)
  },
  detail () {
    return axios.get(urls.detail)
  }
}
export default api

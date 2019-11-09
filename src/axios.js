import axios from 'axios'
// axios请求基础的域名
axios.defaults.baseURL = 'http://open.duyiedu.com'
// 添加拦截请求器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    // 把原有的params解构赋值
    ...config.params,
    appkey: '13926806277_1558879000128'
  }
  // console.log(config);
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios

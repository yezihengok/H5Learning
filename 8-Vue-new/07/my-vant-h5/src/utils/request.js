// 此处编写 axios 封装模块
/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
import { delToken, getToken } from './storage'
import router from '@/router'

// 创建一个新的axios实例
const request = axios.create({
   baseURL: 'http://interview-api-t.itheima.net/h5/', // 请求基地址
  timeout: 5000 // 超时时间
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么, 统一携带token
  // config就是请求对象，对config的处理，就是对最终发出请求的处理
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么，去掉了默认的一层 axios 包装
  return response.data
}, function (error) {
  // 对响应错误做点什么
  // 如果有错误响应的消息，直接统一给提示
  if (error.response) {
    // token过期了
    if (error.response.status === 401) {
      Toast('登录状态过期，请重新登录！')
      delToken() // 清除token
      router.push('/login')
    } else {
      Toast(error.response.data.message)
    }
  }
  return Promise.reject(error)
})

export default request

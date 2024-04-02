// 在这里封装请求的函数
import request from '@/utils/request'

// const register = (obj) => {
//   return request.post('/user/register', obj)
// }

// 注册请求函数
export const register = obj => request.post('/user/register', obj)

// 登录请求函数
export const login = obj => request.post('/user/login', obj)

// 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}

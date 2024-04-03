// 在这里封装请求的函数
import request from '@/utils/request'

// const register = (obj) => {
//   return request.post('/user/register', obj)
// }

// 注册请求
// export function registerAPI(data) {
//   return request({
//     method: 'POST',
//     url: '/h5/user/register',
//     data: data
//   })
// }

// 注册请求函数
export const register = obj => request.post('/h5/user/register', obj)

// 登录请求函数
export const login = obj => request.post('/h5/user/login', obj)

// 获取用户信息
export const getUserInfo = () => {
  return request('/h5/user/currentUser')
}

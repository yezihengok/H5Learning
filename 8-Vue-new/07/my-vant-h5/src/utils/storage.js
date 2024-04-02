// 此处会将token的操作进行封装，避免页面中，因为写错键名，导致项目出错
// 以后，遇到重复性的storage键，推荐将重复的key提取成一个常量
const key = 'hm-vant-mobile-token'

export const setToken = (newToken) => {
  localStorage.setItem(key, newToken)
}

export const getToken = () => {
  return localStorage.getItem(key)
}

export const delToken = () => {
  localStorage.removeItem(key)
}

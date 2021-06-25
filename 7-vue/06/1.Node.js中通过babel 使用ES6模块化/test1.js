let a = 10
let c = 20
let d = 30

function show() {
  console.log('1111111111111')
}
//在一个模块中,只允许使用export default向外默认暴露一次成员,不要写多个export default  
export default {
  a,
  c,
  show
}

//按需导出,导出指定的 变量 方法
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('ooooooooo')
}

// export default {
//   d
// }

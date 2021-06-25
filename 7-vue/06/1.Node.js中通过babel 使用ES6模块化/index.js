//按需导入  ,指定的值
import test1, {
     s1,
     s2 as ss2,
     say
 } from './test1.js'

console.log(test1)
 console.log('-----------------');
 console.log(s1)
 console.log(ss2)
 say()

 
//直接导入并执行代码
import './test2.js'
 
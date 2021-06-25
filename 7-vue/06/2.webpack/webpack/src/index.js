import $ from "jQuery"
//因为import $ from "jquery";这句代码属于ES6的新语法代码，在浏览器中可能会存在兼容性问题 所以我们需要webpack来帮助我们解决这个问题。

import Vue from 'vue'
// 导入单文件组件
import App from './components/App.vue'

$('li:odd').css('backgroundColor', 'blue')
$('li:even').css('backgroundColor', 'lightblue')

//创建Vue实例对象并指定el，最后使用render函数渲染单文件组件
const vm = new Vue({
    el: '#app',
    render: h => h(App)
})
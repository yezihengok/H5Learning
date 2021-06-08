// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，会先调用 ajaxPrefilter 
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    // options.url = 'http://www.liulongbin.top:3007' + options.url
    options.url = BASE_URL + options.url
    // 统一为有权限的接口，设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // ajax不论成功还是失败都会 回调complete函数
    options.complete = function (res) {
        console.log("返回的json:" + JSON.stringify(res.responseJSON))
        //使用 res.responseJSON 拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 强制清空 token
            localStorage.removeItem('token')
            //强制跳转到登录页面
            //location.href = '/login.html'

            //如果A页面用iframe嵌套了B页面，需要加上parent，才能让A页面整个跳转。否则会在iframe里跳转
            parent.location.href = '/login.html'
        }

        num++
        if (num % 2 === 0) {


        }
    }

})

var num = 0;
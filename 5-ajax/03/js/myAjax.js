function httpReq(option) {
    var xhr = new XMLHttpRequest();
    //把传进来的参数对象转换成 查询字符串
    var params = getParams(option.data)

    // 设置 超时时间毫秒
    xhr.timeout = 3000
    // 设置超时以后的处理函数
    xhr.ontimeout = option.timeout

    //GET请求
    if (option.method.toUpperCase() == "GET") {
        xhr.open(option.method, option.url + "?" + params)
        xhr.send()
        //POST请求
    } else if (option.method.toUpperCase() == "POST") {
        xhr.open(option.method, option.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(params)
    }


    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText)
            option.success(result)
        }
    }
}


/**
 * 将对象参数 转换成 查询字符串:  name=张三&age=18
 * @param {*Object} obj 
 * @returns 
 */
function getParams(obj) {
    var arr = [];
    for (const key in obj) {
        var str = key + "=" + obj[key];
        arr.push(str)
    }
    return arr.join("&")
}
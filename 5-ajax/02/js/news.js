$(function () {

    function padZero(n) {
        return n < 10 ? '0' + n : n
    }

    // 定义格式化时间的过滤器
    template.defaults.imports.dateFormat = function name(dateStr) {
        var date = new Date(dateStr);
        var y = date.getFullYear()
        var m = padZero(date.getMonth() + 1)
        var d = padZero(date.getDate())

        var hh = padZero(date.getHours())
        var mm = padZero(date.getMinutes())
        var ss = padZero(date.getSeconds())
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }

    function getNewsList() {
        $.ajax({
            type: "GET",
            url: "http://www.liulongbin.top:3006/api/news",
            success: function (res) {
                console.log(JSON.stringify(res));
                if (res.status !== 200) {
                    return alert('获取新闻数据失败！')
                }
     
                $.each(res.data, function (i, item) {
                    // 把字符串转换成数组"tags":"华为,苹果,5G网络"
                    item.tags = item.tags.split(',');
                })

                console.log(res)
                var htmlStr = template('scp-news', res)
                $('#news-box').html(htmlStr)
            }
        })
    }
    getNewsList();
    // var htmlStr = $("#scp-news").html()
    // $('#news-box').html(htmlStr)
})
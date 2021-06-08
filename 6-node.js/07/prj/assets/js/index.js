$(function () {
    var layer = layui.layer
    getUserInfo()

    $('.btn-logout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', {
            icon: 3,
            title: '提示'
        }, function (index) {
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'
            // 关闭 confirm 询问框
            layer.close(index)
        })
    })
})

// 获取用户的基本信息 
function getUserInfo() {
    console.log("getUserInfo()===>");
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败！')
            }
            localStorage.setItem('userinfo', JSON.stringify(res.data))
            //获取用户的头像
            getAvatar(res.data)
        }
    })
}

function getAvatar(user) {
    //获取用户的名称
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        //图片头像
        $('.layui-nav-img').attr('src', BASE_URL + user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        //文本头像
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
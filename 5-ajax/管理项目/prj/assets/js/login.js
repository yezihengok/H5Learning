$(function () {

    $("#link_register").on("click", function () {
        $(".login-box").hide();
        $(".register-box").show();

    })
    $("#link_login").on("click", function () {
        $(".login-box").show();
        $(".register-box").hide();
    })

    // 从 layui 中获取 form 对象
    var form = layui.form
    var layer = layui.layer
    //  form.verify() 函数自定义校验规则
    form.verify({
        // 自定义一个叫做 pwd 校验规则 
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //校验两次密码是否一致的规则
        repwd: function (value) {
            var pwd = $('.register-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    //注册表单的提交事件
    $("#form_reg").on("submit", function (e) {
        e.preventDefault(); // 阻止form默认的提交行为
        var req = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.post('/api/reguser', req, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            $('#link_login').click()
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').on("submit", function (e) {
        e.preventDefault()
        var req = $(this).serialize(); //快速获取表单中的数据
       
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: req,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                //将登录成功得到的 token 字符串，保存到 localStorage 中
                localStorage.setItem("token", res.token)
                // 跳转到主页
                location.href = "/index.html"
            }
        })
    })


})
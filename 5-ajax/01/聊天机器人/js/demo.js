$(function () {
    //初始化右侧滚动条 这个方法定义在scroll.js中
    resetui()
    $(".btnSend").on("click", function () {
        var text = $('.iptMsg').val().trim()
        if (text.length <= 0) {
            return
        }
        //将聊天内容追加到页面上显示
        $(".ul-list").append('<li class="right"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        $('.iptMsg').val('')
        // 重置滚动条的位置
        resetui()
        getMessage(text)
    })

    /**
     *  获取聊天机器人发送回来的消息
     * @param {*} params 
     */
    function getMessage(params) {
        var req = {
            spoken: params
        };
        $.ajax({
            method: 'GET',
            url: ' http://www.liulongbin.top:3006/api/robot',
            data: req,
            success: function (res) {
                console.log(JSON.stringify(res))
                if (res.message === 'success') {
                    // 接收聊天消息
                    var msg = res.data.info.text
                    $('.ul-list').append('<li class="left"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
                    // 重置滚动条的位置
                    resetui()
                    getVoice(msg)
                }
            }
        })
    }

    /**
     * 把文字转化为语音进行播放
     * @param {*} params 
     */
    function getVoice(params) {
        $.ajax({
            method: 'GET',
            url: ' http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: params
            },
            success: function (res) {
                // console.log(res)
                if (res.status === 200) {
                    // 播放语音
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }

    //为文本框绑定键盘 keyup 事件
    $(".iptMsg").on("keyup", function (e) {
        if (e.keyCode == 13) {
            $(".btnSend").click();
        }
    })
})
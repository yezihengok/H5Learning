$(function () {

    getCommentList();

    function getCommentList() {
        $.ajax({
            method: "GET",
            url: "http://www.liulongbin.top:3006/api/cmtlist",
            success: function (res) {
                if (res.status !== 200) return alert('获取评论列表失败！')
                var rows = [];
                $.each(res.data, function (i, item) {
                    var str = '<li class="list-group-item"><span class="badge" style="background-color: #84c43b;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #eeb86c;">评论人：' + item.username + '</span>' + item.content + '</li>'
                    rows.push(str)
                })
                $(".list-group").empty().append(rows.join(""));
            }
        })
    };

    console.log($("#formAddCmt")[0]);

    $("#formAddCmt").on("submit", function (e) {
        e.preventDefault();
        var req = $(this).serialize();
        console.log(req);
        $.post("http://www.liulongbin.top:3006/api/addcmt", req, function (res) {
            if (res.status !== 201) {
                return alert('发表评论失败！')
            }
            getCommentList();
            //清空表单的值
            $('#formAddCmt')[0].reset()
        })
    })
})
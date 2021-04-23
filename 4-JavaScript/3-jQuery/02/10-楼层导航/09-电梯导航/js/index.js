$(function () {
    // 当我们点击了li页面处于滚动中时，避免执行scroll里再次设置addClass("current")，导致经过的li背景依次变色，
    //因此在动画执行完的情况下才能执行scroll 监听里的背景变色
    var flag = true;

    /**
     *
     * @returns 当前页面卷（ 滚） 进去的距离
     */
    var docScrollTop = function () {
        return $(document).scrollTop();
    }
    /**
     * 楼层距离顶部的距离
     */
    var toolstop = $(".floor").offset().top;

    // toggleTool();

    // 1.显示隐藏电梯导航
    function toggleTool() {
        console.log("docScrollTop=" + docScrollTop());
        //页面卷进去的距离>=楼层的位置
        if (docScrollTop() >= toolstop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    // 2. 页面滚动到某个内容区域，左侧楼层导航li相应添加和删除current类名
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, element) {
                if (docScrollTop() >= $(element).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            });
        }
    });

    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var target = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("html,body").stop().animate({
            scrollTop: target
        }, function () {
            flag = true;
        });

        $(this).addClass("current").siblings().removeClass("current");
    })
})
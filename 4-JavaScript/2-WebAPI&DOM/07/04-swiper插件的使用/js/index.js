window.addEventListener('load', function () {
    //更多具体属性参见： https://www.swiper.com.cn

    var swiper = new Swiper('.swiper-container', {
        //每个图片间隔
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        ////可选选项，自动滑动
        autoplay: {
            //没3s切换一起吃
            delay: 3000,

            //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            //如果设置为false， 用户操作swiper之后自动切换不会停止， 每次都会重新启动autoplay。
            disableOnInteraction: false,
        },

        //分页器导航。分页器可使用小圆点样式（默认）、以及其他样式
        pagination: {
            //分页器容器的css选择器或HTML标签。分页器等组件可以置于container之外，不同Swiper的组件应该有所区分，如#pagination1，#pagination2。
            el: '.swiper-pagination',
            //小圆点是否可以点击
            clickable: true,
        },

        //on:注册事件
        on: {
            slideChange: function () {
                //activeIndex返回当前活动块(激活块)的索引。loop模式下注意该值会被加上复制的slide数。
                console.log(this.activeIndex);
            },
            tap: function (swiper, event) {
                // realIndex当前活动块的索引，与activeIndex不同的是，在loop模式下不会将复制的块的数量计算在内。
                alert(`你点击了第${this.realIndex}个`);
            },
        },
        //前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
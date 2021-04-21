var div = document.querySelector('.date');
getTimer()
setInterval(getTimer, 1000);

function getTimer() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var dates = time.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = time.getDay();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    div.innerHTML = '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day] + h + ':' + m + ':' + s;


    //============倒计时==================

    // 获取天时分秒的盒子
    var spanDay = document.getElementById('day');
    var spanHour = document.getElementById('hour');
    var spanMinute = document.getElementById('minute');
    var spanSecond = document.getElementById('second');

    // 目标时间的时间戳
    var targetDate = new Date('2020-11-11 0:0:0');

    //目标的年份设置为当前年份
    targetDate.setFullYear(new Date().getFullYear());

    // 开启定时器
    setInterval(countdown, 1000);
    countdown();

    function countdown() {
        // 当前时间的时间戳（毫秒）
        var nowDate = new Date().getTime();
        // 计算时间差 秒
        var leftTime = (targetDate.getTime() - nowDate) / 1000;

        var day = Math.floor(leftTime / 60 / 60 / 24);
        var hour = Math.floor(leftTime / 60 / 60 % 24);
        var minute = Math.floor(leftTime / 60 % 60);
        var second = Math.floor(leftTime % 60);

        // 设置盒子的内容
        spanDay.innerText = day;
        spanHour.innerText = hour;
        spanMinute.innerText = minute;
        spanSecond.innerText = second;
    }
}
const format = require('./files/dateFormat')


let num=0;
const time=setInterval(() => {
    const date = new Date();
    const timeStr = format.dateFormat(date)
    console.log(`现在时间：${timeStr}`);

    num++;
    if (num == 10) {
        console.log('-----------定时器已关闭-------------');
        clearInterval(time)
    }
}, 1000)
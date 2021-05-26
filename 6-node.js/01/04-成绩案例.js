const fs = require('fs')
//readFile读取文件
fs.readFile('./files/resource/考试分数.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败：' + err.message);
    }

    //把字符串按空格 分割
    let oldArr = dataStr.split(' ')
    let newArr = []
    oldArr.forEach(item => {
        newArr.push(item.replace('=', '：'))
    })
    //数组在装换为字符串，每个元素里添加\r\n换行
    let newStr = newArr.join('\r\n')
    //写入到新的文件里
    fs.writeFile('./files/分数New.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败：' + err.message);
        }
        console.log("文本处理成功~");
    })
})
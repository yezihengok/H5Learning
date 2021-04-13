/**
 * 得到两个数之间的随机整数(包含这2个整数)
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.warn('=============1.1 数组操作=================');
// ​描述：把下面数组的首尾两个元素互换
var arr = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"];

console.log('内容翻转:' + arr.reverse());
var newArr = [];

function myReverse(array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
}
console.info(myReverse(arr));



console.warn('=============1.2 计算指定日期是今年的第几天==========');
//  题目描述： 制作一个函数， getDayNum(年月日日期)， 可以返回指定日期是当前年的第几天
// ​ 例： getDayNum(“2019 - 1 - 2”) 返回值为： 2 

function getDayNum(dateStr) {
    var nowDate = new Date(dateStr);
    /*     var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDay(); */
    // 构造1月1日
    var lastDay = new Date(dateStr);
    lastDay.setMonth(0);
    lastDay.setDate(1);
    // 获取距离1月1日过去多少天
    //nowDate - lastDay 得出来的是 毫秒数, +1是两者相除= 0 开始算 1天
    var num = (nowDate - lastDay) / (24 * 60 * 60 * 1000) + 1;
    return num
}
console.info(getDayNum('2021-02-05'));



console.warn('=============1.3 16进制随机颜色值=================');
//  题目描述： 使用Math对象， 制作一个16进制的随机颜色
// ​ 题目提示： 16 进制包括“ 0 1 2 3 4 5 6 7 8 9 A B C D E F”
// ​ 例：“#f23a4b”
function getRandomColor() {
    var colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    var color = '#'
    for (var i = 0; i < 6; i++) {
        var random = getRandom(0, colorArr.length - 1);
        color = color.concat(colorArr[random]);
    }
    return color;
}
console.log(getRandomColor());



console.warn('=============1.4 字符串操作=================');
// 字符串：“abaasdffggghhjjkkgfddsssss354343”， 问题如下：

// 1、 字符串的长度
var str = 'abaasdffggghhjjkkgfddsssss354343';
console.log('str.length=' + str.length);

// 2、 取出指定位置的字符， 如： 0, 3, 5, 9 等
console.log('0=' + str.charAt(0) + ' 3=' + str.charAt(3) + ' 5=' + str.charAt(5) + ' 9=' + str.charAt(9));

// 3、 查找指定字符是否在以上字符串中存在， 如： i， c， b等
console.log(str.indexOf('i') == -1 ? 'i不存在' : 'i存在');
console.log(str.indexOf('c') == -1 ? 'c不存在' : 'c存在');
console.log(str.indexOf('b') == -1 ? 'b不存在' : 'b存在');

// 4、 替换指定的字符， 如： g替换为22, ss替换为b等操作方法
console.log(str.replace('g', 22)); //只替换1个
while (str.indexOf('ss') !== -1) { //替换所有
    str = str.replace('ss', 'b');
}
console.log(str);

// 5、 截取指定开始位置到结束位置的字符串， 如： 取得1 - 5 的字符串
console.log(str.substring(0, 5));

// 6、 遍历字符串， 并将遍历出的字符两头添加符号“ @”
var arrString = [];
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    arrString[i] = '@' + element + '@';
}
console.log(arrString);

// 7、 找出以上字符串中出现次数最多的字符和出现的次数
var obj = {}; //定义一个空对象 用来存 字符 与次数

// for (var i = 0; i < str.length; i++) {
//     var chars = str.charAt(i);
// }
//在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach()  ,循环体内可以使用break、continue
for (var char of str) {
    // obj[chars] 得到的是属性值
    if (obj[char]) {
        obj[char]++;
    } else {
        //对象里没有该属性，则添加该属性并赋值 1
        obj[char] = 1
    }
}
console.log(obj);
var maxStr = ''; //出现次数最多的字符
var max = 0; //最多字符的次数
for (const key in obj) {
    console.info(key);
    if (obj[key] > max) {
        maxStr = key;
        max = obj[key];
    }
}
console.log('出现次数最多的字符是：' + maxStr + '出现次数：' + max);



console.warn('=============1.5 随机选学员=================');
// 从以下学员名单中随机选出4个学员：
// 注意： 不要有重复的学员
var arr = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"];

var newArr = [];
var num = 0;
while (num < 4) {
    var names = arr[getRandom(0, arr.length - 1)]; //本次随机抽取的姓名
    var hasRepaet = false; //是否存在重复的
    console.log('本次随机抽取的是：' + names);
    if (num > 0) {
        for (var str of newArr) {
            if (names == str) {
                console.log(`【${names}】已存在，不加入`);
                hasRepaet = true;
            }
        }
    }

    if (!hasRepaet) {
        console.log('本次加入的是：' + names);
        newArr[num] = names
        num++;
    }
}
console.log(newArr);



console.warn('=============1.6 随机打乱排序=================');
// 对以下学员随机排序， 生成一个新数组：
var arr1 = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"];

// 每次循环获取数组中的一个随机数， 与当前循环的最后一个元素换位置，
// 直到只剩最后一个元素没得换位置， 结束循环。
// 即： 从已有的元素中随机找出一个元素固定在最后， 依次循环。
function shuffle(arr) {
    var length = arr.length,
        randomIndex,
        temp;
    while (length) {
        randomIndex = Math.floor(Math.random() * (length--));
        temp = arr[randomIndex];
        arr[randomIndex] = arr[length];
        arr[length] = temp
    }
    return arr;
}
console.log(shuffle(arr1));
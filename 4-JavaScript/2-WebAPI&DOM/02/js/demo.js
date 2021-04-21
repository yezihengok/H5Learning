var addBtn = document.getElementById('addBtn');
var delBtn = document.getElementById('delBtn');
var tboby = document.getElementById('tbd');

addBtn.onclick = function () {
    var uname = document.getElementById('mName');
    var email = document.getElementById('email');
    if (uname.value == '' || email.value == '') {
        alert('请输入姓名以及email')
        return;
    }
    // 创建一行
    var tr = document.createElement('tr');
    // 创建列，添加到行中
    var td1 = document.createElement('td');
    td1.innerHTML = uname.value;
    var td2 = document.createElement('td');
    td2.innerHTML = email.value;
    //行里添加2个td 列
    tr.appendChild(td1);
    tr.appendChild(td2);

    tboby.appendChild(tr);
}

delBtn.onclick = function () {

    var childrens = tboby.children;
    if (childrens.length == 0) {
        alert('列表的内容已经被删完了哦！');
    }
    //每次删除最后一个子元素
    var delChildren = childrens[childrens.length - 1];
    tboby.removeChild(delChildren);

}
var listBox = document.getElementById('listBox');
var outBox = document.getElementById('outBox');
var list = document.querySelectorAll('.option');

outBox.onmouseover = function () {
    listBox.style.opacity = 1;
    // listBox.style.display = 'block';
}
outBox.onmouseout = function () {
    listBox.style.opacity = 0;
    // listBox.style.display = 'none';
}

for (let index = 0; index < list.length; index++) {
    const a = list[index];
    a.onclick = function () {
        listBox.style.opacity = 0;
        alert(`你选择了${a.textContent}`);
    }

}
window.addEventListener("load", function () {
    var mTab;
    class Tab {
        constructor(elementId) {
            mTab = this;
            this.main = document.querySelector(elementId);
            this.add = this.main.querySelector(".tabAdd");
            // li的父元素
            this.ul = this.main.querySelector('section ul:first-child');
            this.content = this.main.querySelector(".content");
            this.tabNum = this.ul.children.length + 1; //tab当前的数字
            this.init();

        }
        init() {

            this.updateNode()
            this.add.addEventListener('click', this.addTab);
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].addEventListener('click', this.toggleTab);
                this.remove[i].addEventListener('click', this.deleteTab);
                this.spans[i].addEventListener('dblclick', this.updateTab);
            }
        }

        // 因为动态添加元素 需要从新获取对应的元素
        updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.cons = this.main.querySelectorAll('.content div');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('section li span:first-child');
        }

        addTab() {

            var tabCount = mTab.ul.children.length;
            if (tabCount >= 10) {
                alert("不能添加更多了!");
                return
            }
            var li = `<li><span>标签${mTab.tabNum}</span><a class="iconfont icon-guanbi"></a></li>`;
            //把这个元素追加到对应的父元素里面
            mTab.ul.insertAdjacentHTML('beforeend', li);
            // mTab.ul.innerHTML = li;

            var div = `<div>我是Tab${mTab.tabNum}的内容</div>`;
            mTab.content.insertAdjacentHTML('beforeend', div);
            mTab.tabNum++;
            mTab.init();

        }

        toggleTab() {
            console.log(this);
            for (var i = 0; i < mTab.lis.length; i++) {
                mTab.lis[i].className = '';
                mTab.cons[i].className = '';
            }
            this.className = 'active';
            mTab.cons[this.index].className = 'active';
        }

        deleteTab(e) {
            e.stopPropagation(); // 阻止冒泡 防止触发父元素li 的点击事件
            var tabCount = mTab.ul.children.length;
            console.log(`tabCount:${tabCount}`);
            if (tabCount <= 1) {
                alert("至少保留1个吧");
                return
            }
            var index = this.parentNode.index;
            console.log(index);
            mTab.lis[index].remove();
            mTab.cons[index].remove();
            // mTab.tabNum--;
            mTab.init();
        }

        updateTab() {
            // 双击禁止选定文字
            // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var str = this.innerHTML;
            this.innerHTML = '<input type="text" />';
            var input = this.children[0];
            input.value = str;
            input.select(); // 文本框选定状态
            input.addEventListener("blur", function () {
                this.parentNode.innerHTML = this.value;
            });
        }
    }

    new Tab("#tab");
})
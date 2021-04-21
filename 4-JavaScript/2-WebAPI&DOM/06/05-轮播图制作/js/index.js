window.addEventListener('load', function () {
    //1.获取元素
    var banner = document.querySelector('.banner');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var bannerWidth = banner.offsetWidth;

    //2.鼠标经过banner就显示隐藏左右按钮
    banner.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        clearInterval(timer);
        timer = null; // 清除定时器变量
    })
    banner.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    })

    //3.动态生成小圆圈  有几张图片，我就生成几个小圆圈
    var ul = banner.querySelector('ul');
    var ol = banner.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li'); // 创建一个li 
        // 记录当前小圆圈的索引号 通过自定义属性添加
        li.setAttribute('index', i);
        ol.appendChild(li); //li添加到ol里

        // 4. 在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下 当前的小li 设置current 类名
            this.className = 'current';

            //5.[核心重点] 点击小圆圈，移动图片 移动的是 ul 的移动距离 小圆圈的索引号 乘以 图片的宽度,注意是负值
            //为什么是负值？（因为这个ul的宽度很宽: 600 %,默认显示的1个宽度， 只是超出父盒子的部分都在右边 overflow: hidden了，因此负值就是让这个很宽ul左移，就能看到右边的其它li里的图片）
            var index = this.getAttribute('index'); //拿到当前小li 的索引号
            console.log(index + '--bannerWidth:' + bannerWidth);
            animate(ul, -(index * bannerWidth));

            // 当我们点击了某个小li 就要把这个li 的索引号给 picNum  
            picNum = index;

        })
    }

    // 把ol里面的第一个小li设置类名为 current，
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面（为了让轮播看起来是循环的，即切换到最后一张图片后在下一张显示的是第一张图片）
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 7.轮播图的索引，总数为实际图片+1(克隆多加了1张图片)
    var picNum = 0;

    //小圆点的索引，有几张图就有几个小圆点
    var circleNum = 0;

    // flag 标记,动画还没执行完之前不再执行相同重复的。即 防止轮播图按钮连续点击造成播放过快
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果(picNum==4)走到最后我们克隆的这张图片了，此时 我们的ul 要快速复原 left 改为 0
            if (picNum == ul.children.length - 1) {
                ul.style.left = 0;
                picNum = 0;
            }
            picNum++;
            animate(ul, -(picNum * bannerWidth), function () {
                flag = true;
            });

            //点击按钮 小圆圈跟随一起变化再声明一个变量控制小圆圈的播放
            circleNum++;
            // circleNum == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circleNum == ol.children.length) {
                circleNum = 0;
            }
            circleChange();
        }
    });

    function circleChange() {
        console.log(`当前显示第${picNum}个图片`);

        if (picNum >= ol.children.length) {
            console.log(`当前显示的是图片最后一张（即克隆的第一个图片）,实际圆点应显示第一个`);
            //pic实际图片数量比圆点多一个,此时索引切换到克隆的最后一张,圆点应显示第一个
        }
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 选中当前的小圆圈的current类名
        ol.children[circleNum].className = 'current';
    }

    // 8. 左侧按钮做法
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (picNum == 0) {
                picNum = ul.children.length - 1;
                ul.style.left = -(picNum * bannerWidth) + 'px';
            }
            picNum--;
            animate(ul, -(picNum * bannerWidth), function () {
                flag = true;
            });
            circleNum--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            if (circleNum < 0) {
                circleNum = ol.children.length - 1;
            }
            circleChange();
        }
    });


    // 9.自动播放轮播图，每2s下一张
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);



})
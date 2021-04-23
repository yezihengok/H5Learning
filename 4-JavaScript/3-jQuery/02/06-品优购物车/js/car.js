// require('jQuery')
$(function () {

    /**
     * 计算总价,选中了的商品才计算总价
     */
    function getSum() {
        var count = 0; // 总件数 
        var money = 0; // 总价
        var checkArr = []; //存放选中了的数组

        $(".itxt").each(function (i, element) {
            //获取当前商品数量文本框所对应的 checkbox 是否被选中了
            checkArr[i] = $(element).parents(".p-num").siblings(".p-checkbox").children(".j-checkbox").prop("checked");
            if (checkArr[i]) {
                count += parseInt($(element).val());
            }

        });
        console.log(checkArr);
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, element) {
            if (checkArr[i]) {
                money += parseFloat($(element).text().substr(1));
            }
        });
        console.log("money==" + money);
        $(".price-sum em").text("￥" + money.toFixed(2));

    }


    // 1. 全选 全不选功能模块 事件可以使用change
    $(".checkall").change(function () {
        //是否全选了
        var ischeckall = $(this).prop("checked");
        console.log("全选状态：" + ischeckall);

        //当点击全选checkbox ，把所有checkbox的状态都跟随 当前点击的checkbox
        $(".j-checkbox, .checkall").prop("checked", ischeckall);
        if (ischeckall) {
            //选中时添加 所有都添加 check-cart-item，改变背景
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        checkNum = $(".j-checkbox:checked").length;
        console.log("当前选中了几个：" + checkNum);
        getSum();
    });

    var checkNum = $(".j-checkbox:checked").length; //当前选中了几个

    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上 ,否则不全选
    $(".j-checkbox").change(function () {
        checkNum = $(".j-checkbox:checked").length;
        console.log("当前选中了几个：" + checkNum);
        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });

    // 3. +-商品数量模块
    $(".increment").click(function () {
        // 得到当前兄弟元素：文本框的值
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);

        var price = $(this).parents(".p-num").siblings(".p-price").html();
        console.log("当前商品的价格:" + price);

        price = price.substr(1);
        // 当前商品的总格 price =根据文本框的值 * 当前商品的价格  
        var price = (price * num).toFixed(2); //toFixed 保留2位小数点
        console.log("当前商品总价:" + price);

        //更新小计
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });

    $(".decrement").click(function () {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        //更新小计
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (price * num).toFixed(2));
        getSum();
    });

    //  4. 用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function () {
        // 先得到文本框的里面的值 乘以 当前商品的单价 
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function () {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove();
        getSum();
    });

    // (2) 删除选中的商品
    $(".remove-batch").click(function () {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })

})
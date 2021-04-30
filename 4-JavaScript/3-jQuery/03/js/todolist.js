$(function () {
    loadData();
    $("#title").trigger("focus"); //获得焦点
    $("#title").on("keydown", function (event) {
        if (event.keyCode == 13) { //回车按键
            if ($(this).val() === "") {
                alert("请输入内容");
            } else {
                // 先获取本地存储的数据
                var data = getData();
                var obj = {
                    title: $(this).val(),
                    done: false
                }
                //把最新的数据追加给本地数组
                data.push(obj);
                saveData(data);
                $(this).val("");

            }
        }
    });

    //删除操作-
    $("ol,ul").on("click", "a", function () {
        // $(this).parent().remove();
        var index = $(this).attr("data-id");
        console.log(index);
        var data = getData();
        // 删除数组元素  splice(从哪个位置开始删除, 删除几个元素)
        data.splice(index, 1);
        saveData(data);
    });

    //checkbox 勾选操作（点击事件委派给type类型为checkbox 的input）
    $("ol,ul").on("click", "input[type=checkbox]", function () {
        console.log("checkbox 勾选操作");
        var data = getData();
        var index = $(this).siblings("a").attr("data-id");
        data[index].done = $(this).prop("checked");
        saveData(data);
    });


    $("ol,ul").on("click", "p", function () {
        console.log("p标签修改事件");
        var p = $(this);
        var index = $(this).siblings("a").attr("data-id");
        var title = $(this).text();
        var editInput = $(`<input value="${title}" class="editInput"/>`);
        p.html(editInput);
        editInput.focusEnd();
        $(editInput).on("blur", function () {
            if (input.value.length == 0) {
                alert("内容不能为空:");
                p.html(title);
            } else {
                var data = getData();
                data[index].title = editInput.val();
                saveData(data);

            }
        })
    });



    /**
     * 获取本地数据、返回的是数组
     * @returns Array
     */
    function getData() {
        var data = localStorage.getItem("todolist");

        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 JSON.parse转换对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
        //刷新加载
        loadData();
    }

    /**
     * 加载数据并设值
     */
    function loadData() {
        var data = getData();
        console.log(data);

        // 添加元素前先清空ol ul里面的元素内容
        $("ol, ul").empty();
        var todoNum = 0; // 正在进行的个数
        var doneNum = 0; // 已经完成的个数
        $.each(data, function (i, o) {
            if (o.done) {
                doneNum++;
                $("ul").prepend(`<li><input type='checkbox' checked='checked'> <p>${o.title}</p> <a href='javascript:;' data-id="${i}" ></a></li>`);
            } else {
                todoNum++;
                $("ol").prepend(`<li><input type='checkbox'> <p>${o.title}</p> <a href='javascript:;' data-id="${i}" ></a></li>`);
            }
        })
        $("#todocount").text(todoNum);
        $("#donecount").text(doneNum);
    }




    //jQuery设置聚焦并使光标位置在文字最后 (网上复制的,给jQuery添加扩展方法)
    $.fn.setCursorPosition = function (position) {
        if (this.lengh == 0) return this;
        return $(this).setSelection(position, position);
    }

    $.fn.setSelection = function (selectionStart, selectionEnd) {
        if (this.lengh == 0) return this;
        input = this[0];

        if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        } else if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        }

        return this;
    }

    $.fn.focusEnd = function () {
        this.setCursorPosition(this.val().length);
    }


})
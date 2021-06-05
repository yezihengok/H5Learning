$(function () {
  var layer = layui.layer

  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)

  // 为上传按钮绑定点击事件
  $('#btnChooseImage').on('click', function () {
    $('#file').click()
  })

  // 为文件选择框绑定 change 事件
  $('#file').on('change', function (e) {
    // 获取用户选择的文件
    var filelist = e.target.files
    if (filelist.length === 0) {
      return layer.msg('请选择照片！')
    }

    // 1. 拿到用户选择的文件
    var file = e.target.files[0]
    // 2. 将文件，转化为路径
    var imgURL = URL.createObjectURL(file)
    // 3. 重新初始化裁剪区域
    $image
      .cropper('destroy') // 销毁旧的裁剪区域
      .attr('src', imgURL) // 重新设置图片路径
      .cropper(options) // 重新初始化裁剪区域
  })

  // 为确定按钮，绑定点击事件
  $('#btnUpload').on('click', function () {
    // 1. 要拿到用户裁剪之后的头像
    var dataURL = $image
      .cropper('getCroppedCanvas', {
        // 创建一个 Canvas 画布
        width: 100,
        height: 100
      })
      // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
      .toDataURL('image/png')


    // 2. 调用接口，把头像上传到服务器
    // $.ajax({
    //   method: 'POST',
    //   url: '/my/update/avatar',
    //   data: {
    //     avatar: dataURL
    //   },
    //   success: function(res) {
    //     if (res.status !== 0) {
    //       return layer.msg('更换头像失败！')
    //     }
    //     layer.msg('更换头像成功！')
    //     window.parent.getUserInfo()
    //   }
    // })
    var formData = new FormData(); //这里需要实例化一个FormData来进行文件上传
    formData.append('avatar', dataURLtoBlob(dataURL), Date.now() + '.jpg');
    var user = JSON.parse(localStorage.getItem('userinfo'))
    formData.append('id', user.id)
    $.ajax({
      method: 'POST',
      url: '/my/update/avatar',
      data: formData,
      //不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
      processData: false,
      // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
      contentType: false,
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg('更换头像失败！')
        }
        layer.msg('更换头像成功！')
        window.parent.getUserInfo()
      }
    })

  })



  /**
   * base64文件 转Blob 
   * @param {*} url 
   * @returns 
   */
  function dataURLtoBlob(url) {
    var arr = url.split(','),
      mime = arr[0].match(/:(.*?);/)[1],

      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);

    }

    return new Blob([u8arr], {
      type: mime
    });

  }

})
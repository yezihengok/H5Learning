// 导入数据库操作模块
const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')
const multiparty = require('multiparty'); //文件上传模块

var fs = require('fs');
const path = require('path')

// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
  // 定义查询用户信息的 SQL 语句
  const sql = `select id, username, nickname, email, user_pic from ev_users where id=?`
  // 调用 db.query() 执行 SQL 语句
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err, 1, '执行 SQL 语句失败')
    // 执行 SQL 语句成功，但是查询的结果可能为空
    if (results.length !== 1) return res.cc('获取用户信息失败！')

    // 用户信息获取成功
    const userInfo = results[0]
    //将sql里存放的文件名拼接上图片的完整路径,返回给客户端
    // var new_name = path.join(__dirname, '../', './uploads/imgs/', userInfo.user_pic);
    // userInfo.user_pic = new_name;
    res.send({
      status: 0,
      message: '获取用户信息成功！',
      data: userInfo,
    })
  })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {

  const sql = `update ev_users set ? where id=?`
  // 调用 db.query() 执行 SQL 语句并传递参数
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err, 1, '执行 SQL 语句失败')
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！')
    res.cc('更新用户信息成功！', 0)
  })
}

// 更新用户密码的处理函数
exports.updatePassword = (req, res) => {
  // 根据 id 查询用户的信息
  const sql = `select * from ev_users where id=?`
  // 执行根据 id 查询用户的信息的 SQL 语句
  db.query(sql, req.user.id, (err, results) => {

    if (err) return res.cc(err, 1, '执行 SQL 语句失败')
    // 判断结果是否存在
    if (results.length !== 1) return res.cc('用户不存在！')

    // 判断密码是否正确
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if (!compareResult) return res.cc('旧密码错误！')


    const sql = `update ev_users set password=? where id=?`
    // 对新密码进行加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
    // 调用 db.query() 执行 SQL 语句
    db.query(sql, [newPwd, req.user.id], (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.cc(err, 1, '执行 SQL 语句失败')
      // 判断影响的行数
      if (results.affectedRows !== 1) return res.cc('更新密码失败！')
      // 成功
      res.cc('更新密码成功', 0)
    })
  })
}


//https://blog.csdn.net/gschen_cn/article/details/102795627

// 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {

  var sql_params = {};
  // don't forget to delete all req.files when done 
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({
    uploadDir: './uploads/imgs/' //设置文件储存路径
  });

  //上传完成后处理
  form.parse(req, function (err, fields, files) {
    //  fields; // 非文件项  files; // 文件

    console.log(fields);
    for (const item in fields) {
      console.log(`参数:${fields[item][0]}`)
    }
     sql_params.id = fields.id[0]

    var filesTmp = JSON.stringify(files, null, 2);
    if (err) {
      console.log('parse error: ' + err);
    } else {

      console.log('parse files: ' + filesTmp);
      // var inputFile = files.inputFile[0];
      var inputFile = files.avatar[0];
      var finalname = inputFile.originalFilename;
      sql_params.user_pic = `/uploads/imgs/${finalname}`
      
      //   使用 ../ 抵消前面的一个路径
      console.log(`测试路径========>${path.join(__dirname, '../', './uploads/imgs/')}`);

      //重命名为真实文件名
      // var new_name = __dirname + '/uploads/imgs/' + finalname; //获取文件名
      var new_name = path.join(__dirname, '../', './uploads/imgs/', finalname); //获取文件名

      console.log(`new_name:${new_name}`)
      var old_name = inputFile.path; //获取文件路径
      console.log(`old_name:${old_name}`)
      fs.renameSync(old_name, new_name);

      //保存sql
      const sql = `update ev_users set user_pic=? where id=?`
      //  调用 db.query() 执行 SQL 语句
      db.query(sql, [sql_params.user_pic, sql_params.id], (err, results) => {

        if (err) return res.cc(err, 1, '执行 SQL 语句失败')
        // 影响的行数是否等于 1
        if (results.affectedRows !== 1) return res.cc('更换头像失败！')
        res.cc('更换头像成功！', 0)
      })

    }
  });

}
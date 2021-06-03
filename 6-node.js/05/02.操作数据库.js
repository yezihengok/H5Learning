// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  port: '3306',
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'new_schema_01', // 指定要操作哪个数据库
})

//addUser2()
//updateUser()
deleteUser(11)

/**
 * 查询 users 表中所有的数据
 */
function getAllUser() {
  const sqlStr = 'select * from users'
  db.query(sqlStr, (err, results) => {
    // 查询数据失败
    if (err) return console.log(err.message)
    // 查询数据成功
    // 注意：如果执行的是 select 查询语句，则执行的结果是数组
    console.log(results)

    db.end() //不需要继续操作时,关闭
  })
}

/**
 * 向 users 表中， 新增一条数据
 */
function addUser() {
  const user = {
    username: '放点水',
    userpwd: 'pcc123'
  }
  const sqlStr2 = 'insert into users (username, userpwd) values (?, ?)'
  // 执行 SQL 语句
  db.query(sqlStr2, [user.username, user.userpwd], (err, results) => {
    // 执行 SQL 语句失败了
    if (err) return console.log(err.message)
    // 成功了
    // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入数据成功
    if (results.affectedRows === 1) {
      console.log('插入数据成功!')
      getAllUser()
    }
  })
}

/**
 * 插入数据的便捷方式
 */
function addUser2() {
  const user = {
    username: 'Spider-Man',
    userpwd: 'fdsfsfsf'
  }
  // 定义待执行的 SQL 语句
  const sqlStr = 'insert into users set ?'
  db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
      console.log('插入数据成功')
      getAllUser()
    }
  })
}


/**
 * 更新用户
 */
function updateUser() {
  const user = {
    id: 6,
    username: 'user66',
    userpwd: '10000'
  }
  // 定义 SQL 语句
  const sqlStr = 'update users set username=?, userpwd=? where id=?'
  // 执行 SQL 语句
  db.query(sqlStr, [user.username, user.userpwd, user.id], (err, results) => {
    if (err) return console.log(err.message)
    // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
    if (results.affectedRows === 1) {
      console.log('更新成功')
      getAllUser()
    }
  })
}

// 同样的 更新数据也有便捷方式：
/* const user = { id: 6, username: 'aaaa', userpwd: '0000' }
// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) */



/**
 * 删除用户
 * @param {用户ID} id 
 */
function deleteUser(id) {
  const sqlStr = 'delete from users where id=?'
  db.query(sqlStr, id, (err, results) => {
    if (err) return console.log(err.message)
    // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
    if (results.affectedRows === 1) {
      console.log('删除数据成功')
      getAllUser()
    } else {
      console.log("该id用户不存在~");
      db.end()
    }
  })
}

//标记 
// const sqlStr = 'update users set status=? where id=?'
// db.query(sqlStr, [1, 6], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('标记删除成功')
//   }
// })
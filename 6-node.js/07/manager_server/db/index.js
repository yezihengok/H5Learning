const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01',
  //Node mysql做了安全的限制,想要执行多条sql语句，需要打开对应开关配置
  multipleStatements: true
})

module.exports = db
// 文章的处理函数模块
const path = require('path')
const db = require('../db/index')

// 发布文章的处理函数
exports.addArticle = (req, res) => {
  console.log(req.file)
  if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数！')
  console.log(req.body);
  // TODO：证明数据都是合法的，可以进行后续业务逻辑的处理
  // 处理文章的信息对象
  const articleInfo = {
    // 标题、内容、发布状态、所属分类的Id
    ...req.body,
    // 文章封面的存放路径
    cover_img: path.join('/uploads', req.file.filename),
    // 文章的发布时间
    time: new Date().getTime(),
    // 文章作者的Id
    author_id: req.user.id,
    //  cate_name: getCate_name(req.body.cate_id)
  }

  getCate_name(req.body.cate_id, function (name) {
    articleInfo.cate_name = name
    const sql = `insert into ev_article_list set ?`
    db.query(sql, articleInfo, (err, results) => {
      if (err) return res.cc(err, 1, 'sql语句执行错误')
      if (results.affectedRows !== 1) return res.cc('发布新文章失败！')
      res.cc('发布文章成功！', 0)
    })
  })


}


// 获取分页文章list
exports.getArtCateList = (req, res) => {
  let status = req.query.status
  let cate_id = req.query.cate_id

  let extra_sql //额外的查询条件,非必传的参数
  if (status) extra_sql = ` and status=${status} `
  if (cate_id) extra_sql += ` and cate_id=${cate_id} `
  // 定义根据 ID 获取文章分类数据的 SQL 语句
  let pagenum = req.query.pagenum //前端请求第几页
  let pagesize = parseInt(req.query.pagesize) 
  let start = 0
  //pagenum 是从1开始
  if (pagenum > 1) {
    start = (pagenum - 1) * pagesize
  }

  //最基本的分页方式： SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ... 
  // limit 5,10，0开始计数，从第5条数据开始查询10条数据  即查询第6~15条数据,      
  console.log(`select * from ev_article_list where is_delete=0 order by id asc limit ${start},${pagesize}`);

  //  --SQL_CALC_FOUND_ROWS 是 mysql 的内置关键字， 可以记录下当前 sql 的总行数（ 受 where 影响， 但不受 limit 影响）
  //  --以下查询 分页数据的同时返回 数据的总数（看起来是两条SQL语句，但是实际上只执行了一次数据库查询。）
  //  select SQL_CALC_FOUND_ROWS * from ev_article_list where is_delete = 0 order by id asc limit 0, 2;
  //  SELECT FOUND_ROWS() as total;

  let sql = `select SQL_CALC_FOUND_ROWS * from ev_article_list where is_delete=0 order by id asc limit ${start},${pagesize};SELECT FOUND_ROWS() as total;`
   if (extra_sql) {
     console.log(`extra_sql===${extra_sql}`);
     sql = `select SQL_CALC_FOUND_ROWS * from ev_article_list where is_delete=0${extra_sql}order by id asc limit ${start},${pagesize};SELECT FOUND_ROWS() as total;`
   }
  console.log(`分页文章查询sql==========>${sql}`);

  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    //注意 此时results 数组会返回2个item ，第一个item 是查询到了文章列表集合，第二个item 是查询到的总数集合 里面就一个total
    console.log(results);
    /*   [
          [
            RowDataPacket {
              id: 4,
              title: 'a12',
              cate_name: '测试3',
              time: '1622801132703',
              status: 0,
              content: '123房贷',
              cate_id: 0,
              cover_img: null,
              author_id: 0,
              is_delete: 0
            },
            RowDataPacket {
              id: 5,
              title: 'a12',
              cate_name: '测试4',
              time: '1622801132703',
              status: 1,
              content: '释放',
              cate_id: 0,
              cover_img: null,
              author_id: 0,
              is_delete: 0
            }
          ],
          [RowDataPacket {
            total: 3
          }]
        ] */
    const responseObj = {
      status: 0,
      message: '获取文章列表成功！',
      data: results[0],
      total: results[1][0].total,
    }
    res.send(responseObj)
  })
}

/**
 * 根据id 删除文章(标记为删除状态，内容还可以找回来)
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteArticleById = (req, res) => {
  const sql = `update ev_article_list set is_delete=1 where id=?`
  db.query(sql, req.params.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')
    res.cc('删除文章分类成功！', 0)
  })
}

/**
 * 根据分类id 查找分类名称
 * @param {*} cate_id 
 */
function getCate_name(cate_id, callback) {
  const sql = `select * from ev_article_cate where id=?`
  db.query(sql, cate_id, (err, results) => {
    if (err) return res.cc(err, 1, 'sql语句执行错误~')
    const obj = results[0]
    callback && callback(obj.name);
  })
}
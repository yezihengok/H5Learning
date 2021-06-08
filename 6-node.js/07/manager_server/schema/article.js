const joi = require('@hapi/joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 分别定义 标题、分类Id、内容、发布状态的校验规则
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')
const status = joi.string().valid('0', '1').required()

const pagenum = joi.number().integer().min(1).required()
const pagesize = joi.number().integer().min(1).required()

const id = joi.number().integer().min(1).required()
// 验证规则对象 - 发布文章
exports.add_article_schema = {
  body: {
    title,
    cate_id,
    content,
    status,
  },
}

exports.delete_article_schema = {
  params: {
    id,
  }
}

const status2 = joi.required().allow('') //可以为空
const cate_id2 = joi.required().allow('') //可以为空
// 验证规则对象 - 获取文章list
exports.get_list_schema = {
  query: {
    pagenum,
    pagesize,
    cate_id: cate_id2,
    status: status2,
  },
}
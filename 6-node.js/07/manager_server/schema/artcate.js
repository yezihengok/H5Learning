// 1. 导入定义验证规则的模块
const joi = require('@hapi/joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 2. 定义 name 和 alias 的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// id 的校验规则
const id = joi.number().integer().min(1).required()

// 3. 向外共享验证规则对象

exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
}

// 验证规则对象 - 删除分类
exports.delete_cate_schema = {
  params: {
    id,
  },
}

// 验证规则对象 - 根据 Id 获取文章分类
exports.get_cate_schema = {
  params: {
    id,
  },
}

// 验证规则对象 - 更新分类
exports.update_cate_schema = {
  body: {
    id,
    name,
    alias,
  },
}


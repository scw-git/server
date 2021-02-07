// 商品类型模型

const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    type: { type: String },//商品类型
    desc: { type: String },//类型描述
})

module.exports = mongoose.model('productType', schema)
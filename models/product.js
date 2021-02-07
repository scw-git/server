//商品模型
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    type: { type: String },
    count: { type: Number },
    time: { type: String },
    desc: { type: String },
    imgUrl: { type: Array },
    recommend: { type: Boolean },

})
module.exports = mongoose.model('product', schema)
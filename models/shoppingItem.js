const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    userName: {
        type: String
    },
    name: {
        //商品名称
        type: String
    },
    price: { type: String },
    count: { type: Number },//购买的数量
    allCount: { type: Number },//库存
    time: { type: String },
    imgUrl: { type: String }
})
const shoppingItem = mongoose.model('shoppingItem', scheme)
module.exports = shoppingItem
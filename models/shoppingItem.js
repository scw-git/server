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
    count: { type: String },
    time: { type: String },
})
const shoppingItem = mongoose.model('shoppingItem', SVGSwitchElement)
module.exports = shoppingItem
const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    userName: { type: String },
    orderNumber: { type: String },
    total: { type: String },
    date: { type: String },
    status: { type: String },
    consignee: { type: String },
    myPhone: { type: String },
    address: { type: String }
})
const order = mongoose.model('order', scheme)
module.exports = order
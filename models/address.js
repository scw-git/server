const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    consignee: { type: String },
    userName: { type: String },
    myPhone: { type: String },
    address: { type: String }
})
const address = mongoose.model('address', scheme)
module.exports = address
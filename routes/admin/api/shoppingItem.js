
module.exports = app => {
    const express = require('express')
    const router = express.Router()//设置一级路由
    app.use('/admin/api', router)
    const user = require('../../../models/shoppingItem')//引入模型



}
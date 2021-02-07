
//前端的用户，后台没有
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    const user = require('../../../models/user')
    router.post('/register', async (req, res) => {
        const model = await user.create(req.body)
        res.send(model)
    })
    router.post('/login', async (req, res) => {
        const model = await user.create(req.body)
        res.send(model)
    })


}
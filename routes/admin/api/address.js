module.exports = app => {
    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    const address = require('../../../models/address')

    router.post('/address', async (req, res) => {
        const userName = req.body.userName
        // findOne 或者 findOneAndUpdate第一个参数都是对象。findByIdAndUpdate，字符串即可。
        const data = await address.findOne({ userName })
        if (data) {
            await address.findOneAndUpdate({ userName }, req.body, { 'new': true })
            res.send({
                status: 200,
                msg: '地址更新成功'
            })
        } else {
            await address.create(req.body)
            res.send({
                status: 200,
                msg: '地址创建成功'
            })
        }

    })
    router.get('/getAddress', async (req, res) => {
        const userName = req.query.userName
        const data = await address.findOne({ userName })
        if (data) {
            res.send(data)
        } else {
            res.send({
                status: 404,
                msg: '还没有地址'
            })
        }
    })


}
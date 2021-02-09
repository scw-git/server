module.exports = app => {
    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    const order = require('../../../models/order')

    router.post('/order', async (req, res) => {
        const data = await order.create(req.body)
        res.send([data])
    })
    router.get('/getOrder', async (req, res) => {
        const userName = req.query.userName
        const data = await order.find({ userName }).sort({ $natural: -1 })
        res.send(data)
        // console.log(data)
    })

    //更新支付状态
    router.put('/updateOrder', async (req, res) => {
        const userName = req.body.userName
        const orderNumber = req.body.orderNumber
        const status = req.body.status
        const data = await order.findOneAndUpdate({ userName, orderNumber }, { status }, { 'new': true })
        console.log(data)
        // const data = await order.create(req.body)
        // res.send([data])
    })


}
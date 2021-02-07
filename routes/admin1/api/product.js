module.exports = app => {

    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    //引入商品模型---------------------------------------------商品开始
    const product = require('../../../models/product')
    // 新增商品接口
    router.post('/product', async (req, res) => {
        const model = await product.create(req.body)
        res.send(model)
    })
    //商品查询接口（好像只有post有body）
    router.get('/product', async (req, res) => {
        const model = await product.find().limit()
        res.send(model)
    })
    //商品查询接口（有条件查询）
    router.get('/product/limit/:type', async (req, res) => {
        // console.log(req.params)
        const model = await product.find({ type: req.params.type }).limit()
        res.send(model)

    })
    //首页商品查询接口（有条件查询，只查10条）
    router.get('/product/limit/ten/:type', async (req, res) => {
        // console.log(req.params)
        const model = await product.find({ type: req.params.type }).limit(10)
        res.send(model)

    })

    //更新接口
    router.put('/product', async (req, res) => {
        const model = await product.findByIdAndUpdate(req.body._id, req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/product/:id', async (req, res) => {
        await product.findByIdAndDelete(req.params.id, req.body)
        res.send({
            status: 200,
            success: true,
        })
    })
    //商品接口---------------------------------------------商品结尾

}
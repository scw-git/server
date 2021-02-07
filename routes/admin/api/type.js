module.exports = app => {

    // 商品类型
    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    //引入商品类型的模型
    const productType = require('../../../models/productType')
    //新增商品类型接口
    router.post('/productType', async (req, res) => {
        const model = await productType.create(req.body)
        res.send(model)
    })
    //获取接口
    router.get('/productType', async (req, res) => {
        const items = await productType.find().limit(6)
        res.send(items)
    })
    //更新接口（id有下划线，根据请求参数里面的id更新内容。有些是根据路由里面的params.id更新，这种方法请求路径一定要哦加ID）
    router.put('/productType', async (req, res) => {
        const model = await productType.findByIdAndUpdate(req.body._id, req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/productType', async (req, res) => {
        await productType.findByIdAndDelete(req.query.id)
        res.send({
            status: 200,
            success: true,
        })
    })


}
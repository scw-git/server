
module.exports = app => {
    const express = require('express')
    const router = express.Router()//设置一级路由
    app.use('/admin/api', router)
    // 模型导出什么名字，就要用什么名字
    const shoppingItem = require('../../../models/shoppingItem')//引入模型

    // 加入购物车
    router.post('/shoppingItem', async (req, res) => {
        let id = req.body._id
        let item = await shoppingItem.findById(id)
        if (item === null) {
            const model = await shoppingItem.create(req.body)
            res.send(model)
        } else {
            // 必须要加 {'new':true}才能返回更新后的数据，否则是更新前都得数据
            // 不能用findOneAndUpdate，因为会把_id也会更新。而_id是不能修改的，所以会报错
            const m = await shoppingItem.findByIdAndUpdate(id, req.body, { 'new': true })
            res.send(m)
        }
    })
    // 获取购物车商品
    router.get('/shoppingItem', async (req, res) => {
        const userName = req.query.userName
        const data = await shoppingItem.find({ userName })
        res.send(data)
        // console.log(data)
    })

    router.delete('/shoppingItem', async (req, res) => {
        await shoppingItem.findByIdAndDelete(req.query.id)
        res.send({
            status: 200,
            success: true,
        })
    })

}
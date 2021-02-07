module.exports = app => {
    const express = require('express')
    const router = express.Router()
    app.use('/admin/api', router)
    const product = require('../../../models/product')

    // 新增商品接口
    router.post('/product', async (req, res) => {
        const model = await product.create(req.body)
        res.send(model)
    })
    //根据id查询详情信息
    router.get('/productDetail', async (req, res) => {
        let id = req.query.id
        let data = await product.findById(id)
        res.send(data)
    })
    //商品查询接口
    router.get('/product', async (req, res) => {
        let type = req.query.type//查询指定字段：{type:'手机'}
        let obj1 = req.query.type ? { type } : {}

        let recommend = req.query.recommend//查询推荐商品
        let obj2 = req.query.recommend ? { recommend } : {}

        // let obj = req.query.type ? obj1 : obj2
        let obj = { ...obj1, ...obj2 }
        // console.log(obj)

        let currentPage = req.query.currentPage || 1 //客户端传过来的当前页
        let limit = (req.query.limit) * 1 || null //每一页显示的条数，limit要转化为数字类型
        let start = (currentPage - 1) * limit || 0 //指定查询的起始位置
        let count = await product.countDocuments(obj)//获取对应商品所有的总条数，
        let total = Math.ceil(count / limit) //总分页数
        const data = await product
            .find(obj)
            .limit(limit)
            .skip(start)
        data.count = count
        res.send({ data, count, limit, currentPage, total })
    })
    //更新接口
    router.put('/product', async (req, res) => {
        const model = await product.findByIdAndUpdate(req.body._id, req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/product', async (req, res) => {
        await product.findByIdAndDelete(req.query.id)
        res.send({
            status: 200,
            success: true,
        })
    })
}
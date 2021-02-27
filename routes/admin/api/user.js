
//前端的用户，后台没有
module.exports = app => {

    const { createToken, verifyToken } = require('../../../utils/jwt')
    const express = require('express')
    const router = express.Router()//设置一级路由
    app.use('/admin/api', router)
    const user = require('../../../models/user')//引入模型

    router.post('/register', async (req, res) => {
        await user.create(req.body)
        res.send({
            status: 200,
            success: true,
        })
    })
    //查询用户名是否存在的接口
    router.post('/userName', async (req, res) => {
        const userName = await user.findOne({ "userName": req.body.userName })
        if (userName === null) {
            res.send({
                status: 200,
                err: '用户名可用！'
            })
        } else {
            res.send({
                status: 404,
                err: '用户名已经存在！'
            })
        }
    })
    router.get('/user', async (req, res) => {
        const userName = req.query.userName
        const obj = req.query.userName ? { userName } : {}
        const model = await user.find(obj)
        res.send(model)
    })
    router.put('/updatePw', async (req, res) => {
        const userName = req.body.userName
        await user.findOneAndUpdate({ userName }, { pw: req.body.pw })
        res.send({
            status: 200,
            msg: '修改成功'
        })

    })
    router.delete('/delUser', async (req, res) => {
        // console.log(req.query.id)
        await user.findByIdAndDelete(req.query.id)
        res.send({
            status: 200,
            success: true
        })
    })

    router.post('/login', async (req, res) => {
        let { userName, pw } = req.body
        const result = await user.findOne({ userName })
        if (result === null) {
            res.send({
                status: 404,
                err: '账号或密码错误'
            })
        } else {
            if (pw !== result.pw) {
                res.send({
                    status: 404,
                    err: '账号或密码错误'
                })
            } else {
                // //生成token
                // let token = createToken(req.body)
                // // 印证token
                // let data = verifyToken(token)
                // console.log(1, token)
                // console.log(2, data)
                res.send(result)
            }
        }
    })


}
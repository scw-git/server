
// // index.js中引入了这个模块，并且传入了一个express创建的app实例
// module.exports = (app) => {
//     require('./api/type')(app)//引入类型接口
//     require('./api/product')(app)//引入商品接口

//     //上传的图片，需要下一个库 npm i multer
//     const multer = require('multer')
//     const upload = multer({ dest: __dirname + '/../../upload' })
//     app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
//         const file = req.file
//         file.url = `http://localhost:3000/upload/${file.filename}`//返回一个服务端图片地址
//         res.send(file)
//     })

//     // 定义子路由，router为子路由
//     // const express = require('express')
//     // const router = express.Router()
//     // app.use('/admin/api', router)
//     //--------------------------------
//     // const express = require('express')
//     // const admin = express.Router()
//     // app.use('/admin/api', admin)

// }

const express = require('express')
const admin = express.Router();
admin.get
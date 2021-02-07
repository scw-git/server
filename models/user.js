const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    userName: {
        type: String,
        // required: true,
        // minlength: 2,
        // maxlength: 15,
        unique: true,//设置唯一值
    },
    pw: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
    },
    myPhone: {
        type: String,
    }

})
const user = mongoose.model('user', scheme)
module.exports = user
//设置一个超级管理员（在index.js中引入该文件，执行一次后就创建了admin。然后把这个创建代码注释掉。否则会多次创建）
// User.create({
//     username: 'admin',
//     password: 'admin',
// }).then(() => {
//     console.log('用户创建成功')
// }).catch(() => {
//     console.log('失败')
// })
const jwt = require('jsonwebtoken')
//生成token
let secrt = 'scw'
function createToken(data) {
    let token = jwt.sign({ data }, secrt, { expiresIn: 60 * 60 })
    return token
}
//印证token
function verifyToken(token) {
    const data = jwt.verify(token, secrt, function (err, data) {
        if (err) {
            console.log('token错误')
        } else {
            return data
        }
    })
    return data
}
module.exports = { createToken, verifyToken }
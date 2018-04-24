//更新用户表
const conn = require("./conn.js")
const md5 = require('md5')
var path = require('path')
module.exports = (req, res) => {
    let id = req.body.id,
        username = req.body.username,
        password = md5(req.body.password),
        phone = req.body.phone,
        email = req.body.email,
        sex = req.body.sex,
        sql = "update `users` set ? where `id` = '" + id + "'"
    conn.query(sql, {
        username, password, email, phone, sex,
    }, function (error, result) {
        if (error == null) {
            res.sendFile(path.resolve('./') + '/public/index.html')
            // res.json({
            //     error: 0,
            //     massage: "ok",
            // })
        } else {
            console.log(error)
            res.json({
                error: 1,
                message: "error"
            })
        }
    })
}
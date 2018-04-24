//更新用户表

const conn = require("./conn.js")
module.exports = (req, res) => {
    let id = req.query.id
    let sql = "update `users` set `username`='" + data.username + "',`password`='" + data.password + "',`sex`='" + data.sex + "',`email`='" + data.email + "',`phone`='" + data.phone + "' where `id`= '" + id + "'"
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                massage: "ok",
            })
        } else {
            console.log(error)
            res.json({
                error: 1,
                message: "error"
            })
        }
    })
}
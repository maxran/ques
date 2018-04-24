const path = require('path')
const conn = require("./conn.js")
module.exports = (req, res) => {
    let id = req.session.loginInfo.id,
        sql = "select * from `users` where `id`='" + id + "'"
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                massage: "ok",
                data: result[0]
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
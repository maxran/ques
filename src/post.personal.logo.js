//头像上传
const conn = require("./conn.js")
module.exports = (req, res) => {
    setTimeout(() => {
        let id = req.session.loginInfo.id,
            sql = "update `users` set ? where `id` = '" + id + "'"
        conn.query(sql, {
            photo: '/photo/'+req.body.photo,
        }, function (error, result) {
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
    }, 0)
}
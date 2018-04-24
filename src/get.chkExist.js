//用户是否存在

const conn = require("./conn.js")
module.exports = (req, res) => {
    setTimeout(() => {
        var filed = req.query.filed,
            value = req.query.value,
            table = req.query.table
        let sql = "select `id` from `" + table + "` where `" + filed + "`='" + value + "'"
        conn.query(sql, function (error, result) {
            if (error == null) {
                if (result.length == 0) {
                    res.json({
                        error: 0,
                        massage: "字段值不存在",
                        data: result
                    })
                } else {
                    res.json({
                        error: 2,
                        massage: "字段值已存在",
                    })
                }
            } else {
                console.log(error)
                res.json({
                    error: 1,
                    message: "error"
                })
            }
        })
    }, 1000)
}
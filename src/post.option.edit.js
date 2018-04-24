//编辑大纲

const conn = require("./conn.js")
module.exports = (req, res) => {
    setTimeout(() => {
        let id = req.body.id,
        text = req.body.text,
        sql = "update `option` set `text` = '"+text+"' where `id` = '"+id+"'"
        console.log(text)
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
    }, 0)
}
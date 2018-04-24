//更新用户表

const conn = require("./conn.js")
module.exports = (req, res) => {
    let id = req.body.id
    let sql = "update `papers` set ? where `id` = '"+id+"'"
    conn.query(sql, {
        title: req.body.title,
        content: req.body.content,
        item: req.body.item,
        creator_id:req.session.loginInfo.id,
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
}
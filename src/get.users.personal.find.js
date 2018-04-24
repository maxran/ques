//查询个人信息

const conn = require("./conn.js")
module.exports = (req, res) => {
    setTimeout(() => {
        let id = req.session.loginInfo.id,
            sql = "select a.id id,p.title title,a.paper_id paper_id,a.content content,a.item item,a.ctime ctime from answer a,papers p where p.creator_id='" + id + "' && a.paper_id=p.id"
        conn.query(sql, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    massage: "ok",
                    data: result
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
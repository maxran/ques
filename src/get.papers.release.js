var path = require('path')
const cuid = require('cuid')
module.exports = (req, res) => {
    if (!req.query.id) {
        require("./message")({
            status: 'error',
            msg: '你来晚了'
        }, res)
        return
    }

    //验证用户是否答过
    var id = req.query.id

    if (req.cookies['releaseInfo' + id]) {
        require("./message")({
            status: 'error',
            msg: '你已经回答过了'
        }, res)
        return
    } else {
        res.cookie('release_paper_id', id)
        res.cookie('releaseInfo' + id, JSON.stringify({
            paper_id: id,
            cuid: cuid(),
        }))
        res.sendFile(path.resolve('./') + '/public/release.html')
    }
}
//查询用户
const path = require('path')
module.exports = (req, res) => {
    res.sendFile(path.resolve('./') + '/public/personalEdit.html')
}
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const multer = require("multer")

const app = express()
app.use(express.static("./static"))//设置静态目录
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(bodyParser.urlencoded({ extended: false }))//post数据获取和解析


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/static/photo")
    },
    filename: function (req, file, cb) {
        var file = file.originalname
        cb(null, file)
    }
})
var upload = multer({ storage: storage })
app.post("/upload", upload.any(), function (req, res) {
    res.send(req.files)
})

app.get("/index", require("./src/index.js"))
app.get("/menu/:filename", require("./src/menu.js"))
//展示用户列表
app.get("/users/get", require("./src/users.get.js"))
//删除用户列表
app.get("/users/del", require("./src/users.del.js"))
//显示编辑用户列表
app.get("/users/edit", require("./src/get.users.edit.js"))
//编辑用户列表
app.post("/users/edit", require("./src/post.users.edit.js"))
//根据条件返回编辑界面
app.get("/users/find", require("./src/get.users.find.js"))
//注册
app.get("/regist", require("./src/get.regist.js"))
//判断表字段是否存在
app.get("/chkExist", require("./src/get.chkExist.js"))
//添加用户信息
app.post('/users/add', require('./src/post.users.add.js'))
//登录
app.get("/login", require("./src/get.login.js"))
//验证用户登录
app.post("/login", require("./src/post.login.js"))
//注销
app.get("/logout", require("./src/get.logout.js"))
//展示大纲
app.get("/outline/show", require("./src/get.outline.show.js"))
//获取大纲记录
app.get("/outline", require("./src/get.outline.js"))
//添加大纲
app.post("/outline/add", require("./src/post.outline.add.js"))
//编辑大纲
app.post("/outline/edit", require("./src/post.outline.edit.js"))
//删除大纲
app.get("/outline/del", require("./src/get.outline.del.js"))
//大纲排序
app.post("/outline/sort", require("./src/post.outline.sort.js"))
//显示问卷管理界面
app.get("/papers/show", require("./src/get.papers.show.js"))
//读取问卷
app.get("/papers", require("./src/get.papers.js"))
//添加问卷
app.post("/papers/add", require("./src/post.papers.add.js"))
//删除问卷
app.get("/papers/del", require("./src/get.papers.del.js"))
//修改问卷
app.post("/papers/edit", require("./src/post.papers.edit.js"))
//根据条件返回问卷列表
app.get("/papers/find", require("./src/get.papers.find.js"))
//显示问卷问答页面
app.get("/papers/release", require("./src/get.papers.release.js"))
//添加用户答卷
app.post("/papers/release/add", require("./src/post.papers.release.add.js"))
//显示个人中心
app.get("/users/personal", require("./src/get.users.personal.js"))
//查询个人中心
app.get("/users/personal/find", require("./src/get.users.personal.find.js"))
//修改个人信息
app.get("/users/personalEdit", require("./src/get.personal.edit.js"))
//个人信息
app.get("/users/personal/info", require("./src/get.users.personal.info.js"))
//读取问卷详情
app.get("/papers/answer", require("./src/get.papers.answer.js"))
//获取选项记录
app.get("/option", require("./src/get.option.js"))
//添加选项
app.post("/option/add", require("./src/post.option.add.js"))
//编辑选项
app.post("/option/edit", require("./src/post.option.edit.js"))
//删除选项
app.get("/option/del", require("./src/get.option.del.js"))
//选项排序
app.post("/option/sort", require("./src/post.option.sort.js"))
//修改头像
app.post("/personal/logo", require("./src/post.personal.logo.js"))

app.listen(108)
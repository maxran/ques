var path = require('path')
module.exports = (req,res)=>{   
     if(req.session.username){
        res.cookie("message",JSON.stringify({
            status: 'error',
            link: '/index',
            linkText: '返回管理首页',
            msg: '您已经登陆了'
        }))
        res.sendFile( path.resolve('./')+'/public/message.html')
    } else{
        res.sendFile( path.resolve('./')+'/public/login.html')
    }
}
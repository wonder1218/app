var express = require('express');
var router = express.Router();
const md5=require('blueimp-md5');
const {UserModel}=require('../db/models');
const filter={password:0,__v:0}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.post('/register',function (req,res){
//   const {username,password}=req.body
//    if(username==='admin'){
//      res.send({code: 1, mas: '此用户已经存在'});
//    }else {
//      res.send({code: 0, data: {id:'abc123',username,password}});
//    }
// })
//注册的路由
router.post('/register',function (req,res) {
   //读取请求参数的数据
    const {username,password,type}=req.body;
    //处理：判断用户是否存在，
    //查询
    UserModel.findOne({username},function (error,user) {
        if(user){//已经存在
        res.send({code:1,msg:'用户已经存在'})
        }else {
        new UserModel({username,password:md5(password),type}).save(function (erro,user) {
           //生成cookie
            res.cookie('userid',user._id,{maxAge:1000*60*60*24})
            const data={username,type,_id:user._id}//响应数据中不能携带密码
            res.send({code:0,data})
        })
        }
    })

});
//登录的路由
router.post('/login',function (req,res) {
    const {username,password}=req.body;
    //根据username和password查询数据库users，
    UserModel.findOne({username,password:md5(password)},filter,function (error,user){
        if(user){
            res.cookie('userid',user._id,{maxAge:1000*60*60*24})
            res.send({code:0,data:user});
        }else {
        res.send({code:1,msg:'用户名或者密码不正确!'});
        }
    });

});
//更新用户信息的路由
router.post('/update',function (req,res) {
    const userid=req.cookies.userid
    if(!userid ){
      return   res.send({code: 1, msg: '请先登录'});
    }
    const user=req.body;
    UserModel.findByIdAndUpdate({_id:userid},user,function (error,oldUser) {
        if(!oldUser){
            //通知浏览器删除cookies
            res.clearCookie('userid')
            res.send({code: 1, msg: '请先登录'});
        }else {
            const {_id,username,type}=oldUser
            const data=Object.assign(user,{_id,username,type})

            res.send({code:0,data});
        }
    })
})
//获取用户信息的路由
router.post('/user',function (req,res) {
    const userid=req.cookies.userid
    if(!userid ){
        return   res.send({code: 1, msg: '请先登录'});
    }
    UserModel.findOne({_id:userid},filter,function (error,user) {
        res.send({code:0,data:user});
    })
})
//获取用户的列表
router.get('/userlist',function (req,res) {
    const {type}=req.query;
    UserModel.find({type},filter,function (error,users) {
        res.send({code:0,data:users});
    });
});
module.exports = router;

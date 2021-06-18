//引入mongoose
const mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));
const userSchema=mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
    type:{type:String,require:true},
})
//定义model
const md5=require('blueimp-md5');//md5加密函数
const UserModel=mongoose.model('user',userSchema);

//增删改查
//增加
function testSave(){
    //创建UserModel的实例
  const userModel= new UserModel({username:'Bob',password:md5('Bob'),type:'laoban'})
    userModel.save(function (error,user){
        console.log('save()',error,user)
    })
}
// testSave();

function testFind(){
    //查询多个
    UserModel.find(function (error,users){
        console.log('find()',error,users)
    })
    //查询一个
    UserModel.findOne({_id:'60cc033d3b6ad830d22d3cf9'},function (error,user){
        console.log('findOne()',error,user)
    })
}


//testFind()
//更新
function  testUpdate(){
    UserModel.findByIdAndUpdate({_id:'60cc033d3b6ad830d22d3cf9'},
        {username:'admin'},function (error,oldUser) {
        console.log('findByIdAndUpdate',error,oldUser)
    })
}
// testUpdate()
//删除
function testDelete() {
    UserModel.remove({_id:''},function (error,doc) {
        console.log('testDelete',error,doc)
    })
}
//testDelete()
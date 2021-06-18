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
    header:{type:String},
    post:{type:String},
    info:{type:String},
    company:{type:String},
    salary:{type:String}
})
const UserModel=mongoose.model('user',userSchema);
exports.UserModel=UserModel;
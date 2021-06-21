import ajax from "./ajax";
//注册的接口
export const reqRegister=(user)=>ajax('/register',user,'POST')
//登录的接口
export const reqLogin=({username,password})=>ajax('/login',{username,password},'POST')
//更新用户信息的接口
export const reqUpdateUser=(user)=>ajax('/update',user,'POST')
//获取用户信息
export const reqUser=()=>ajax('/user')
//获取用户的列表
export const reqUserList=(type)=>ajax('/userlist',{type})
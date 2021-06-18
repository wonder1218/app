import axios from "axios";
import ajax from "./ajax";
//注册接口
export const reqRegister=(user)=>ajax('/register',user,'POST')
//登录接口
export const reqLogin=({username,password})=>ajax('/login', {username,password},'POST')
//更新用户接口
export const reqUpdateUser=(user)=>ajax('/update', user,'POST')


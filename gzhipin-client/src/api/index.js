import ajax from "./ajax";
export const reqRegister=(user)=>ajax('/register',user,'POST')
export const reqLogin=({username,password})=>ajax('/login',{username,password},'POST')
export const reqUpdateUser=(user)=>ajax('/update',user,'POST')
import {reqLogin,reqRegister,reqUpdateUser,reqUser} from "../api";
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from "./action-types";
const authSuccess=(user)=>({
    type:AUTH_SUCCESS,data:user
})
const errorMsg=(msg)=>({
    type:ERROR_MSG,data:msg
})
const receiveUser=(user)=>({
    type:RECEIVE_USER,data:user
})
export const resetUser=(msg)=>({
    type:RESET_USER,data:msg
})
//注册
export const register=(user)=>{
    const {username,password,password2,type}=user
    if(!username){
        return errorMsg('用户名必须指定！');
    }else if(password!==password2){
    return errorMsg('两次密码必须一致');
    }
    return async dispatch=>{

        //发送注册的异步请求
      // const promise= reqRegister(user)
      //   promise.then(response=>{
      //       const result=response.data;
      //   })
        const response=await reqRegister({username,password,type})
        const result=response.data
        if(result.code===0){
        dispatch(authSuccess(result.data));
        }else {
            dispatch(errorMsg(result.msg));
        }
    }
}
//登录
export const login=(user)=>{
    const {username,password}=user
    if(!username){
        return errorMsg('用户名必须指定！');
    }else if(!password){
        return errorMsg('密码必须输入');
    }
    return async dispatch=>{
        //发送注册的异步请求
        // const promise= reqLogin(user)
        //   promise.then(response=>{
        //       const result=response.data;
        //   })
        const response=await reqLogin(user)
        const result=response.data
        if(result.code===0){
            dispatch(authSuccess(result.data));
        }else {
            dispatch(errorMsg(result.msg));
        }
    }
}
//更新
export const updateUser=(user)=>{
    return async dispatch=>{
        const response=await reqUpdateUser(user)
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data));
        }else {
            dispatch(resetUser(result.msg));
        }
    }
}
//获取用户
export const getUser=()=>{
    return async dispatch=>{
        const response=await resetUser()
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else {
            dispatch(resetUser(result.msg))
        }
    }
}
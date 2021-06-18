import {reqLogin,reqRegister} from "../api";
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types";
const authSuccess=(user)=>({
    type:AUTH_SUCCESS,data:user
})
const errorMsg=(msg)=>({
    type:ERROR_MSG,data:msg
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
        // const promise= reqRegister(user)
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
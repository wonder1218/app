import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LaobanInfo from '../laoban-info/laoban-info'
import {connect} from "react-redux";
import {getRedirectTo} from "../../utils";
import Cookies from 'js-cookie'//可以操作前端cookie的对象set(),remove()
import DashenInfo from "../dashen-info/dashen-info";
class Main extends Component{
    render() {
        //读取cookies中是否有userID的信息
        const userid=Cookies.get('userid');
        if(!userid){
        return <Redirect to='/login'></Redirect>
        }
        const {user}=this.props;
        if(!user._id){
            return null
        }else {
            let path=this.props.location.pathname;
            if(path==='/'){
               path= getRedirectTo(user.type,user.header)
                return <Redirect to={path}></Redirect>
            }
        }
        return(
            <div>
                <Switch>
                    <Route path="/laobaninfo" component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                </Switch>
            </div>
        )
    }

}
export default connect(
    state=>({user:state.user})
)(Main)
/*
* 1,实现自动登录
* 2,如果已经登录
* */
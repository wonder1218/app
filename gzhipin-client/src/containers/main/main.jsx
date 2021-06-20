import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from "../dashen-info/dashen-info";
import Dashen from "../dashen/dashen";
import Laoban from "../laoban/laoban";
import Message from "../message/message";
import Personal from "../personal/personal";
import NotFound from "../../components/not-found/not-found";
import {connect} from "react-redux";
import {getRedirectTo} from "../../utils";
import Cookies from 'js-cookie'//可以操作前端cookie的对象set(),remove()
import {getUser} from "../../redux/actions";
import {NavBar} from "antd-mobile";
import NavFooter from "../../components/nav-footer/nav-footer";
class Main extends Component{
    navList=[
        {
            path:'/login',
            component:Laoban,
            title:'大神列表',
            icon:'dashen',
            text:'大神'
        },
        {
            path:'/dashen',
            component:Dashen,
            title:'老板列表',
            icon:'laoban',
            text:'老板'
        },
        {
            path:'/message',
            component:Message,
            title:'消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/personal',
            component:Personal,
            title:'用户中心',
            icon:'personal',
            text:'个人'
        }
    ]
    componentDidMount() {
        const userid=Cookies.get('userid');
        const {_id}=this.props.user;
        if(userid&&!_id){
            this.props.get();
        }
    }

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
        const {navList}=this
        const path=this.props.location.pathname
        const currentNav=navList.find(nav=>nav.path===path)
        if(currentNav){
            if(user.type==='laoban'){
                navList[1].hide=true
            }else {
                navList[0].hide=true
            }
        }
        return(
            <div>
                {currentNav?<NavBar>{currentNav.title}</NavBar>:null}
                <Switch>
                    {
                        navList.map(nav=> <Route path={nav.path} component={nav.component}></Route>)
                    }
                    <Route path="/laobaninfo" component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                    <Route component={NotFound}></Route>

                </Switch>
                {currentNav?<NavFooter navList={navList}/>:null}
            </div>
        )
    }

}
export default connect(
    state=>({user:state.user}),
    {getUser}
)(Main)
/*
* 1,实现自动登录
* 2,如果已经登录
* */
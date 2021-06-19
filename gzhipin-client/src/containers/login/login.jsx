import React, {Component} from "react";
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from "antd-mobile";
import Logo from "../../components/logo/logo";

import {Redirect} from "react-router-dom";

const ListItem=List.Item;
export default class Register extends Component{
    state={
        username:'',
        password:'',
    }
    login=()=>{
        console.log(this.state)
        // this.props.register(this.state);
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    toRegister=()=>{
        this.props.history.replace('/register')
    }
    render() {
        return(
            <div className="register">
                <NavBar>
                    <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘&nbsp;</NavBar>
                    <Logo/>
                    <WingBlank>
                        <List>
                            <WhiteSpace/>
                            <InputItem placeholder="请输入用户名" onChange={val=>{this.handleChange('username',val)}}>
                                用户名:
                            </InputItem>
                            <WhiteSpace/>
                            <InputItem placeholder="请输入密码" type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                            <WhiteSpace/>
                            <InputItem placeholder="请确认密码" type="password" onChange={val=>{this.handleChange('password2',val)}}>确认密码:</InputItem>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;录:</Button>
                            <Button onClick={this.toRegister}>还没有账户</Button>
                        </List>
                    </WingBlank>
                </NavBar>
            </div>
        )
    }

}
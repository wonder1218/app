import React, {Component} from "react";
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from "antd-mobile";
import Logo from "../../components/logo/logo"
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import {login} from "../../redux/actions";
const ListItem=List.Item;
 class Login extends Component{
    state={
        username:'',
        password:'',
    }
    login=()=>{
    this.props.login(this.state);
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
        const {type}=this.state;
        const {msg,redirectTo}=this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return(

            <div className="register">
                <NavBar>
                    <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘&nbsp;</NavBar>
                    <Logo/>
                    <WingBlank>
                        <List>
                            {msg?<div className='error-msg'>{msg}</div>:null}
                            <WhiteSpace/>
                            <InputItem placeholder="请输入用户名" onChange={val=>{this.handleChange('username',val)}}>
                                用户名:
                            </InputItem>
                            <WhiteSpace/>
                            <InputItem placeholder="请输入密码" type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                            <WhiteSpace/>
                            <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;录:</Button>
                            <Button onClick={this.toRegister}>还没有账户</Button>
                        </List>
                    </WingBlank>
                </NavBar>
            </div>
        )
    }
}


export default connect(
    state=>({
        user:state.user
    }),
    {login}
)(Login)
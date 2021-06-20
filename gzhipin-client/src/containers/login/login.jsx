import React, {Component} from "react";
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from "antd-mobile";
import Logo from "../../components/logo/logo";
import {connect} from "react-redux";
import {login} from "../../redux/actions";
import {Redirect} from "react-router-dom";
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

        const {msg,redirectTo}=this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return(
            <div className="register">

                    <NavBar>旭&nbsp;升&nbsp;直&nbsp;聘&nbsp;</NavBar>
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
                            <InputItem placeholder="请确认密码" type="password" onChange={val=>{this.handleChange('password2',val)}}>确认密码:</InputItem>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;录:</Button>
                            <Button onClick={this.toRegister}>还没有账户</Button>
                        </List>
                    </WingBlank>

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
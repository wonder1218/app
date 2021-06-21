import React from "react";
import {connect} from "react-redux";
import {Result,List,WhiteSpace,Button,Modal} from "antd-mobile";
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'
const Item=List.Item
const Brief=Item.Brief
class Personal extends React.Component{
    logout=()=>{
        Modal.alert('退出','确定退出登录吗？',[
            {
               text: '取消',
            },
            {
                text: '确定',
                onPress:()=>{
                Cookies.remove('userid');
                this.props.resetUser()
                }
            }
        ])
    }
    render() {
        const {usrname,info,header,company,post,salary}=this.props.user
        return(
            <div>
           <Result

               img={<img src={require(`../../assets/images/${header}.png`).default} style={{width:50}} alt='header'/>}
           title={usrname}
           message={company}
           />

            <List renderHeader={()=>'相关信息'}>
                <Item multipleLine>
                <Brief>职位:{post}</Brief>
                <Brief>简介:{info}</Brief>
                    {salary? <Brief>薪资:{salary}</Brief>:null}

                </Item>
            </List>
               <WhiteSpace/>
               <List>
                   <Button type='warning' onClick={this.logout}>退出登录</Button>
               </List>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {resetUser}

)(Personal)
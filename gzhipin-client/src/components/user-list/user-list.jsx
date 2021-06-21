import React, {Component} from "react";
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from "antd-mobile";
const Header=Card.Header
const Body=Card.Body
export default class UserList extends Component{
    static propTypes={
        userList:PropTypes.array.isRequired
    }
    render() {
        const {userList}=this.props
        return(
           <WingBlank style={{marginBottom:50,marginTop:50}}>
               {
                   userList.map(user=>(
                       <div key={user._id}>
                           <WhiteSpace/>
                           <Card>
                               <Header
                                   thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    //thumb={require(`../../assets/${user.header}.png`).default}
                                       extra={user.username}/>

                               <Body>
                                   <div>职位:{user.post}</div>
                                   {
                                       user.company? <div>公司:{user.company}</div>:null
                                   }
                                   {
                                       user.salary? <div>月薪:{user.salary}</div>:null
                                   }
                                   <div>描述:{user.info}</div>
                               </Body>
                           </Card>

                       </div>
                       ))
               }

           </WingBlank>
        )
    }

}
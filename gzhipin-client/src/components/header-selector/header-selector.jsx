import React, {Component} from "react";
import {List,Grid} from "antd-mobile";
import PropTypes from 'prop-types'
export default class HeaderSelector extends Component{
    static propTypes={
        setHeader:PropTypes.func.isRequired
    }
    state={
        icon:null
    }
   constructor(props) {
       super(props);
       const requireContext=require.context('./images',true,/^\.\/.*\.png$/)
       const images=requireContext.keys().map(requireContext);
       this.headerList=[];
       for(let i=0;i<8;i++){
           this.headerList.push({
               text:'头像'+(i+1),
               icon:images[i].default
           })
       }

   }
    handleClick=({text,icon})=>{
        this.setState({icon})
        this.props.setHeader(text)
    }
    render() {
        const {icon}=this.state
        const listHeader=!this.state.icon ? '请选择头像':(
            <div>
                已选择头像:<img src={icon}/>
            </div>
        )

        return(
            <List renderHeader={()=>listHeader}>
            <Grid data={this.headerList} columnNum={2} onClick={this.handleClick}>

            </Grid>
            </List>
        )
    }
}

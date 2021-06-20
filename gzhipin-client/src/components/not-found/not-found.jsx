import {Button} from "antd-mobile";
import React from "react";

class NotFound extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <h2>抱歉，找不到页面!</h2>
                    <Button type='primary' onClick={()=>this.props.history.replace('/')}>
                    回到首页
                    </Button>
                </div>
            </div>
        )
    }
}
export default NotFound
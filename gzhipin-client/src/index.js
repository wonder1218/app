//入口
import React from "react";
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from "react-router-dom";
import Register from "./containers/register/register";
import Main from "./containers/main/main";
import Login from "./containers/login/login";
ReactDOM.render((
    <HashRouter>
        <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route>
        </Switch>
    </HashRouter>
    )
    ,document.getElementById('root'))
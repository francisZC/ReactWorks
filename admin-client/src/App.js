/**
 * 
 * 应用跟组件
 */

import React,{ Component } from "react"
// import {Button, message} from 'antd'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

 export default class App extends Component{

    render(){
        return (
            <BrowserRouter>
                <Switch> {/**只匹配其中一个路由 */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
                
            </BrowserRouter>
        )
    }
 }
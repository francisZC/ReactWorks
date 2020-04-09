/**
 * 
 * 应用跟组件
 */

import React,{ Component } from "react"
// import {Button, message} from 'antd'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

 export default class App extends Component{

    render(){
        return (
            <BrowserRouter>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
            </BrowserRouter>
        )
    }
 }
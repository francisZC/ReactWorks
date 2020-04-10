import React,{Component} from 'react'
import './login.less'
import logo from "./images/logo.jfif"
/**
 * 登录的路由组件
 */

 export default class login extends Component{


    render(){
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content"></section>
            </div>
        )
    }
 }
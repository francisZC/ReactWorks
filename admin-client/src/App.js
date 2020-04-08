/**
 * 
 * 应用跟组件
 */

import React,{ Component } from "react"
// import {Button, message} from 'antd'
import {BrowserRouter,Route} from 'react-router-dom'


 export default class App extends Component{
    handleClick=()=>{
        message.warn('zhuyile ')
    }
    
    render(){
        return <Button type='primary' onClick={this.handleClick}>测试antd</Button>
    }
 }
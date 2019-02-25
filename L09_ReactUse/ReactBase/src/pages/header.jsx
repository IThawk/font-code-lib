import React from "react"
import Mask from  "../components/mask"
import data from "../assets/data/user.json"
import "../assets/css/header.css"


export default class Header extends React.Component{

  /*
    1.状态与组件交互
      1.state
        组件内部的状态改变
      2.props
        组件与组件之间的交互：父亲给儿子传递！！！
  */

  constructor(){
    super();
    this.state = {
      isLogin:false,
      isMask:false
    }
  }

  loginHandler(event){
    this.setState({
      isLogin:true,
      isMask:true
    })
  }

  logoutHandler(event){
    this.setState({
      isLogin:false
    })
  }

  render(){

    let myData = data;

    var loginView = this.state.isLogin
    ?
    <span onClick={this.logoutHandler.bind(this)}>Hello,iwen</span>
    :
    <span onClick={this.loginHandler.bind(this)}>登陆|注册</span>

    var maskView = this.state.isMask
    ?
    <Mask data={myData} />
    :
    ""

    return(
      <div className="header">
        <ul className="nav">
          <li>首页</li>
          <li>Web</li>
          <li>Java</li>
          <div className="login">
          { loginView }
          </div>
        </ul>
        { maskView }
      </div>
    )
  }
}

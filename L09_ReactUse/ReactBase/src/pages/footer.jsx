import React from "react";
import {httpPost,httpGet} from "../http/http"

export default class Footer extends React.Component{

  constructor(){
    super();
    this.state = {
      islogin:{}
    }
  }

  componentDidMount(){
    // post
    httpPost("http://www.wwtliu.com/sxtstu/blueberrypai/login.php",{
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        islogin:data
      })
    })

    // get请求
    httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
  }

  render(){

    var loginView = this.state.islogin.success
    ?
    "登录成功"
    :
    "登录失败"

    return(
      <div>
        { loginView }
      </div>
    )
  }
}

import React from "react"
import "../assets/css/mask.css"

export default class Mask extends React.Component{
  render(){
    return(
      <div className="mask">
        <p>用户名：  { this.props.data.name }</p>
        <p>年龄:  { this.props.data.age }</p>
      </div>
    )
  }
}

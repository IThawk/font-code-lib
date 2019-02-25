import React from "react"
import { httpGet } from "../http/http"

export default class Junshi extends React.Component{


  componentDidMount(){
    httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type="+ this.props.params.type +"&count="+this.props.params.count)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

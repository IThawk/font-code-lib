import React from "react"
import { httpGet } from "../http/http"

export default class Yule extends React.Component{

  constructor(){
    super();
    this.state = {
      newsData:{
        result:{
          data:[]
        }
      }
    }
  }

  componentDidMount(){
    httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type="+ this.props.params.type +"&count="+this.props.params.count)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        newsData:data
      })
    })
  }

  render(){
    var { newsData } = this.state;

    return(
      <div>
        {
          newsData.result.data.map((ele,index) => {
            return <li>{ ele.title }</li>
          })
        }
      </div>
    )
  }
}

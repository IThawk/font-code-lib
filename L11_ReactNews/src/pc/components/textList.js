import React from "react"
import { httpGet } from "../http/http"

export default class TextList extends React.Component{

  constructor(){
    super();
    this.state = {
      news:{
        result:{
          data:[]
        }
      }
    }
  }

  componentDidMount(){
    httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=" + this.props.type + "&count=10")
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        news:data
      })
    })
  }

  render(){
    return(
      <div className="textlist">
        <ul>
          {
            this.state.news.result.data.map((ele,index) => {
              return(
                <li>
                  <a href={ ele.url }>{ ele.title }</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

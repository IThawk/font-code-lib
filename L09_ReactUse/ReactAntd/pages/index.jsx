import React from "react"
import Block from "./Block"

export default class Index extends React.Component{
  render(){

    var data = [
      {
        "title":"哈哈1",
        "img":"http://wwtliu.com/sxtstu/blueberrypai/images/markCup_03.png"
      },
      {
        "title":"哈哈2",
        "img":"http://wwtliu.com/sxtstu/blueberrypai/images/markCup_03.png"
      },
      {
        "title":"哈哈3",
        "img":"http://wwtliu.com/sxtstu/blueberrypai/images/markCup_03.png"
      }
    ]


    return(
        <div>
            {
              data.map(function(ele,index){
                return <Block mydata={ele} />
              })
            }
        </div>
    )
  }
}

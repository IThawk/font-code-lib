import React from "react"
import TextList from "../../components/textList"
import { Carousel  } from "antd"
import "../../assets/css/index.css"

export default class Index extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <div className="container">
        <TextList type="top" />
        <Carousel>
           <div><h3>1</h3></div>
           <div><h3>2</h3></div>
           <div><h3>3</h3></div>
           <div><h3>4</h3></div>
         </Carousel>
      </div>
    )
  }
}

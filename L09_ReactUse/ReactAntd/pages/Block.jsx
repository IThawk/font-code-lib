import React from "react"
import TextBlock from "./Textblock"
import Imgblcok from "./ImgBlock"

export default class Block extends React.Component{
  render(){

    var currentData = this.props.mydata;

    return(
        <div>
          <TextBlock ptext={currentData.title} />
          <Imgblcok imgurl={currentData.img} />
        </div>
    )
  }
}

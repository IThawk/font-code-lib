import React from "react"

export default class ImgBlock extends React.Component{
  render(){
    return(
        <div>
          <img src={ this.props.imgurl } />
        </div>
    )
  }
}

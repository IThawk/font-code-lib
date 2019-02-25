import React from "react"

export default class TextBlock extends React.Component{

  constructor(){
    super();
    this.state = {
      flag:false
    }
  }

  clickHandler(event){
    this.setState({
      flag:true
    })
  }

  render(){

    var flagView = this.state.flag
    ?
    "哈哈我来了"
    :
    ""

    return(
        <div>
          <button onClick={ this.clickHandler.bind(this) }>显示描述</button>
          {flagView}
          <p>{ this.props.ptext }</p>
        </div>
    )
  }
}

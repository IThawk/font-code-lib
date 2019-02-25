import React from "react"
import Header from "./header"

export default class Java extends React.Component{
  render(){
    return(
      <div>
      <Header />
        Java页面:{ this.props.params.id }
      </div>
    )
  }
}

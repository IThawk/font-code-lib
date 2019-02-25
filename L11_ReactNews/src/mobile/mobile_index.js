import React from "react"
import MobileNav from "./pages/mobile_nav"

export default class MobileIndex extends React.Component{
  render(){
    return(
      <div>
        { this.props.children }
        <MobileNav />
      </div>
    )
  }
}

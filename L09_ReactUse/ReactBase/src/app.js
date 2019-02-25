import React,{Component} from "react";
import {render} from "react-dom";
import Header from "./pages/header"
import Footer from "./pages/footer"
import Index from "./pages/index"

import "./assets/css/init.css"

class App extends Component{
  render(){
    return(
      <div className="layout">
        <Header />
        <Index />
        <Footer />
      </div>
    )
  }
}

render(<App />,document.getElementById("root"))

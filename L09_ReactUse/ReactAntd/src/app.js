import React from "react"
import ReactDOM from "react-dom"
import Index from "../pages/index"

class App extends React.Component{


  render(){
    return(
        <div>
          <Index />
        </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"))

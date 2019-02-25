import React from "react"
import ReactDOM from "react-dom"
import Nav from "./pages/nav"
import { Router,Route,hashHistory,IndexRoute } from "react-router"
import WEB from "./pages/web"
import JAVA from "./pages/java"
import UI from "./pages/ui"

class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Nav} />
          <Route path="/web" component={WEB} ></Route>
          <Route path="/java" component={JAVA} ></Route>
          <Route path="/ui" component={UI} ></Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"));

import React from "react"
import ReactDOM from "react-dom"
import { Router,Route,hashHistory,IndexRoute } from "react-router"
import Nav from "./pages/nav"
import Web from "./pages/web"
import Java from "./pages/java"
import Ui from "./pages/ui"
import PeopleCenter from "./pages/peoplecenter"
import Header from "./pages/header"
import Junshi from "./pages/junshi"
import Yule from "./pages/yule"

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Router history={hashHistory}>
          <Route path="/" component={Nav}>
            <IndexRoute component={Web}></IndexRoute>
            <Route path="/java/:id" component={Java}></Route>
            <Route path="/ui" component={Ui}></Route>
            <Route path="/junshi/:type/:count" component={Junshi}></Route>
            <Route path="/yule/:type/:count" component={Yule}></Route>
          </Route>
          <Route path="/center" component={PeopleCenter}></Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"))

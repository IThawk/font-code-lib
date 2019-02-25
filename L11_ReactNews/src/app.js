import React from "react"
import ReactDOM from "react-dom"
import 'antd/dist/antd.css';
import MediaQuery from "react-responsive"
import { Router,Route,hashHistory,IndexRoute } from "react-router"

// PC端
import PCIndex from "./pc/pc_index"
import Guonei from "./pc/pages/newstype/guonei"
import Guoji from "./pc/pages/newstype/guoji"
import Index from "./pc/pages/newstype/index"
import Junshi from "./pc/pages/newstype/junshi"
import Tiyu from "./pc/pages/newstype/tiyu"
import Yule from "./pc/pages/newstype/yule"
import PeopleCenter from "./pc/pages/center/peoplecenter"

// 移动端
import MobileIndex from "./mobile/mobile_index"
import Recommend from "./mobile/pages/recommend"
import Hot from "./mobile/pages/hot"
import Mine from "./mobile/pages/mine"


class App extends React.Component{
  render(){
    return(
      <div>
        {/* PC端 */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}>
              <IndexRoute component={Index}></IndexRoute>
              <Route path="/guoji" component={Guoji}></Route>
              <Route path="/guonei" component={Guonei}></Route>
              <Route path="/junshi" component={Junshi}></Route>
              <Route path="/yule" component={Yule}></Route>
              <Route path="/tiyu" component={Tiyu}></Route>
            </Route>
            <Route path="/center" component={PeopleCenter}></Route>
          </Router>
        </MediaQuery>
        {/* 移动端 */}
        <MediaQuery query="(max-device-width: 1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={ MobileIndex }>
              <IndexRoute component={Recommend}></IndexRoute>
              <Route path="/hot" component={Hot}></Route>
              <Route path="/mine" component={Mine}></Route>
            </Route>
          </Router>
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"))

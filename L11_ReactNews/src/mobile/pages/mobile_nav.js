import React from "react"
import "../assets/nav.css"
import "../assets/font/iconfont.css"
import { Link,IndexLink } from "react-router"

export default class Mobile_Nav extends React.Component{
  render(){
    return(
      <div className="mobile-nav">
        <ul>
          <li>
            <IndexLink activeClassName="active" to="/">
              <i className="iconfont icon-homepage_fill"></i>
              推荐
            </IndexLink>
          </li>
          <li>
            <IndexLink activeClassName="active" to="/hot">
              <i className="iconfont icon-manage_fill"></i>
              热门
            </IndexLink>
          </li>
          <li>
            <IndexLink activeClassName="active" to="/mine">
              <i className="iconfont icon-people_fill"></i>
              我的
            </IndexLink>
          </li>
        </ul>
      </div>
    )
  }
}

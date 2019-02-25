import React from "react"
import "../assets/css/nav.css"
import { Link } from "react-router"

export default class Nav extends React.Component{
  render(){
    return(
      <div className="nav">
        <ul>
          <li>
            <Link to={`/`}>
              首页
            </Link>
          </li>
          <li>
            <Link to={`/java`}>
              JAVA
            </Link>
          </li>
          <li>
            <Link to={`/ui`}>
              UI
            </Link>
          </li>
          <li>
            <Link to="/web">
              WEB
            </Link>
          </li>
        </ul>
        <div>
          <p>我是p标签</p>
          <p>我是p标签</p>
          <p>我是p标签</p>
          <p>我是p标签</p>

          <p>我是p标签</p>
          <p>我是p标签</p>
          <p>我是p标签</p>
          <p>我是p标签</p>
        </div>
      </div>
    )
  }
}

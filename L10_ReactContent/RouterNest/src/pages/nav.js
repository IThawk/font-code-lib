import React from "react"
import "../assets/css/nav.css"
import { Link } from "react-router"
export default class Nav extends React.Component{
  render(){

    var idvalue = 100;

    return(
      <div className="nav">
        <ul>
          <li>
            <Link to={`/`}>WEB</Link>
          </li>
          <li>
            <Link to={`/java/${idvalue}`}>JAVA</Link>
          </li>
          <li>
            <Link to={`/ui`}>UI</Link>
          </li>
          <li>
            <Link to={`/center`}>个人中心</Link>
          </li>
          <li>
            <Link to={`/yule/${'yule'}/${'10'}`}>娱乐新闻</Link>
          </li>
          <li>
            <Link to={`/junshi/${'junshi'}/${'20'}`}>军事新闻</Link>
          </li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

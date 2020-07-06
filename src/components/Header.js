import React from "react"
import DarkMode from "./DarkMode"
import { Link } from "gatsby"

const Header = ({ children, title }) =>
  <div className="header-container">
    <Link className="header-title" to={`/`}>{title}</Link>
    <div className="nav-container">
      <ul className="header-nav">
        <li id="header-nav-first"><Link to={`/tags`}>Tags</Link></li>
        <li><Link to={`/search`}>Suchen</Link></li>
        <li><DarkMode title={title}>{children}</DarkMode></li>
      </ul>
    </div>
  </div>

export default Header

import React from "react"

const Footer = ({ title }) =>
  <footer className="footer-copyright">
    © {new Date().getFullYear()} {title}, Entwickelt mit
    {` `}
    <a className="footer-gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>

export default Footer

import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const BlogLayout = ({ title, children}) =>
  <div className="site-container">
    <Header title={title}>{children}</Header>
    <main>{children}</main>
    <Footer title={title} />
  </div>

export default BlogLayout

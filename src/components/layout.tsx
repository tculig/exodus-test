/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../style/global.css"
import "./layout.css"


const Layout = ({ children }) => {
  return (
    <>
     {children}
    </>
  )
}

export default Layout

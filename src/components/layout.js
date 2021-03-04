

import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {


  return (
    <>
     <Header />
    <div className="container">
     
     
        <main>{children}</main>
        
      
    </div>
    <Footer/>
  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useState } from 'react'
import "./topbar.scss"
import { Person,Mail } from "@material-ui/icons"

const Topbar = ({menuOpen, setMenuOpen}) => {
    

    const menuHandler = () => {
        setMenuOpen(!menuOpen);
    }
  return (

    <div className={`topbar ${menuOpen ? "active" : ""}`}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">genius.</a>
                <div className="itemContainer">
                    <Person/>
                    <span>+44 839 12 98</span>
                </div>
                <div className="itemContainer">
                    <Mail/>
                    <span>hi@genius.com</span>
                </div>
            </div>

            <div className="right">
                <div className="hamburger" onClick={menuHandler}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Topbar
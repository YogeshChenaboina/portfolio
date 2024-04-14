import React from 'react'
import  './navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav_items">
            PortFolio
        </div>
        <div className="right ">
            <a href="#home" className="nav_items">Home</a>
            {/* <a href="#about" className="nav_items">About</a> */}
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar

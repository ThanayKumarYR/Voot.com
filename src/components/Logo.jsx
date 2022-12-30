import React from 'react'
import navcss from "../assets/css/components/Navbar.module.css";
import logo from "../assets/images/Voot-Logo.svg";

const Logo = () => {
  return (
    <img src={logo} alt="logo" className={navcss.logo} />
  )
}

export default Logo
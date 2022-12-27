import React from "react";
import { NavLink} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import logo from "../assets/images/Voot-Logo.svg";
import "./css/Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <NavLink to="/"><img src={logo} className="" /></NavLink>
        <img src="https://www.voot.com/images/upgrade-line.svg" alt="line" />
        <button
          className="btn-1"
          style={{
            background: "#29d4b6",
            padding: "2px 0 5px 0",
            width: "90px",
            height: "30px",
            borderRadius: "3px",
            fontWeight: 500,
            fontSize: "15px"
          }}
        >
          Upgrade
        </button>
      </div>
      {/* <div className="nav-link">
        <NavLink NavLink to='/'>
            <span >My Voot</span>
        </NavLink>
        <NavLink to='/Premium'>
            <span>Premium</span>
        </NavLink>
        <NavLink to='/Sports'>
            <span>Sports</span>
        </NavLink>
        <NavLink to='/Shows'>
            <span>Shows</span>
        </NavLink>
        <NavLink to='/Movies'>
            <span>Movies</span>
        </NavLink>
        <NavLink to='/Kids'>
            <span>Kids</span>
        </NavLink>
        <NavLink to='/Channels'>
            <span>Channels</span>
        </NavLink>
        <div className="nav-search">
            <AiOutlineSearch />
            <CgProfile />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;

import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/images/Voot-Logo.svg";
import navcss from "../assets/css/components/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={navcss.navbar}>
      <div>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>
        <img src="https://www.voot.com/images/upgrade-line.svg" alt="line" />
        <button
          style={{
            background: "#29d4b6",
            padding: "2px 0 5px 0",
            width: "90px",
            height: "30px",
            borderRadius: "3px",
            fontWeight: 500,
            fontSize: "15px",
          }}
        >
          Upgrade
        </button>
      </div>
      <div>
        <NavLink to="/">
          <span>My Voot</span>
        </NavLink>
        <NavLink to="/Premium">
          <span>Premium</span>
        </NavLink>
        <NavLink to="/Sports">
          <span>Sports</span>
        </NavLink>
        <NavLink to="/Shows">
          <span>Shows</span>
        </NavLink>
        <NavLink to="/Movies">
          <span>Movies</span>
        </NavLink>
        <NavLink to="/Kids">
          <span>Kids</span>
        </NavLink>
        <NavLink to="/Channels">
          <span>Channels</span>
        </NavLink>
        <div>
          <AiOutlineSearch />
          <CgProfile />
        </div>
      </div>
        <Outlet />
    </div>
  );
};

export default Navbar;

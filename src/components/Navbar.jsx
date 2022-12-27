import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Button from "./Button.jsx";
import logo from "../assets/images/Voot-Logo.svg";
import navcss from "../assets/css/components/Navbar.module.css";

const Navbar = () => {
  let activeClassName = navcss.active;
  const handlecheck = () => {
    document.getElementById("Cross").checked = true;
  };
  return (
    <div className={navcss.navbar}>
      <div className={navcss.navLogo}>
        <input
          type="radio"
          name="toggle"
          className={navcss.hamberger}
          id="hamberger"
        />
        <NavLink to="/">
          <img src={logo} alt="logo" className={navcss.logo} />
        </NavLink>
        <img src="https://www.voot.com/images/upgrade-line.svg" alt="line" />
        <Button />
      </div>
      <div className={navcss.navLink}>
        <div className={navcss.navLinkDiv}>
          <div>
            <span className={navcss.toggleSpan}>
              <input type="radio" name="toggle" id="Cross"/>
              <img src={logo} alt="logo" className={navcss.logo} />
            </span>
            <span onClick={() => handlecheck()}>Login</span>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>My Voot</span>
              </NavLink>
              <NavLink
                to="/Premium"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Premium</span>
              </NavLink>
              <NavLink
                to="/Sports"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Sports</span>
              </NavLink>
              <NavLink
                to="/Shows"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Shows</span>
              </NavLink>
              <NavLink
                to="/Movies"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Movies</span>
              </NavLink>
              <NavLink
                to="/Kids"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Kids</span>
              </NavLink>
              <NavLink
                to="/Channels"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Channels</span>
              </NavLink>
            </div>
            <span
              className={navcss.help}
              style={{ color: "white" }}
              onClick={() => handlecheck()}
            >
              Help & Legal
            </span>
          </div>
        </div>
        <span>
          <AiOutlineSearch />
        </span>
        <span className={navcss.userIcon}>
          <CgProfile />
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

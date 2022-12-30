import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Button from "./Button.jsx";
import Logo from "./Logo";
import navcss from "../assets/css/components/Navbar.module.css";
import Menu from "./Menu.jsx";

const Navbar = () => {
  let activeClassName = navcss.active;
  // Navbar completed succesfully
  const [isMenu, setIsMenu] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const handleoverflow = ()=>{
    document.body.style.overflow = "hidden"
  }
  const handleflow = ()=>{
    document.body.style.overflow = "auto"
  }
  const handlecheck = () => {
    document.getElementById("Cross").checked = true;
    document.body.style.overflow = "auto"
  };
  return (
    <div className={navcss.navbar}>
      <div className={navcss.navLogo}>
        <input
          type="radio"
          name="toggle"
          className={navcss.hamberger}
          id="hamberger"
          onClick={()=>handleoverflow()}
        />
        <NavLink to="/Voot.com/">
          <Logo/>
        </NavLink>
        <img src="https://www.voot.com/images/upgrade-line.svg" alt="line" />
        <Button />
      </div>
      <div className={navcss.navLink}>
        <div className={navcss.navLinkDiv}>
          <div>
            <span className={navcss.toggleSpan}>
              <input type="radio" name="toggle" id="Cross" onClick={()=>handleflow()} />
              <Logo/>
            </span>
            <span onClick={() => handlecheck()}>Login</span>
            <div>
              <NavLink
                to="/Voot.com/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>My Voot</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Premium"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Premium</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Sports"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Sports</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Shows"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Shows</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Movies"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Movies</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Kids"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                onClick={() => handlecheck()}
              >
                <span>Kids</span>
              </NavLink>
              <NavLink
                to="/Voot.com/Channels"
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
          <CgProfile
            onClick={() => {
              setIsMenu((prev) => !prev);
            }}
          />
          <Menu
            className="profile-menu"
            menus={
              !login
                ? [
                    // name, to path
                    ["Login", "login"],
                    ["Help & Legal", "help"],
                  ]
                : [
                    [["User", "profile", "Add Proflie", "add_profile"]],
                    ["Manage Profiles", "add_profiles"],
                    [
                      ["Voot Select", "select"],
                      ["Billing History", "select"],
                      ["Setting", "settings"],
                      ["Help & Legal", "help"],
                    ],
                    ["Log out", "/"],
                  ]
            }
            open={isMenu}
            handleClick={() => {
              setIsMenu(false);
            }}
          />
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

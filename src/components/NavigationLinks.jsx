import React from "react";
import css from "../assets/css/components/NavigationLinks.module.css";
import { NavLink, Outlet } from "react-router-dom";
const NavigationLinks = ({ Data }) => {
  const showLinks = Data.map((links) => {
    if (links.link[0] != "/") {
      return (
        <NavLink key={links.id} to={links.link}>
          {links.content}
        </NavLink>
      );
    }
    return (
      <a key={links.id} href={links.link}>
        {links.content}
      </a>
    );
  });

  return (
    <div className={css.navigationLinks}>
      {showLinks}
      <Outlet />
    </div>
  );
};

export default NavigationLinks;

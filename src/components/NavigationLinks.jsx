import React from "react";
import css from "../assets/css/components/NavigationLinks.module.css";
const NavigationLinks = ({Data}) => {
  const showLinks = Data.map((links) => {
    return (
      <a key={links.id} href={links.link}>
        {links.content}
      </a>
    );
  });

  return <div className={css.navigationLinks}>{showLinks}</div>;
};

export default NavigationLinks;

import React from "react";
import BtnName from "../assets/css/components/Button.module.css";
const Button = () => {
  return <button data-text="Awesome" className={BtnName.button}>
  <span >&nbsp;Upgrade&nbsp;</span>
  <span className={BtnName.hoverText} aria-hidden="true">&nbsp;Upgrade&nbsp;</span>
</button>
};

export default Button;

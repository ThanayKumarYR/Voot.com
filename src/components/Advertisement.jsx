import React from "react";
import css from "../assets/css/components/Advertisement.module.css";
const Adverṭisement = ({ img }) => {
  return (
    <div className={css.advertisement}>
      <img  src={img} alt="Advertisement" />
    </div>
  );
};

export default Adverṭisement;

import React from "react";
import css from "../assets/css/pages/Channels.module.css";
import Data from "../data/Channels/Channels.json";
const Channels = () => {
  const ShowChannels = Data.map((item) => {
    return (
      <div key={item.id} >
        <a href={item.address}>
          <img src={item.img} alt="channels" />
        </a>
      </div>
    );
  });
  return <div className={css.Channels}>{ShowChannels}</div>;
};

export default Channels;

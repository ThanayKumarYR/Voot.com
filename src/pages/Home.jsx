import React from "react";
import Bigslider from "../components/Bigslider";
import Data from '../data/Home/Bigsliderdata.json'
const Home = () => {
  return (
    <div>
      <Bigslider Data={Data} />
    </div>
  )
};

export default Home;

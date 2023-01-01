import React from "react";
import Data from '../data/Home/Bigsliderdata.json';
import { lazyLoad } from "../lazyload";
const Bigslider = lazyLoad("./components/Bigslider.jsx");
const Smallslider = lazyLoad("./components/Smallslider.jsx");
const Home = () => {
  return (
    <div>
      <Bigslider Data={Data} />
      <Smallslider/>
      <Smallslider/>
      <Smallslider/>
    </div>
  )
};

export default Home;

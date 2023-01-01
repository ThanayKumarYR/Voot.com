import React from "react";
import Data from '../data/Home/Bigsliderdata.json';
import Bigslider from "../components/Bigslider.jsx"
import Smallslider from "../components/Smallslider.jsx"
// import { lazyLoad } from "../lazyload";
// const Bigslider = lazyLoad("./components/Bigslider.jsx");
// const Smallslider = lazyLoad("./components/Smallslider.jsx");
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

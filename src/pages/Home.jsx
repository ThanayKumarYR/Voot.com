import React from "react";
import BigData from "../data/Home/Bigsliderdata.json";
import SmallData from "../data/Home/Smallslider.json";
import Bigslider from "../components/Bigslider.jsx";
import Smallslider from "../components/Smallslider.jsx";
import Advertisement from "../components/Advertisement.jsx";
import AdvImg from "../data/Home/Advertisement.json"
import css from "../assets/css/pages/Home.module.css"
import NavigationLinks from "../components/NavigationLinks";
import LinksData from "../data/Home/NavigationLinks.json"
// import { lazyLoad } from "../lazyload";
// const Bigslider = lazyLoad("./components/Bigslider.jsx");
// const Smallslider = lazyLoad("./components/Smallslider.jsx");
const Home = () => {
  return (
    <div className={css.home}>
      <Bigslider Data={BigData} />
      <NavigationLinks Data={LinksData}/>
      <Advertisement img={AdvImg.img1}/>
      <Smallslider Data={SmallData["India's Top-Rated Originals"]}title="India's Top-Rated Originals 🌟" />
      <Smallslider Data={SmallData["Top Kannada Hits"]}/>
      <Smallslider Data={SmallData["Crime, Mystery & Investigation"]} title={"Crime, Mystery & Investigation"}/>
    </div>
  );
};

export default Home;

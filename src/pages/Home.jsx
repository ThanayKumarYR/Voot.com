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
      <Smallslider Data={SmallData} title="Hottest International Show" />
      <Advertisement img={AdvImg.img4}/>
      <Smallslider Data={SmallData} />
      <Smallslider
        Data={SmallData}
        title="Hottest International Show"
        btn="none"
      />
    </div>
  );
};

export default Home;

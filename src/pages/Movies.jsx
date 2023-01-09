import React from 'react'
import Data from '../data/Movies/Bigsliderdata.json'
import Bigslider from "../components/Bigslider.jsx"
import SmallData from "../data/Home/Smallslider.json";
import Smallslider from "../components/Smallslider.jsx";
import Advertisement from "../components/Advertisement.jsx";
import AdvImg from "../data/Home/Advertisement.json"
import NavigationLinks from "../components/NavigationLinks";
import LinksData from "../data/Home/NavigationLinks.json"
import css from "../assets/css/pages/Home.module.css"


// import { lazyLoad } from "../lazyload";
// const Bigslider = lazyLoad("./components/Bigslider.jsx");
const Movies = () => {
  return (
    <div className={css.home}>
      <Bigslider Data={Data} />
      <NavigationLinks Data={LinksData}/>
      <Advertisement img={AdvImg.img1}/>
      <Smallslider Data={SmallData["India's Top-Rated Originals"]}title="India's Top-Rated Originals 🌟" />
      <Smallslider Data={SmallData["Top Kannada Hits"]}/>
      <Smallslider Data={SmallData["Crime, Mystery & Investigation"]} title={"Crime, Mystery & Investigation"}/>
      <Smallslider Data={SmallData["FREE Blockbusters of the Month"]}title={"FREE Blockbusters of the Month😎🍿"} btn={"none"} />
      <Smallslider Data={SmallData["Love Island"]} />
      <Smallslider Data={SmallData["Popular In Sports"]}  title={"Popular In Sports"}/>
      <Smallslider Data={SmallData["Hottest International Shows"]}  title={"Hottest International Shows"}/>
    </div>
  )
}

export default Movies

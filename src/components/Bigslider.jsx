import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import appstore from "../assets/images/appstore.svg"
import googleplay from "../assets/images/googleplay.svg"
import firetv from "../assets/images/firetv.png"
import bigcss from "../assets/css/components/Bigslider.module.css"
const Bigslider = () => {
  return (
      <Carousel className={bigcss.bigSlider}>
        <div>
          <img src={facebook} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={twitter}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={youtube} />
          <p className="legend">Legend 3</p>
          <img src={appstore} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={googleplay}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={firetv} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
  );
};

export default Bigslider;

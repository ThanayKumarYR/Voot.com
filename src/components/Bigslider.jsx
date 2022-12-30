import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import appstore from "../assets/images/appstore.svg";
import googleplay from "../assets/images/googleplay.svg";
import firetv from "../assets/images/firetv.png";
import bigcss from "../assets/css/components/Bigslider.module.css";
const Bigslider = () => {
  return (
    <Carousel
      className={bigcss.bigSlider}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      useKeyboardArrows={true}
      dynamicHeight={true}
      centerMode={true}
      centerSlidePercentage={60}
      showStatus={false}

    >
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/16x9_carousel-1672229987397.jpg"} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/kyy-16x9-1672120167854.jpg"} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/bmtdd-1671514801912.jpg"} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/enter_now_-new_bbh_16x9-1671989896924.jpg"} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/shark-tank-s2_final_16x9_-1671777101118.jpg"} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={"https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/durga-aur-charu-16x9-1670301802997.jpg"} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Bigslider;

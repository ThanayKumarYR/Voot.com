import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bigcss from "../assets/css/components/Bigslider.module.css";
const Bigslider = () => {
  return (
    <Carousel
      className={bigcss.bigSlider}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={60}
      showStatus={false}
    >
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/16x9_carousel-1672229987397.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/kyy-16x9-1672120167854.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/bmtdd-1671514801912.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/enter_now_-new_bbh_16x9-1671989896924.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/shark-tank-s2_final_16x9_-1671777101118.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/durga-aur-charu-16x9-1670301802997.jpg"
          }
        />
      </div>
    </Carousel>
  );
};

export default Bigslider;

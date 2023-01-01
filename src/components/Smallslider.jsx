import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Data from "../data/Home/Smallslider.json";
import "../assets/css/components/OwlCarousel.css"
import slidercss from'../assets/css/components/Smallslider.module.css'
const Smallslider = () => {
  const ShowImages = Data.map((item) => {
    const style = {
      backgroundImage: `url(${item.img})`
    };
    return <div key={item.id} className={slidercss.items} style={style}></div>;
  });
  const responsive = {
    0: {
      items: 3,
      slideBy:3,
      stagePadding:5
    },
    420: {
      items: 6,
      slideBy:6,
      stagePadding:40
    }
  }
  return (
    <OwlCarousel
      className="owl-theme"
      margin={10}
      nav
      dots={false}
      responsive= {responsive}
    >
      {ShowImages}
    </OwlCarousel>
  );
};

export default Smallslider;

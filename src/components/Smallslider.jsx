import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/components/OwlCarousel.css";
import slidercss from "../assets/css/components/Smallslider.module.css";
const Smallslider = ({Data,title, btn }) => {
  const ShowImages = Data.map((item) => {
    const style = {
      backgroundImage: `url(${item.img})`,
    };
    return <div key={item.id} className={slidercss.items} style={style}></div>;
  });
  const responsive = {
    0: {
      items: 3,
      slideBy: 3,
      stagePadding: 5,
    },
    420: {
      items: 6,
      slideBy: 6,
      stagePadding: 40,
    },
  };
  return (
    <div className={slidercss.smallslider}>
      {title && (
        <h4>
          <span>{title}</span>
          <button style={{ display:btn }}>ALL</button>
        </h4>
      )}
      <OwlCarousel
        className="owl-theme"
        margin={10}
        nav
        dots={false}
        responsive={responsive}
      >
        {ShowImages}
      </OwlCarousel>
    </div>
  );
};

export default Smallslider;

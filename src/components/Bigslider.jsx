import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bigcss from "../assets/css/components/Bigslider.module.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
const Bigslider = ({Data}) => {
  const ShowImages = Data.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.img} alt="BigsliderImage" />
        <p>{item.title}</p>
      </div>
    );
  });
  return (
    <Carousel
      className={bigcss.bigSlider}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={60}
      showStatus={false}
      swipeScrollTolerance={1}
      renderArrowPrev={(onClickHandler) => {
        return (
          <button
            className={bigcss.prevButton}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
          >
            <TfiAngleLeft />
          </button>
        );
      }}
      renderArrowNext={(onClickHandler) => {
        return (
          <button
            className={bigcss.nextButton}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
          >
            <TfiAngleRight />
          </button>
        );
      }}
    >
      {ShowImages}
    </Carousel>
  );
};

export default Bigslider;

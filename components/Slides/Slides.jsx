import React from 'react';

// @react-slick
import Slider from "react-slick";

const Slides = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="h-10 bg-red-400">
            <h3>1</h3>
          </div>
          <div className="h-10 bg-red-400">
            <h3>2</h3>
          </div>
          <div className="h-10 bg-red-400">
            <h3>3</h3>
          </div>
          <div className="h-10 bg-red-400">
            <h3>4</h3>
          </div>
          <div className="h-10 bg-red-400">
            <h3>5</h3>
          </div>
          <div className="h-10 bg-red-400">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slides;
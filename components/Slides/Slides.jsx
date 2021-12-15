import React from 'react';

// @nextjs
import Image from "next/image";

// @react-slick
import Slider from "react-slick";

const Slides = () => {

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 2000,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="w-full">
            <Image
              src="/img/hambur.jpg"
              alt="Picture of the author"
              width={2000}
              height={1000}
            />
          </div>
          <div className="w-full">
            <Image
              src="/img/perro.jpg"
              alt="Picture of the author"
              width={2000}
              height={1000}
            />
          </div>
          <div className="w-full">
            <Image
              src="/img/pizza.jpg"
              alt="Picture of the author"
              width={2000}
              height={1000}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slides;
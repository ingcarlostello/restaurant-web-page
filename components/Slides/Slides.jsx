import React, { useEffect } from 'react';

// @nextjs
import Image from "next/image";

// @react-slick
import Slider from "react-slick";

// @urls
import { getCarrusel } from '../../helper/urls';

const Slides = ({ result }) => {



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
      <div className='mx-7'>
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

// export async function getStaticProps() {
//   let response = await fetch(getCarrusel);
//   let result = await response.json();
//   
//   return {
//     props: {
//       result,
//     },
//   };
// }

export default Slides;
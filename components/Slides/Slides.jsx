/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';

// @nextjs
import Image from "next/image";

// @react-slick
//import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// @urls
//import { getCarrusel } from '../../helper/urls';

const Slides = ({ result }) => {

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/perro.jpg" alt="perro" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/pizza.jpg" alt="perro" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/hambur.jpg" alt="perro" />
        </SwiperSlide>
      </Swiper>
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
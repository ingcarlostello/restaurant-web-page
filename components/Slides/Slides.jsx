/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

// @Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// @urls
import { getCarruselImage } from "../../helper/urls";

const Slides = () => {

  const [carouselPhoto, setCarouselPhoto] = useState();

  useEffect(() => {
    getCarruselImage().then(function (value) {
     setCarouselPhoto(value.Carousel);
    });
  }, [])  

  return (
    <>
      <div className="px-8" style={{height:'600px'}}>
        <Swiper
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          cssMode={true}
          keyboard={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          mousewheel={true}
          navigation={true}
          pagination={true}
          spaceBetween={30}
        >
          {carouselPhoto?.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${item.url}`}
                alt="perro"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};



export default Slides;

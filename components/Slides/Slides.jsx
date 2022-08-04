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
  }, []);

  return (
    <>
      {carouselPhoto?.length === 0 ? (
        <div className="px-8" style={{ height: "700px" }}>
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            // className="mySwiper"
            cssMode={true}
            keyboard={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            mousewheel={true}
            navigation={true}
            pagination={true}
            spaceBetween={30}
          >
            <SwiperSlide key="none-1">
              <img
                src="https://www.buyincolombia.com/wp-content/themes/realestate-7/images/no-image.png"
                alt="no-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="px-8" style={{ height: "700px" }}>
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            style={{ zIndex:-9 }}
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
                  alt={item.id}
                  
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Slides;

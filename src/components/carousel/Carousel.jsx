import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "./Swiper.css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

export const Carousel = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="my-5 container mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {data.results?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[400px] lg:h-full">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`}
                alt="Backdrop"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h2 className="text-white text-3xl font-bold">
                  {item.title || "No Title"}
                </h2>
                <p className="text-white text-[14px] mt-2">
                  {item.release_date} • {item.original_language.toUpperCase()}
                </p>
                <button
                  onClick={() => alert(`Watching ${item.title}`)}
                  className="w-[380px] h-[52px] bg-white text-[#C61F1F] font-semibold rounded-xl hover:bg-[#C61F1F] hover:text-white transition text-[32px]"
                >
                  Watch
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-5"
      >
        {data.results?.map((item) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`}
              alt="Thumbnail"
              className="w-full h-[80px] object-cover rounded-md hover:opacity-80 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);

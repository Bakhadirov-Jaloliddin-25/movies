import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "./Swiper.css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export const Carousel = ({ data }) => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="py-5 container mx-auto px-4 md:px-0">
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
        {data?.results?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`}
                alt="Backdrop"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h2 className="text-white text-lg md:text-3xl font-bold">
                  {item.title || "No Title"}
                </h2>
                <p className="text-white text-xs md:text-sm mt-2">
                  {item.release_date} • {item.original_language.toUpperCase()}
                </p>
                <button
                  onClick={() => navigate(`/movie/${item.id}`)}
                  className="w-full md:w-[200px] lg:w-[300px] h-[42px] md:h-[52px] bg-white dark:bg-[#C61F1F] text-[#C61F1F] dark:text-white font-semibold rounded-lg hover:bg-[#C61F1F] dark:hover:bg-white hover:text-white dark:hover:text-[#C61F1F] transition text-lg md:text-xl"
                >
                  Watch
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center mt-5">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper max-w-full md:max-w-md overflow-hidden"
        >
          {data?.results?.map((item) => (
            <SwiperSlide key={item.id} className="cursor-pointer">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`}
                alt="Thumbnail"
                className="w-full h-[60px] md:h-[80px] object-cover rounded-md hover:opacity-80 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Carousel);

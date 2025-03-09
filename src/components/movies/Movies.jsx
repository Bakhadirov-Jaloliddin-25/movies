import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../carousel/Swiper.css";

import { Navigation } from "swiper/modules";
import MovieItem from "./MovieItem";
import { memo } from "react";

const Movies = ({ data }) => {
  return (
    <div className="container mx-auto mt-16 px-4 sm:px-8 md:px-16 lg:px-28">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={16} // Slide'lar orasidagi masofa
        slidesPerView={2} // Default qiymat - 2 ta slayddan boshlanadi
        modules={[Navigation]}
        className="CardSwiper"
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 }, // Kichik telefon
          640: { slidesPerView: 2, spaceBetween: 20 }, // Telefon
          768: { slidesPerView: 3, spaceBetween: 24 }, // Planshet
          1024: { slidesPerView: 4, spaceBetween: 24 }, // Katta ekran
          1280: { slidesPerView: 5, spaceBetween: 28 }, // Juda katta ekran
        }}
      >
        {data?.results?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transition-all hover:scale-105"
          >
            <MovieItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Movies);

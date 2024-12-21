import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../carousel/Swiper.css";

import { Navigation } from "swiper/modules";
import MovieItem from "./MovieItem";
import { memo } from "react";

const Movies = ({ data }) => {
  return (
    <div className="container justify-center mt-24 px-28">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation]}
        className="CardSwiper "
      >
        {data?.results?.map((item, index) => (
          <SwiperSlide key={index} className="rounded-xl ">
            <MovieItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Movies);

import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

interface IExtendedSlider {
  children: React.ReactNode;
  childClassName?: string;
}

const Slider = ({ children, childClassName }: IExtendedSlider) => {
  return (
    <div className={`slider ${childClassName}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation
        // loop={true}
        style={{ padding: "30px 10px" }}
        autoplay={{
          delay: 5000,
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;

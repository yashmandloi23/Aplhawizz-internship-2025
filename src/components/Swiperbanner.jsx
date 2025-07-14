import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./SwiperBanner.css";

const SwiperBanner = () => {
  const phoneImages = [
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile1.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile2.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile3.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile4.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile5.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile6.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile6.png",
    "https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile6.png",
  ];

  return (
    <section className="mobile-swiper-section">
      <div className="swiper-heading">
        <h1>Natural Market</h1>
        <h2>Healthy Food</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mobile-swiper"
      >
        {phoneImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="phone-slide">
              <img src={src} alt={`Mobile UI ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperBanner;

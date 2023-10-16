import React from "react";
import "./Testimonials.css";
import ME from "../../assets/about.png";
import { useTranslation } from "react-i18next";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const [t] = useTranslation("common");

  return (
    <section id="testimonials">
      <h5>{t("testimonial.review")}</h5>
      <h2>{t("testimonial.title")}</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="testimonial__avatar">
            <img src={ME} alt="Mathieu" />
          </div>
          <h5 className="testimonial__name">Mathieu</h5>
          <small className="testimonial__review">
            {t("testimonial.mathieu")}
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

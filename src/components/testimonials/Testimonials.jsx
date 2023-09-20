import React from "react";
import "./Testimonials.css";
import ME from "../../assets/about.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    avatar: ME,
    name: "Wild Code School",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt possimus natus similique laboriosam eaque. Sunt alias necessitatibus ipsa neque vitae, ratione eius, dicta ut impedit minus consequuntur esse, magnam optio?",
  },
  {
    avatar: ME,
    name: "Wild Code School",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt possimus natus similique laboriosam eaque. Sunt alias necessitatibus ipsa neque vitae, ratione eius, dicta ut impedit minus consequuntur esse, magnam optio?",
  },
  {
    avatar: ME,
    name: "Wild Code School",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt possimus natus similique laboriosam eaque. Sunt alias necessitatibus ipsa neque vitae, ratione eius, dicta ut impedit minus consequuntur esse, magnam optio?",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="testimonial" key={testimonial.name}>
            <div className="testimonial__avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <h5 className="testimonial__name">{testimonial.name}</h5>
            <small className="testimonial__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

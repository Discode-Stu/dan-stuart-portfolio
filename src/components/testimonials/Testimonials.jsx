import "./testimonials.css"
import { data } from "./constants"

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //  onSwiper={(swiper) => console.log(swiper)}
        //  onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ id, name, alt, img, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={img} alt={alt} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

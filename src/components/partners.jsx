import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Partners() {
    return (
      <section id="clients" className="clients section">
        <div className="container">
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
            slidesPerView={4} // Set a fixed number of slides per view
            spaceBetween={30} // Adjust space between slides
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]} // Include Autoplay module
            className="swiper-container"
          >
            <SwiperSlide><img src="assets/img/clients/client1.png" className="img-fluid" alt="Client 1" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client2.png" className="img-fluid" alt="Client 2" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client3.png" className="img-fluid" alt="Client 3" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client4.png" className="img-fluid" alt="Client 4" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client5.png" className="img-fluid" alt="Client 5" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client6.png" className="img-fluid" alt="Client 6" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client1.png" className="img-fluid" alt="Client 1" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client2.png" className="img-fluid" alt="Client 2" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client3.png" className="img-fluid" alt="Client 3" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client4.png" className="img-fluid" alt="Client 4" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client5.png" className="img-fluid" alt="Client 5" /></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client6.png" className="img-fluid" alt="Client 6" /></SwiperSlide>
          
        </Swiper>
        </div>
      </section>
    );
  }

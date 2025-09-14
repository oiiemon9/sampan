import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

// import required modules
import { Scrollbar } from 'swiper/modules';
import bagImg1 from './../img/pexels-craytive-1464625.jpg';
import sliderImg1 from './img/pexels-anne-r-168988-3908800.jpg';
import sliderImg2 from './img/pexels-bertellifotografia-12446372.jpg';
import sliderImg3 from './img/pexels-joshua-roberts-212557837-12922525.jpg';
import sliderImg4 from './img/pexels-kpaukshtite-1460838.jpg';

// icon
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';

export default function App() {
  return (
    <>
      <section className="relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.silder-prev',
          }}
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={bagImg1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg4}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg4}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 p-4" style={{ backgroundColor: '#f2f3f5' }}>
              <img
                className="w-full h-full object-cover"
                src={sliderImg2}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute -top-14 right-50 lg:right-0">
          <div
            className="silder-prev btn me-3 p-1 w-20 border bg-white"
            style={{ borderColor: '#f2f3f5' }}
          >
            <GrFormPreviousLink className="text-4xl" />
          </div>
          <div
            className="slider-next btn lg:me-3 p-1 w-20 border bg-white"
            style={{ borderColor: '#f2f3f5' }}
          >
            <GrFormNextLink className="text-4xl" />
          </div>
        </div>
      </section>
    </>
  );
}

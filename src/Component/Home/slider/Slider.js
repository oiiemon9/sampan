import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Slider.css';
import image1 from './../../image/gaurav-kumar-EJEq9Ohj_II-unsplash.jpg';
import image2 from './../../image/gaurav-kumar-N84KsqTZsuk-unsplash.jpg';
import image3 from './../../image/pexels-minan1398-906150.jpg';
import image4 from './../../image/pexels-pixabay-268533.jpg';
import image5 from './../../image/windsurfing-7241074_1920.jpg';

// slider img
import sliderImg1 from './img/download.webp';
import sliderImg2 from './img/PngItem_324852.png';
import sliderImg3 from './img/slider-1.webp';

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        loop={true}
        speed={1000}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="z-50 bg-cover bg-no-repeat slider_img relative flex justify-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="flex absolute bottom-0 slider_saction ps-3 pe-3">
              <div
                className="flex items-center w-full"
                style={{ height: '70rem' }}
              >
                <div className="silder_ditels">
                  <h4 className="text-2xl font-medium ms-5">
                    New Arrival 2024
                  </h4>
                  <h1 className="ms-5">The Clothing Collection</h1>
                  <button className="btn btn-outline btn-secondary mt-6 ms-5">
                    Shop Collection
                  </button>
                </div>
                <div className=" relative w-full h-full">
                  <img
                    className="slider_Woman_img absolute bottom-0 right-0"
                    src={sliderImg1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="z-50 bg-cover bg-no-repeat slider_img relative flex justify-center"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <div className="flex absolute bottom-0 slider_saction ps-3 pe-3">
              <div
                className="flex items-center w-full"
                style={{ height: '70rem' }}
              >
                <div className="silder_ditels">
                  <h4 className="text-2xl font-medium ms-5">
                    Winter Has Arrived
                  </h4>
                  <h1 className="ms-5">Amazing New designs</h1>
                  <button
                    style={{ backgroundColor: ' rgba(240, 248, 255, 0.281)' }}
                    className="btn btn-outline btn-secondary mt-6 ms-5"
                  >
                    Shop Collection
                  </button>
                </div>
                <div className=" relative w-full h-full">
                  <img
                    className="slider_Woman_img absolute bottom-0 right-0"
                    src={sliderImg3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

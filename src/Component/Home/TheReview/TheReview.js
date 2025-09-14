import React from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import './TheReview.css';

// icon
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';

const TheReview = () => {
  return (
    <div className="bg-gray-100">
      <div className="container m-auto">
        <div className="pt-32 pb-32 relative">
          <div className="h-96 w-96 rounded-full absolute top-10 left-0 right-0 ms-auto me-auto mt-0 mb-0 bacground_gradiant"></div>
          <div
            className="silder-prev btn w-14 h-14 hover:text-white bg-white hover:bg-rose-900 rounded-full absolute hidden lg:flex lg:left-20 bottom-2/4 z-10"
            style={{ borderColor: '#f2f3f5' }}
          >
            <GrFormPreviousLink className="text-4xl" />
          </div>
          <div
            className="slider-next btn w-14 h-14 hover:text-white bg-white hover:bg-rose-900 rounded-full absolute hidden lg:flex  lg:right-20 bottom-2/4 z-10"
            style={{ borderColor: '#f2f3f5' }}
          >
            <GrFormNextLink className="text-4xl" />
          </div>
          <div className="text-center mb-5">
            <h4 className="text-xl">The Review Are In</h4>
          </div>
          <Swiper
            navigation={{
              nextEl: '.slider-next',
              prevEl: '.silder-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid justify-center">
                <div className="flex justify-center">
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                </div>
                <div>
                  <h3 className="max-w-2xl text-2xl text-center">
                    “ How you use the city or town name is up to you. All
                    results may be freely used in any work.”
                  </h3>
                </div>
                <div className="flex justify-center mt-5 pb-2">
                  <div className="flex bg-white p-3 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-60">
                    <img
                      src="https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-2.9ee3d808.jpg&w=640&q=75"
                      alt=""
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div className="text-center ps-3">
                      <h6 className="truncate max-w-44 text-base font-semibold">
                        Theodore Handle
                      </h6>
                      <p>CO Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid justify-center">
                <div className="flex justify-center">
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                </div>
                <div>
                  <h3 className="max-w-2xl text-2xl text-center">
                    “Very happy with our choice to take our daughter to Brave
                    care. The entire team was great! Thank you!”
                  </h3>
                </div>
                <div className="flex justify-center mt-5 pb-2">
                  <div className="flex bg-white p-3 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-60">
                    <img
                      src="https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.3e37bf45.jpg&w=640&q=75"
                      alt=""
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div className="text-center ps-3">
                      <h6 className="truncate max-w-44 text-base font-semibold">
                        John Smith
                      </h6>
                      <p>UI/UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid justify-center">
                <div className="flex justify-center">
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-rose-900 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                  <MdOutlineStar className="text-gray-300 text-2xl" />
                </div>
                <div>
                  <h3 className="max-w-2xl text-2xl text-center">
                    “Thanks for all your efforts and teamwork over the last
                    several months! Thank you so much”
                  </h3>
                </div>
                <div className="flex justify-center mt-5 pb-2">
                  <div className="flex bg-white p-3 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-60">
                    <img
                      src="https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-4.754b5719.jpg&w=640&q=75"
                      alt=""
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div className="text-center ps-3">
                      <h6 className="truncate max-w-44 text-base font-semibold">
                        Salim Rana
                      </h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TheReview;

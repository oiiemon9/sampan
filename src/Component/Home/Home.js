import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './home.css';
import Slider from './slider/Slider';
import PopulerSlider from './Populer silder/Populer';
import AllProduct from './AllProduct/AllProduct';

import clothingImg1 from './img/pexels-nietjuh-934070.jpg';
import bagImg1 from './img/pexels-geyonk-1152077.jpg';
import shoeImg1 from './img/pexels-craytive-1464625.jpg';

import { motion } from 'framer-motion';
import TrendingArrivals from './Trending Arrivals/TrendingArrivals';
import BestSeller from './BestSeller/BestSeller';
import TheReview from './TheReview/TheReview';
import OurBlog from './OurBlog/OurBlog';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import Instagram from './Instagram/Instagram';

const Home = () => {
  return (
    <div className=" -mt-28">
      <section className="">
        <div>
          <Slider></Slider>
        </div>
        <div className="ms-5 me-5">
          <div className="mt-5 mb-5 grid grid-cols-12 gap-5">
            <div
              className="col-span-12 md:col-span-6 2xl:col-span-4 flex items-center truncate p-4"
              style={{ backgroundColor: '#eaeef0' }}
              data-aos="fade-up"
            >
              <div className="grid gap-5 me-5">
                <div>
                  <motion.button
                    initial={{ scale: 1, color: 'rgb(5, 6, 45)' }}
                    whileHover={{ scale: 1.05, color: '#821f40', originX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl"
                  >
                    Clothing
                  </motion.button>
                </div>
                <div>
                  <motion.button
                    className="text-2xl font-medium ps-6 pe-6 pt-1 pb-1 border-2 border-gray-600 "
                    initial="difalt"
                    whileHover={{ color: 'white', backgroundColor: '#821f40' }}
                    transition={{ duration: 0.3 }}
                  >
                    Shop Now{' '}
                  </motion.button>
                </div>
              </div>
              <div className="w-full h-72 object-cover">
                <img
                  className="object-cover h-full w-full"
                  src={clothingImg1}
                  alt="Clothing Image"
                />
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 2xl:col-span-4 flex items-center truncate p-4"
              style={{ backgroundColor: '#eaeef0' }}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="grid gap-5 me-5">
                <div>
                  <motion.button
                    initial={{ scale: 1, color: 'rgb(5, 6, 45)' }}
                    whileHover={{ scale: 1.05, color: '#821f40', originX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl"
                  >
                    Bags
                  </motion.button>
                </div>
                <div>
                  <motion.button
                    className="text-2xl font-medium ps-6 pe-6 pt-1 pb-1 border-2 border-gray-600 "
                    initial="difalt"
                    whileHover={{ color: 'white', backgroundColor: '#821f40' }}
                    transition={{ duration: 0.3 }}
                  >
                    Shop Now{' '}
                  </motion.button>
                </div>
              </div>
              <div className="w-full h-72 object-cover">
                <img
                  className="object-cover h-full w-full"
                  src={bagImg1}
                  alt="Clothing Image"
                />
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 2xl:col-span-4 flex items-center truncate p-4"
              style={{ backgroundColor: '#eaeef0' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="grid gap-5 me-5">
                <div>
                  <motion.button
                    initial={{ scale: 1, color: 'rgb(5, 6, 45)' }}
                    whileHover={{ scale: 1.05, color: '#821f40', originX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl"
                  >
                    Shoes
                  </motion.button>
                </div>
                <div>
                  <motion.button
                    className="text-2xl font-medium ps-6 pe-6 pt-1 pb-1 border-2 border-gray-600 "
                    initial="difalt"
                    whileHover={{ color: 'white', backgroundColor: '#821f40' }}
                    transition={{ duration: 0.3 }}
                  >
                    Shop Now{' '}
                  </motion.button>
                </div>
              </div>
              <div className="w-full h-72 object-cover">
                <img
                  className="object-cover h-full w-full"
                  src={shoeImg1}
                  alt="Clothing Image"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="mt-24 container m-auto">
          <div
            className="grid place-items-center mb-14 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h4 className="text-2xl" style={{ color: '#821f40' }}>
              Shop by Popular
            </h4>
            <h2 className="text-5xl font-medium">
              Popular on the Shofy store.
            </h2>
          </div>
          <div data-aos="zoom-out" data-aos-anchor-placement="top-bottom">
            <PopulerSlider></PopulerSlider>
          </div>
        </section>
        <section className="mt-24 container m-auto">
          <div
            className="grid place-items-center mb-14 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h4 className="text-2xl" style={{ color: '#821f40' }}>
              All Product Shop
            </h4>
            <h2 className="text-5xl font-medium">
              Customer Favorite Style Product
            </h2>
            <div className="flex gap-5 mt-14">
              <ul className="me-5">
                <li>
                  <button className="text-2xl">All Collection</button>
                </li>
              </ul>
              <ul className="list-disc me-5">
                <li>
                  <button className="text-2xl">Shoes</button>
                </li>
              </ul>
              <ul className="list-disc me-5">
                <li>
                  <button className="text-2xl">Clothing</button>
                </li>
              </ul>
              <ul className="list-disc me-5">
                <li>
                  <button className="text-2xl">Bags</button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <AllProduct></AllProduct>
          </div>
        </section>
        <section className="mt-24">
          <TrendingArrivals></TrendingArrivals>
        </section>
        <section className="mt-24">
          <BestSeller></BestSeller>
        </section>
        <section className="mt-24">
          <TheReview></TheReview>
        </section>
        <section className="mt-24">
          <OurBlog></OurBlog>
        </section>
        <section className="mt-24">
          <FreeDelivery></FreeDelivery>
        </section>
        <section className="mt-24">
          <Instagram></Instagram>
        </section>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import bag from './../AllProduct/allProductImg/bag.jpg';
import bag2 from './../AllProduct/allProductImg/bag2.jpg';
import Thamneil from './TrandingImg/thamneil.jpg';

// icon
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { CiShoppingCart } from 'react-icons/ci';
import { GrView } from 'react-icons/gr';
import { GiSelfLove } from 'react-icons/gi';
import { LiaExchangeAltSolid } from 'react-icons/lia';
// css
import './TrendingArrivals.css';

const TrendingArrivals = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [
    {
      id: 1,
      imageSrc: bag,
      title: 'RN Flyknit 2017',
      categories: ['whitetails', 'man', 'shoes'],
      price: '80.00',
      oldPrice: '86.00',
    },
    {
      id: 2,
      imageSrc: bag2,
      title: 'Flyknit Racer',
      categories: ['whitetails', 'man', 'running shoes'],
      price: '100.00',
      oldPrice: '110.00',
    },
    {
      id: 3,
      imageSrc: bag,
      title: 'RN Flyknit 2017',
      categories: ['whitetails', 'man', 'shoes'],
      price: '80.00',
      oldPrice: '86.00',
    },
    {
      id: 4,
      imageSrc: bag2,
      title: 'Flyknit Racer',
      categories: ['whitetails', 'man', 'running shoes'],
      price: '100.00',
      oldPrice: '110.00',
    },
  ];

  return (
    <div>
      <div className="container m-auto grid grid-cols-12">
        <div className="mb-14 col-span-12 lg:col-span-8">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-2xl" style={{ color: '#821f40' }}>
              More to Discover
            </h4>
            <h2 className="text-5xl font-medium">Trending Arrivals</h2>
          </div>
          {/* slider  */}
          <div className="p-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
                el: '.custom-pagination', // Custom pagination element
                bulletClass: 'custom-bullet', // Custom bullet class
                bulletActiveClass: 'custom-bullet-active', // Active bullet class
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1, originX: 0, x: 0 }
                            : { opacity: 0 }
                        }
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute left-0 top-24 ms-7 flex flex-col gap-2"
                      >
                        <button
                          className="tooltip tooltip-right bg-white p-2 rounded-full text-center"
                          data-tip="Add to Cart"
                        >
                          <CiShoppingCart className="text-3xl" />
                        </button>
                        <button
                          className="tooltip tooltip-right bg-white p-2 rounded-full text-center"
                          data-tip="Quick View"
                        >
                          <GrView className="text-3xl" />
                        </button>
                        <button
                          className="tooltip tooltip-right bg-white p-2 rounded-full text-center"
                          data-tip="Add To Wishlist"
                        >
                          <GiSelfLove className="text-3xl" />
                        </button>
                        <button
                          className="tooltip tooltip-right bg-white p-2 rounded-full text-center"
                          data-tip="Add To Compare"
                        >
                          <LiaExchangeAltSolid className="text-3xl" />
                        </button>
                      </motion.div>
                      <div className="overflow-hidden">
                        <motion.img
                          initial={{ scale: 1 }}
                          animate={hoveredIndex === index ? { scale: 1.1 } : {}}
                          transition={{ duration: 0.3 }}
                          className="w-full h-96 object-cover relative -z-10"
                          src={product.imageSrc}
                          alt={product.title}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex flex-wrap gap-1">
                        {product.categories.map((category, idx) => (
                          <p key={idx}>
                            <button className="text-lg text-gray-400">
                              {category}
                            </button>
                          </p>
                        ))}
                      </div>
                      <motion.button
                        initial={{ color: 'rgb(5, 6, 45)' }}
                        whileHover={{ color: '#821f40' }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-medium"
                      >
                        {product.title}
                      </motion.button>
                      <div className="flex">
                        <IoIosStar className="text-2xl text-yellow-500" />
                        <IoIosStar className="text-2xl text-yellow-500" />
                        <IoIosStar className="text-2xl text-yellow-500" />
                        <IoIosStar className="text-2xl text-yellow-500" />
                        <IoIosStarHalf className="text-2xl text-yellow-500" />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <h3 className="text-xl font-bold">${product.price}</h3>
                        <del className="text-gray-400">${product.oldPrice}</del>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
              {/* pagination div  */}
              <div className="custom-pagination flex justify-center mt-4 gap-2 cursor-pointer"></div>
            </Swiper>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 relative rounded-lg overflow-hidden">
          <div className="absolute w-full bottom-0 h-96 grid justify-center items-end pb-10 thamneil_bg">
            <div>
              <h2
                className="text-white text-2xl font-semibold mb-2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Short Sleeve Tunic <br /> Tops Casual Swing
              </h2>
              <button className="btn bg-transparent border-gray-600 hover:bg-black text-white hover:border-transparent">
                {' '}
                Explore More
              </button>
            </div>
          </div>
          <img
            className=" lg:h-full object-cover object-center"
            src={Thamneil}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingArrivals;

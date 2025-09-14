import React, { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { IoIosStarHalf } from 'react-icons/io';
import { CiShoppingCart } from 'react-icons/ci';
import { GrView } from 'react-icons/gr';
import { GiSelfLove } from 'react-icons/gi';
import { LiaExchangeAltSolid } from 'react-icons/lia';

import { motion } from 'framer-motion';

import shoes from './../AllProduct/allProductImg/shoes.jpg';
import shoes2 from './../AllProduct/allProductImg/shoes 2.jpg';
import dress from './../AllProduct/allProductImg/dress.jpg';
import bag from './../AllProduct/allProductImg/bag.jpg';
const BestSeller = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      id: 1,
      imageSrc: shoes,
      title: 'RN Flyknit 2017',
      categories: ['whitetails,', 'man,', 'shoes'],
      price: '80.00',
      oldPrice: '86.00',
    },
    {
      id: 2,
      imageSrc: bag,
      title: 'Birkin25 Grizzly',
      categories: ['whitetails', "Women's", 'bag'],
      price: '52',
      oldPrice: '76.00',
    },
    {
      id: 3,
      imageSrc: dress,
      title: "Whitetails Women's Dress",
      categories: ['whitetails', 'Clothing', "Women's"],
      price: '80.00',
      oldPrice: '76.00',
    },
    {
      id: 4,
      imageSrc: shoes2,
      title: 'Painting Shoe Techniques',
      categories: ['whitetails', 'man', 'shoes'],
      price: '48.00',
      oldPrice: '45.00',
    },

    // Add more products as needed
  ];
  const aosAnimationsDelay = ['100', '200', '300', '400'];
  return (
    <div className="container m-auto">
      <div
        className="mb-14 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h4 className="text-2xl" style={{ color: '#821f40' }}>
          Best Seller This Week’s
        </h4>
        <h2 className="text-5xl font-medium">This Week's Featured</h2>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            data-aos="zoom-out"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={
              aosAnimationsDelay[index % aosAnimationsDelay.length]
            }
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className=" col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
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
        ))}
      </div>
      <div className="text-center mt-6 mb-6">
        <motion.button className=" btn border rounded-none border-black text-black pt-2 pb-2 ps-4 pe-4 hover:bg-rose-900 hover:text-white">
          Shop All Product
        </motion.button>
      </div>
    </div>
  );
};

export default BestSeller;

import React, { useState } from 'react';

import { motion } from 'framer-motion';
// img
import img1 from './img/1506.jpg';
import img2 from './img/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import img3 from './img/pexels-olly-853151.jpg';

const OurBlog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      id: 1,
      imageSrc: img1,
      title: "The 'Boomerang' Employees Returning After Quitting",
      categories: ['Fashion,', 'Lift Style,', 'News'],
      releaseDate: '20 July, 2023',
    },
    {
      id: 1,
      imageSrc: img2,
      title: 'Fast fashion: How clothes are linked to climate change',
      categories: ['Fashion,', 'Lift Style,', 'News'],
      releaseDate: '',
    },
    {
      id: 1,
      imageSrc: img3,
      title: 'The Sound Of Fashion: Malcolm McLaren Words',
      categories: ['Fashion,', 'Lift Style,', 'News'],
      releaseDate: '15 February, 2023',
    },

    // Add more products as needed
  ];
  return (
    <div className="container m-auto">
      <div
        className="grid place-items-center mb-14 text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h4 className="text-2xl" style={{ color: '#821f40' }}>
          Our Blog & News
        </h4>
        <h2 className="text-5xl font-medium">Latest News & Articles</h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="col-span-12 sm:col-span-6 lg:col-span-4 relative"
          >
            <div className="absolute top-2 right-2">
              {product.releaseDate ? (
                <p className="text-sm bg-white p-1 ">{product.releaseDate}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full h-80 mb-5 overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                animate={
                  hoveredIndex === index ? { scale: 1.15, rotate: 5 } : {}
                }
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover relative -z-10"
                src={product.imageSrc}
                alt=""
              />
            </div>{' '}
            <div className="ms-2">
              <div>
                {product.categories.map((category, idx) => (
                  <button className="text-sm hover:text-rose-900 me-1">
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="ms-2">
              <motion.button
                initial={{ color: '#1f2937' }}
                whileHover={{ color: '#881313' }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-medium text-start"
              >
                {product.title}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <div className="text-center mt-6 mb-6">
          <motion.button className=" btn border rounded-none border-black text-black pt-2 pb-2 ps-4 pe-4 hover:bg-rose-900 hover:text-white">
            Discover More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;

import React, { useEffect, useState } from 'react';
// Import Swiper React components

import { motion } from 'framer-motion';

import { FaStar } from 'react-icons/fa6';
import { FaStarHalf } from 'react-icons/fa6';

import { MdOutlineCompareArrows } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { CiCircleQuestion } from 'react-icons/ci';
import { SiTicktick } from 'react-icons/si';

const ProductPag = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const images = [
    {
      imgSrc:
        'https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3cFJrkR%2Fclothing-7.png&w=640&q=75',
      color: '#505f33',
    },
    {
      imgSrc:
        'https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxXHLYZr%2Fclothing-5.png&w=640&q=75',
      color: '#e47561',
    },
    {
      imgSrc:
        'https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FJqDrC9g%2Fclothing-6.png&w=640&q=75',
      color: '#cdb297',
    },
    {
      imgSrc:
        'https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fyf4LB8p%2Fclothing-8.png&w=640&q=75',
      color: '#ecada8',
    },
  ];

  // useEffect(() => {
  //   // Scroll to the top of the page when the component is mounted
  //   window.scrollTo(0, 0);
  // });

  const [isExpanded, setIsExpanded] = useState(false);

  const text = `PLENTY OF STORAGE: There are two chest pockets on this women's hooded flannel, making it easy to bring all your favorite things with you. VERSATILE: The Lumber Jane Hooded Flannel is a heavyweight shirt that you can wear open or snapped, depending on your mood. With it's jersey lined hood, it's as warm and comfortable as your favorite hoodie! RELAXED FIT: The women's hooded flannel was made with a relaxed fit for the days you want some room for layering or just want that extra bit of comfort. 100% SATISFACTION GUARANTEE: Designed in the USA, Legendary Whitetails is an American small business. We take pride in all our products. Love it or send it back!`;

  const previewText = text.split(' ').slice(0, 20).join(' ') + '...';

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container m-auto">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Product</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 sm:col-span-6">
          <div
            className="mb-5  "
            style={{
              height: '600px',
              backgroundColor: '#f4f5f7',
            }}
          >
            <img
              className="h-full w-full object-cover"
              src={images[selectedImage - 1].imgSrc}
              alt={`Image ${selectedImage}`}
            />
          </div>
          <div className="flex">
            {images.map((image, index) => (
              <label
                key={index}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              >
                <input
                  type="radio"
                  name="imageSelect"
                  value={index + 1}
                  checked={selectedImage === index + 1}
                  onChange={() => setSelectedImage(index + 1)}
                  style={{ display: 'none' }}
                />
                <motion.div
                  className=""
                  style={{
                    width: '70px',
                    height: '100px',
                    backgroundColor: '#f4f5f7',
                  }}
                  animate={{
                    boxShadow:
                      selectedImage === index + 1
                        ? ' 0 0 0 1px black' // Softer shadow when selected
                        : ' 0 0 0 0px black', // No shadow when not selected
                    scale: selectedImage === index + 1 ? 1.1 : 1,
                  }}
                  whileHover={{ boxShadow: ' 0 0 0 1px black' }}
                  transition={{ duration: 0.5 }} // Adjust the duration as needed
                >
                  <img
                    className="w-full h-full object-cover"
                    src={image.imgSrc}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </motion.div>
              </label>
            ))}
          </div>
        </div>
        {/* ditals  */}
        <div className=" col-span-12 sm:col-span-6">
          <div className="grid gap-3">
            <div>
              <p className="text-sm">Clothing</p>
              <h2 className="text-2xl font-medium">Boys Graphic T-Shirt</h2>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <h5 className="text-sm text-rose-900 bg-rose-200 pe-1 ps-1 rounded">
                  out-of-stock
                </h5>
              </div>
              <div className="flex ">
                <FaStar className="text-sm text-yellow-500" />
                <FaStar className="text-sm text-yellow-500" />
                <FaStar className="text-sm text-yellow-500" />
                <FaStar className="text-sm text-yellow-500" />

                <FaStarHalf className="text-sm text-yellow-500" />
              </div>
              <div>
                <p className="text-sm">(4.3 Review)</p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-sm break-words">
                  {isExpanded ? text : previewText}{' '}
                  <button onClick={toggleExpand} className="text-blue-500">
                    {isExpanded ? 'See less' : 'See more'}
                  </button>
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-end">
              <del className="text-sm">$65</del>
              <h5 className="text-xl font-semibold">$60.45</h5>
            </div>
            <div className="flex items-center gap-2">
              <p>Color:</p>
              {images.map((image, index) => (
                <label
                  key={index}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                >
                  <input
                    type="radio"
                    name="imageSelect"
                    value={index + 1}
                    checked={selectedImage === index + 1}
                    onChange={() => setSelectedImage(index + 1)}
                    style={{ display: 'none' }}
                  />
                  {/* product color  */}
                  <motion.div
                    className="h-8 w-8 rounded-full"
                    initial={{ padding: 0 }}
                    animate={{
                      padding: selectedImage === index + 1 ? '5px' : '0px', // Add padding when selected
                      boxShadow:
                        selectedImage === index + 1
                          ? '0px 4px 8px rgba(0, 0, 0, 0.3)' // Softer shadow when selected
                          : '0px 4px 8px rgba(0, 0, 0, 0.0)', // No shadow when not selected
                    }}
                    whileHover={{
                      padding: '5px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                    transition={{ duration: 0.5 }} // Adjust the duration as needed
                  >
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        backgroundColor: image.color, // Inner circle color stays consistent
                      }}
                    ></div>
                  </motion.div>
                </label>
              ))}
            </div>
            <div>
              <p className="text-sm">Quantity</p>
              <div>
                <input
                  placeholder="0"
                  type="number"
                  class="border rounded p-2 bg-white text-gray-700"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="btn">Add To Cart</button>
              <button className="btn hover:bg-green-600">Buy Now</button>
            </div>
            <div className="flex gap-2">
              <motion.button
                initial={{ color: '#55585b' }}
                whileHover={{ color: '#881337' }}
                transition={{ duration: 0.3 }}
                className="text-sm  flex items-center"
              >
                <MdOutlineCompareArrows className="text-xl" />
                Compare
              </motion.button>
              <motion.button
                initial={{ color: '#55585b' }}
                whileHover={{ color: '#881337' }}
                transition={{ duration: 0.3 }}
                className="text-sm  flex items-center"
              >
                <CiHeart className="text-xl" />
                Add Wishlist
              </motion.button>
              <motion.button
                initial={{ color: '#55585b' }}
                whileHover={{ color: '#881337' }}
                transition={{ duration: 0.3 }}
                className="text-sm flex items-center"
              >
                <CiCircleQuestion className="text-xl" />
                Ask a question
              </motion.button>
            </div>
            <hr />
            <div className="grid gap-2">
              <h6 className="text-sm font-semibold">
                SKU: <span className="text-sm font-normal">FCB7SDVX46</span>
              </h6>
              <h6 className="text-sm font-semibold">
                Category: <span className="text-sm font-normal">Clothing</span>
              </h6>
              <h6 className="text-sm font-semibold">
                Tag: <span className="text-sm font-normal">milumia</span>
              </h6>
            </div>
            <div>
              <p className="text-sm flex items-center gap-1">
                <SiTicktick />
                30 days easy returns
              </p>
              <p className="text-sm flex items-center gap-1">
                <SiTicktick />
                Order yours before 2.30pm for same day dispatch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPag;

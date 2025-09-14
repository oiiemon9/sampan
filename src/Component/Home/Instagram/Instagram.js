import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { CiInstagram } from 'react-icons/ci';
// img
import img1 from './img/2147688872.jpg';
import img2 from './img/5002.jpg';
import img3 from './img/pexels-kowalievska-1126993.jpg';
import img4 from './img/pexels-olly-837140.jpg';
// css
import './Instagram.css';
const Instagram = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-10 sm:col-span-3 lg:col-span-2">
          <div className=" h-60 relative">
            <motion.div
              initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
              whileHover={{
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.445)',
              }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="absolute flex items-center justify-center w-full h-full bg-transparent bacground"
            >
              <motion.button
                initial={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  opacity: 0,
                  y: 20,
                }}
                animate={isHovered ? { opacity: 1, y: 0 } : {}}
                whileHover={{ backgroundColor: '#881337', color: '#ffffff' }}
                transition={{ duration: 0.4 }}
                className=" bg-white p-2 rounded-full h-fit"
              >
                <CiInstagram className="text-3xl" />
              </motion.button>
            </motion.div>
            <img className="w-full h-full object-cover" src={img2} alt="" />
          </div>
        </div>
        <div className="col-span-10 sm:col-span-3 lg:col-span-2">
          <div className=" h-60 relative">
            <motion.div
              initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
              whileHover={{
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.445)',
              }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="absolute flex items-center justify-center w-full h-full bg-transparent bacground"
            >
              <motion.button
                initial={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  opacity: 0,
                  y: 20,
                }}
                animate={isHovered ? { opacity: 1, y: 0 } : {}}
                whileHover={{ backgroundColor: '#881337', color: '#ffffff' }}
                transition={{ duration: 0.4 }}
                className=" bg-white p-2 rounded-full h-fit"
              >
                <CiInstagram className="text-3xl" />
              </motion.button>
            </motion.div>
            <img className="w-full h-full object-cover" src={img1} alt="" />
          </div>
        </div>

        <div className="col-span-10 sm:col-span-3 lg:col-span-2 border">
          <div className=" h-60">
            <div className="grid justify-center items-center h-full">
              <div>
                <h1 className="text-center">Follow Us on</h1>
                <button className="text-3xl hover:text-rose-900">
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10 sm:col-span-3 lg:col-span-2">
          <div className=" h-60 relative">
            <motion.div
              initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
              whileHover={{
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.445)',
              }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="absolute flex items-center justify-center w-full h-full bg-transparent bacground"
            >
              <motion.button
                initial={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  opacity: 0,
                  y: 20,
                }}
                animate={isHovered ? { opacity: 1, y: 0 } : {}}
                whileHover={{ backgroundColor: '#881337', color: '#ffffff' }}
                transition={{ duration: 0.4 }}
                className=" bg-white p-2 rounded-full h-fit"
              >
                <CiInstagram className="text-3xl" />
              </motion.button>
            </motion.div>
            <img className="w-full h-full object-cover" src={img3} alt="" />
          </div>
        </div>
        <div className="col-span-10 sm:col-span-3 lg:col-span-2">
          <div className=" h-60 relative">
            <motion.div
              initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
              whileHover={{
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.445)',
              }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="absolute flex items-center justify-center w-full h-full bg-transparent bacground"
            >
              <motion.button
                initial={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  opacity: 0,
                  y: 20,
                }}
                animate={isHovered ? { opacity: 1, y: 0 } : {}}
                whileHover={{ backgroundColor: '#881337', color: '#ffffff' }}
                transition={{ duration: 0.4 }}
                className=" bg-white p-2 rounded-full h-fit"
              >
                <CiInstagram className="text-3xl" />
              </motion.button>
            </motion.div>
            <img className="w-full h-full object-cover" src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;

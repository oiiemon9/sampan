import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { CiLocationOn } from 'react-icons/ci';
import { BiMailSend } from 'react-icons/bi';
const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="mt-24">
      <footer className="py-4 h-80 border border-transparent border-t-slate-200">
        <div className="container m-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-3 2xl:col-span-3">
            <Link
              to="./"
              className="p-2 text-xl italic font-bold cursor-pointer"
            >
              Sampan
            </Link>
            <h5 className="text-lg mt-5 text-black">
              We are a team of designers and developers that create high quality
              Code
            </h5>
            <div className="mt-5 flex gap-2">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="border p-2 hover:text-white hover:bg-rose-900 "
              >
                <FaFacebookF />
              </Link>

              <Link
                to="https://x.com/"
                target="_blank"
                className="border p-2 hover:text-white hover:bg-rose-900 "
              >
                <FaTwitter />
              </Link>

              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                className="border p-2 hover:text-white hover:bg-rose-900 "
              >
                <FaLinkedinIn />
              </Link>

              <Link
                to="https://vimeo.com/"
                target="_blank"
                className="border p-2 hover:text-white hover:bg-rose-900 "
              >
                <FaVimeoV />
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-3 2xl:col-span-3">
            <h2 className="text-xl font-medium">My Account</h2>
            <div className="mt-5">
              <div>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  {[
                    'Track Orders',
                    'Shipping',
                    'Wishlist',
                    'My Account',
                    'Order History',
                    'Returns',
                  ].map((text, index) => (
                    <li key={index}>
                      <motion.button
                        className="text-gray-500 mb-3"
                        whileHover={{
                          color: '#881337', // Change button text color on hover
                        }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={(e) => {
                          const listItem = e.target.closest('li');
                          listItem.style.transition = 'color 0.3s'; // Apply transition for color change
                          listItem.style.color = '#881337';
                        }}
                        onHoverEnd={(e) => {
                          const listItem = e.target.closest('li');
                          listItem.style.color = 'gray';
                        }}
                      >
                        {text}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-3 2xl:col-span-3">
            <h2 className="text-xl font-medium">My Account</h2>
            <div className="mt-5">
              <div>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  {[
                    'Our Story',
                    'Careers',
                    'Privacy Policy',
                    'Terms & Conditions',
                    'Latest News',
                    'Contact Us',
                  ].map((text, index) => (
                    <li key={index}>
                      <motion.button
                        className="mb-3 text-gray-600 "
                        initial={{ color: '#1f2937' }}
                        whileHover={{
                          color: '#881337', // Change button text color on hover
                        }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={(e) => {
                          const listItem = e.target.closest('li');
                          listItem.style.transition = 'color 0.3s'; // Apply transition for color change
                          listItem.style.color = '#881337';
                        }}
                        onHoverEnd={(e) => {
                          const listItem = e.target.closest('li');
                          listItem.style.color = '#4b5563';
                        }}
                      >
                        {text}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-3 2xl:col-span-3">
            <h2 className="text-xl font-medium">Talk To Us</h2>
            <div className="mt-5 grid gap-3">
              <div>
                <p className="text-sm">Got Questions? Call us</p>
                <motion.button
                  initial={{ color: '#000000' }}
                  whileHover={{ color: '#881337' }}
                  className="text-2xl font-medium"
                >
                  +880 1730 2506 54
                </motion.button>
              </div>

              <motion.button
                initial={{ color: '#000000' }}
                whileHover={{ color: '#881337' }}
                className="text-base flex text-start"
              >
                <span>
                  <BiMailSend className="text-2xl" />
                </span>
                emon9@gmail.com
              </motion.button>
              <motion.button
                initial={{ color: '#000000' }}
                whileHover={{ color: '#881337' }}
                className="text-base flex text-start"
              >
                <span>
                  <CiLocationOn className="text-2xl" />
                </span>
                Joydabpur. Gazipur, Bangladesh
              </motion.button>
            </div>
          </div>
        </div>
        <div className="container m-auto border border-transparent border-t-slate-200 h-28 flex flex-wrap justify-between items-center mt-12">
          <p className="text-sm">
            © 2024 All Rights Reserved | Next js Template by Emon.
          </p>
          <div>
            <img
              src="https://shofy-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-pay.d72dda14.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

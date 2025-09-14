import React from 'react';

import { TbTruckDelivery } from 'react-icons/tb';
import { CiBadgeDollar } from 'react-icons/ci';
import { LuDollarSign } from 'react-icons/lu';
import { PiHeadphonesDuotone } from 'react-icons/pi';
const FreeDelivery = () => {
  return (
    <div className="container m-auto border">
      <div className="grid grid-cols-12 m-5 mt-10 mb-10">
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-3 grid justify-center border-b-2 sm:border-b-0 sm:border-r-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="flex items-center gap-1 w-60">
            <div className="">
              <TbTruckDelivery className="text-5xl" />
            </div>
            <div>
              <h6 className="text-sm font-semibold">Free Delivery</h6>
              <p className="text-sm">Orders from all item</p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-3 grid justify-center border-b-2 sm:border-b-0 lg:border-r-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-1 w-60">
            <div className="">
              <LuDollarSign className="text-5xl" />
            </div>
            <div>
              <h6 className="text-sm font-semibold">Return & Refund</h6>
              <p className="text-sm">Money back guarantee</p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-3 grid justify-center border-b-2 sm:border-b-0 sm:border-r-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-1 w-60">
            <div className="">
              <CiBadgeDollar className="text-5xl" />
            </div>
            <div>
              <h6 className="text-sm font-semibold">Member Discount</h6>
              <p className="text-sm">Onevery order over $140.00</p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-3 grid justify-center sm:border-b-0"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-1 w-60">
            <div className="">
              <PiHeadphonesDuotone className="text-5xl" />
            </div>
            <div>
              <h6 className="text-sm font-semibold">Support 24/7</h6>
              <p className="text-sm">Contact us 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDelivery;

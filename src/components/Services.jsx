import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className="grid w-[90%] m-auto text-center gap-3 text-[18px] sm:grid-cols-3 sm:text-[16px] sm:text-center ">
      <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center rounded py-10 sm:items-center">
        <TbTruckDelivery className="bg-white rounded-[50%] p-1 text-5xl text-black sm:text-3xl" />
        <p>Super fast and free Delivery</p>
      </div>
      <div className="flex gap-3 sm:flex sm:flex-col">
        <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center py-5 rounded w-[50%] sm:w-[100%]">
          <MdOutlineSecurity className="bg-white rounded-[50%] p-1 text-5xl text-black mr-2 sm:text-3xl" />
          <p>Non-Contact Shipping</p>
        </div>
        <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center py-5 px-3 rounded w-[50%] sm:w-[100%]">
          <GiReceiveMoney className="bg-white rounded-[50%] p-1 text-5xl text-black mr-2 sm:text-3xl" />
          <p>Money-back Guaranteed</p>
        </div>
      </div>
      <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center rounded py-10">
        <RiSecurePaymentLine className="bg-white rounded-[50%] p-1 text-5xl text-black sm:text-3xl" />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;

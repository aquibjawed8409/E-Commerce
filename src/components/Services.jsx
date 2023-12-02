import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className="grid grid-cols-3 w-[70%] m-auto gap-3 text-[16px]">
      <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center rounded py-10 ">
        <TbTruckDelivery className="bg-white rounded-[50%] p-1 text-3xl text-black" />{" "}
        <p>Super fast and free Delivery</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="bg-[rgb(230,230,250)] flex justify-center items-center py-5 rounded">
          <MdOutlineSecurity className="bg-white rounded-[50%] p-1 text-3xl text-black mr-2" />
          <p>Non-Contact Shipping</p>
        </div>
        <div className="bg-[rgb(230,230,250)] flex justify-center items-center py-5 rounded">
          <GiReceiveMoney className="bg-white rounded-[50%] p-1 text-3xl text-black mr-2" />
          <p>Money-back Guaranteed</p>
        </div>
      </div>
      <div className="bg-[rgb(230,230,250)] flex flex-col justify-center items-center  text-[16px] rounded">
        <RiSecurePaymentLine className="bg-white rounded-[50%] p-1 text-3xl text-black" />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;

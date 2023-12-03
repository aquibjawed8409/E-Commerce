import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  let  { total_items } = useContext(CartContext);
  return (
    <>
      <div className="flex max-[640px]:absolute max-[640px]:flex max-[640px]:flex-col max-[640px]:top-[0px] max-[640px]:left-[0px] max-[640px]:h-full max-[640px]:w-full max-[640px]:bg-gray-500 max-[640px]:py-[30px] max-[640px]:text-white items-center gap-5 text-[16px] uppercase max-[640px]:text-[14px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className="bg-[#3273dc] px-3 py-2 text-white">Login</button>
        <div className="relative">
          <FaShoppingCart className="text-[1.5rem] " />
          <span className="absolute flex items-center justify-center right-[-10px] top-[-10px] text-[12px] text-white bg-[#3273dc] rounded-[50%] w-[20px] h-[20px]">
            {total_items}
          </span>
        </div>
      <div className="cursor-pointer hidden max-[480px]:block max-[480px]:text-[28px]">
        <CgMenu />
      </div>
      <div className="cursor-pointer hidden">
        <CgClose />
      </div>
      </div>
    </>
  );
};

export default Nav;

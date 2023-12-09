import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  let { total_items } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className={`relative ${menuOpen? "h-screen" : ""} flex justify-center` }>
        <div className={`${menuOpen? "block" : "hidden"} absolute md:relative flex flex-col gap-10 justify-center items-center md:block`}>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div className="relative items-center flex justify-center">
          <NavLink to="/cart">
            <FaShoppingCart className="text-[1.5rem] " />
            <span className="absolute flex items-center justify-center right-[-10px] top-[-10px] text-white bg-[#3273dc] w-[20px] h-[20px] text-[17px] rounded-[50%]">{total_items}</span>
          </NavLink>
        </div>
        </div>
      </div>
       <div className="absolute top-3 right-3 md:hidden">
       <div className={`block ${menuOpen ? "hidden" : "block"} text-3xl`} onClick={toggleMenu}>
          <CgMenu />
        </div>
        <div className={`block ${menuOpen ? "block" : "hidden"} text-3xl`} onClick={toggleMenu}>
          <CgClose />
        </div>
       </div> 

      {/* <div
        className="flex justify-between relative"
      >
        <div
          className="absolute flex flex-col gap-10 justify-center items-center bg-white top-[-92px] left-[-24px]  w-screen"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="relative items-center flex justify-center">
            <NavLink to="/cart">
              <FaShoppingCart className="text-[1.5rem] " />
              <span className="absolute flex items-center justify-center right-[-10px] top-[-10px] text-white bg-[#3273dc] w-[20px] h-[20px] text-[17px] rounded-[50%]">
                {total_items}
              </span>
            </NavLink>
          </div>
        </div>
        <div className="absolute top-[-75px] right-0 md:hidden">
          <div
            className={`block ${menuOpen ? "hidden" : "block"} text-3xl`}
            onClick={toggleMenu}
          >
            <CgMenu />
          </div>
          <div
            className={`block ${menuOpen ? "block" : "hidden"} text-3xl`}
            onClick={toggleMenu}
          >
            <CgClose />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Nav;

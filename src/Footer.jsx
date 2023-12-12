import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const fOOTER = () => {
  return (
    <>
      {/* Top Footer */}
      <div className="w-[70%] bg-[rgb(230,230,250)] m-auto my-5 px-9 flex flex-col justify-center items-center gap-3 py-2 rounded translate-y-[70%] z-99 sm:flex-row sm:justify-around">
        <div className="flex flex-col text-[16px] font-medium">
          <h3>Ready to get started ?</h3>
          <p>Talk to us Today</p>
        </div>
        <NavLink to="/contact">
          <button className="bg-[#3273dc] px-3 py-2 text-white w-fit">
            Get Started
          </button>
        </NavLink>
      </div>

      {/* Middle Footer */}

      <div className="bg-[#0a2351] text-white text-[16px]">
        <div className="grid grid-cols-1 place-items-center p-6 gap-3 py-[5rem] sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <h4>Aquib Jawed</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <h4 className="mb-4">Subscribe to get imported updates</h4>
            <input
              className="p-2 mb-4"
              type="email"
              placeholder="Email"
              required
            />
            <button className="bg-[#3273dc] px-3 py-2 text-white w-fit">
              Subscribe
            </button>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="flex gap-3 mt-3">
              <NavLink to="https://discord.com/" target="_blank">
                <FaDiscord className="border-2 rounded-[50%] p-2 text-[40px]" />
              </NavLink>
              <NavLink to="https://www.instagram.com/" target="_blank">
                <FaInstagram className="border-2 rounded-[50%] p-2 text-[40px]" />
              </NavLink>
              <NavLink to="https://www.youtube.com/" target="_blank">
                <FaYoutube className="border-2 rounded-[50%] p-2 text-[40px]" />
              </NavLink>
            </div>
          </div>
          <div>
            <h4>Call Us</h4>
            <p>+91 1234567890</p>
          </div>
        </div>

        {/* Bottom Footer */}

        <hr className="text-white" />
        <div className="w-[90%] m-auto flex flex-col justify-center items-center py-3 gap-4 sm:flex-row">
          <p>@2023 Aquib Jawed | All Right Reserved</p>
          <div className="flex gap-5 text-[14px]">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default fOOTER;

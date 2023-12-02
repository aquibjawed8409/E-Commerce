import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const fOOTER = () => {
  return (
    <>
      <div className="w-[70%] bg-[rgb(230,230,250)] m-auto my-5 px-9 py-5 flex justify-between rounded translate-y-[70%] z-99">
          <div className='flex flex-col text-[16px] font-medium'>
                <h3>Ready to get started ?</h3>
                <p>Talk to us Today</p>
          </div>
          <NavLink to="/contact">
             <button className='bg-[#3273dc] px-3 py-2 text-white w-fit'>Get Started</button>
          </NavLink>
        </div>

        {/* Top Footer */}

        <div className='bg-[#0a2351] text-white text-[16px]'>
            <div className="grid grid-cols-4 w-[70%] m-auto p-6 gap-3 py-[5rem]">
            <div>
                <h4>Aquib Jawed</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
            <div>
                <h4 className='mb-4'>Subscribe to get imported updates</h4>
                <input className="p-2 mb-4" type="email" placeholder='EMail' required/>
             <button className='bg-[#3273dc] px-3 py-2 text-white w-fit'>Subscribe</button>

            </div>
            <div>
                <h4>Follow Us</h4>
                <div className='flex gap-3 mt-3'>
                    <a href="/https://discord.com/" target='_blank'><FaDiscord className="border-2 rounded-[50%] p-2 text-[40px]" /></a>
                    <a href="/https://instagram.com/" target='_blank'><FaInstagram className="border-2 rounded-[50%] p-2 text-[40px]" /></a>
                    <a href="/https://youtube.com/" target='_blank'><FaYoutube className="border-2 rounded-[50%] p-2 text-[40px]" /></a>
                </div>
            </div>
            <div>
                <h4>Call Us</h4>
                <p>+91 1234567890</p>   
            </div>
            </div>

        {/* Bottom Footer */}

            <hr className='text-white'/>
            <div className='w-[70%] m-auto flex justify-between py-3'>
                <p>@2022 Aquib Jawed | All Right Reserved</p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default fOOTER

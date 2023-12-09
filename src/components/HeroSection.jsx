import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({title}) => {
  return (
    <>
     <div className='flex flex-col-reverse flex-col mt-10 justify-center items-center md:flex md:flex-row md:w-[80%] md:m-auto md:mt-10'>
        <div className='flex flex-col my-3 w-[80%] m-auto md:w-[40%]'>
            <p className='mb-[-8px] uppercase text-gray-500'>Welcome to</p>
            <h1 className='text-3xl font-bold uppercase mb-3'>{title}</h1>
            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, minus officia dolor deleniti veritatis perferendis reprehenderit fuga, sit necessitatibus hic amet.</p>
            <NavLink to="/products"><button className='bg-[#3273dc] px-3 py-2 text-white w-fit'>Shop Now</button></NavLink>
        </div>
   
   
        <div className='relative'>
            <div className='bg-[rgb(195,177,225)] w-[200px] h-[200px] absolute top-[-1rem] right-[-1.5rem] z-[-10]'></div>
            <img src="./images/hero.jpg" alt="Hero" className='w-[20rem] h-[15rem] z-2' />
        </div>
     </div>
    </>
  )
}

export default HeroSection

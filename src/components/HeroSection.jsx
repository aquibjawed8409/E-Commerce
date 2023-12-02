import React from 'react'

const HeroSection = ({title}) => {
  return (
    <>
     <div className='grid grid-cols-2 w-[70%] m-auto gap-3 py-6 my-9 relative'>
        <div className='flex flex-col my-3'>
            <p className='mb-[-8px] uppercase text-gray-500'>Welcome to</p>
            <h1 className='text-3xl font-bold uppercase mb-3'>{title}</h1>
            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, minus officia dolor deleniti veritatis perferendis reprehenderit fuga, sit necessitatibus hic amet.</p>
            <button className='bg-[#3273dc] px-3 py-2 text-white w-fit'>Shop Now</button>
        </div>
   
   
        <div>
            <div className='bg-[rgb(195,177,225)] w-[200px] h-[200px]  absolute top-[10px] right-[130px] z-[-1]'></div>
            <img src="./images/hero.jpg" alt="Hero" className='w-[20rem] h-[15rem] after:content-[""] after:w-[60%] after:h-[80%] after:bg-[rgba(81,56,238,0.4]) after:absolute after:after:left-[50%] after:top-[-5rem] after:z-[-1]' />
        </div>
     </div>
    </>
  )
}

export default HeroSection

import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-[rgb(230,230,250)] flex justify-center items-center flex-col mt-8 py-7'>
      <h3 className='text-2xl text-center font-bold md:text-3xl'>Trusted By 100+ Companies</h3>
      <div className='flex mt-5 flex-wrap justify-center gap-16 items-center w-[80%]  py-5 md:py-5 '>
        <div className='h-[6rem] w-[8rem] lg:h-[7rem] md:w-[9rem] lg:h-[7rem] lg:w-[8rem]'><img src="./images/company1.png" alt="" /></div>
        <div className='h-[6rem] w-[8rem] lg:h-[7rem] md:w-[9rem] lg:h-[7rem] lg:w-[8rem]'><img src="./images/company2.gif" alt="" /></div>
        <div className='h-[6rem] w-[8rem] lg:h-[7rem] md:w-[9rem] lg:h-[7rem] lg:w-[8rem]'><img src="./images/company3.png" alt="" /></div>
        <div className='h-[6rem] w-[8rem] lg:h-[7rem] md:w-[9rem] lg:h-[7rem] lg:w-[8rem]'><img src="./images/company4.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Trusted

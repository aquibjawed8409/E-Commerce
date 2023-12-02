import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-[rgb(230,230,250)] flex justify-center items-center flex-col mt-8 py-7'>
      <h3 className='text-[16px] font-bold'>Trusted By 100+ Companies</h3>
      <div className='flex mt-5 justify-between gap-10 m-auto w-[50%]'>
        <div className='h-[5rem] w-[5rem] '><img src="./images/company1.png" alt="" /></div>
        <div className='h-[5rem] w-[5rem] '><img src="./images/company2.gif" alt="" /></div>
        <div className='h-[5rem] w-[5rem] '><img src="./images/company3.png" alt="" /></div>
        <div className='h-[5rem] w-[5rem] '><img src="./images/company4.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Trusted

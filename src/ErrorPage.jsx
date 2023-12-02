import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center my-10'>
      <h2 className='font-bold text-[42px]'>404</h2>
      <h4 className='uppercase'>uh oh! you're lost</h4>
      <p >The page you are loosking for  doesnot exist. You can click the button to go to the home page</p>
      <NavLink to="/">
      <button className='bg-[#3273dc] px-3 py-2 text-white w-fit'>Home</button>
      </NavLink>
    </div>
  )
}

export default ErrorPage

import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='flex justify-between p-3 px-6 bg-[rgb(211,211,211)]'>
      <NavLink to="/">
        <img src="./images/logo.png" alt="" className='h-[2.5rem]'/>
      </NavLink>
      <Nav />
    </div>
  )
}

export default Header

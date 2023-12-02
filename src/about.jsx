import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context/ProductContext'

const About = () => {

  // const name = useContext(AppContext)
  return (
    <div>
    {/* {name} */}
      <HeroSection title={"Aquib E-Commerce"}/>
    </div>
  )
}

export default About

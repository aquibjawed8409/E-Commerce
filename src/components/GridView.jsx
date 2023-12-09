import React from 'react'
import Card from './Card'


const GridView = ({filterProducts}) => {
    // console.log(filterProducts)
  return (
    <div>

      <div className='flex flex-wrap justify-center gap-8 sm:w-[100%] sm:m-auto'>
      {
        filterProducts.map((curElem)=>{
          return (
          <Card {...curElem}/>
          )
        }) 
      }
    </div>
    </div>
  )
}

export default GridView

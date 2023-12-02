import React from 'react'
import Card from './Card'

const GridView = ({filterProducts}) => {
    // console.log(filterProducts)
  return (
    <div>
      <div className='flex flex-wrap  gap-8'>
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

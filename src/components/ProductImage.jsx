import React, { useEffect, useState } from 'react'

const ProductImage = ({img = [{url: ""}]}) => {
  // ABove passing the default value of url because as we are using clickImage.url in hte second div error shows
  const [clickImage, setClickImage]= useState(img[0])

  useEffect(()=>{
    setClickImage(img[0]);
  },[img])
    // console.log(img[0].url)
    // Check if img is defined and is an array
    if (!img || !Array.isArray(img)) {
      console.error('Invalid prop: img should be a defined array');
      return null;
    }



  return (
    <div className='flex gap-2 justify-center items-center'>
        <div className='grid grid-rows-4 gap-2'>
        {img.map((elem,i)=>{
            return (
              <figure key={i} className='w-[10rem]'>
                <img src={elem.url} alt={elem.filename} onClick={()=> setClickImage(elem)}/>
              </figure>
            )
          })} 
        </div>
        {/* 2nd Image */}
        <div>
          <img src={clickImage.url} alt={clickImage.filename} className='h-[15rem]'/>
        </div>
    </div>
  )
}
export default ProductImage

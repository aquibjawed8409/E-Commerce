import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";

const Colors = ({color = [], getColorSelect}) => {
    const [clickColor, setClickColor] = useState(null)
    const getColor = (selectedcolor) =>{
        // console.log(selectedcolor)
        setClickColor(selectedcolor)
        getColorSelect(selectedcolor)    // Pass the selected Color (Click Color) to the parent i.e, Single Product and then pass it into the Add to Cart Functionality
    }
   
 
  return (
    <>
     <span className='flex items-center'>
     
     {
        
        color.map((elem,i)=>{
            return <button key={i} className= 'bg-[blue] rounded-[50%] w-6 h-6 mr-2 text-white' style = {{backgroundColor: elem}} onClick={()=>{getColor(elem)}}>{clickColor === elem && <TiTick className='ml-1'/>}</button>
        })
     }
     </span>
    </>
  )
}
export default Colors
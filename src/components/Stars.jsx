import React from 'react'
import { FaStar , FaStarHalfAlt} from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
const Stars = ({stars, reviews}) => {
    let starRating = [];
    for(let i=1; i<=5; i++){
        let numbers = i - 0.5;
        starRating.push(stars > i ? <FaStar key={i}/> : stars > numbers ? <FaStarHalfAlt key={i}/> : <IoStarOutline key={i}/>)
    }

        
  return (
    <div className='flex'>
      <p className='flex items-center text-yellow-400'>{starRating} {stars}</p> <span className='ml-2'>({reviews} customer reviews)</span>
    </div>
  )
}

export default Stars

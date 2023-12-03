import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
const QtySelect = ({qty, getQtySelect}) => {
    const [count, setCount] = useState(1);
    
    const qtyDecrease  =()=>{
      count > 1 && setCount(count - 1);
    }
    
    const qtyIncrease  =()=>{
      qty > count && setCount(count + 1);
      // getQtySelect(count)
    }
    getQtySelect(count)  // Pass the selected Qty to the parent i.e, Single Product and then pass it into the Add to Cart Functionality
    return (
    <div className='flex gap-7 items-center'>
    Qty Selected : 
      <FaMinus onClick={() =>qtyDecrease()}/>
      <p>{count}</p>
      <FaPlus onClick={()=>qtyIncrease()}/>
      <span className='text-red-600'>{qty > count ? "" : "** Qty greater than our Stock"}</span>
    </div>
  )
}

export default QtySelect

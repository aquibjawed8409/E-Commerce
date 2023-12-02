import React, { useContext } from 'react'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FilterContext } from '../context/FilterContext';


const Sort = () => {

  const {filter_products,grid_view, setGridView, setListView, sorting} = useContext(FilterContext)

  
  return (
    <div className='flex justify-between min-w-[800px]'>
    {/* Grid & List View */}
      <div className='flex gap-3'>
        <button><IoGrid onClick={setGridView} style={{backgroundColor : grid_view ? "rgb(211,211,211)" : "transparent"}} className='p-1 text-2xl'/></button>
        <FaList onClick={setListView} style={{backgroundColor : !grid_view ? "rgb(211,211,211)" : "transparent"}} className='p-1 text-2xl'/>
      </div>
      {/* Dropdown */}
      <div><p>{filter_products.length} Total Products</p></div>
      <div className='border-[2px]'>
        <form action="#">
          <label htmlFor="sort">
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="a-z">Text (a-z)</option>
              <option value="z-a">Text (z-a)</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Sort

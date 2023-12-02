import React, { useContext } from 'react'
import Card from './Card'
import GridView from './GridView'
import ListView from './ListView'
import { FilterContext } from '../context/FilterContext'

const ProductList = () => {

  const {filter_products ,grid_view} = useContext(FilterContext)
  // console.log(filter_products)
     if(grid_view === true ){
      return (
        <GridView filterProducts = {filter_products}/>
      ) 
    }

    if(grid_view === false ){
      return (
        <ListView filterProducts = {filter_products}/>
      ) 
    }
    
}

export default ProductList

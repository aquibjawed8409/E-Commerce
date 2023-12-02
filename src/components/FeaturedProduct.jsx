import React, { useContext } from 'react'
import {AppContext} from '../context/ProductContext'
import Card from './Card';

const FeaturedProduct = () => {
    const {isLoading, Featureproducts} = useContext(AppContext);

    if(isLoading) {
        return <div>...Loading</div>
    }
  return (
    <>
       <div className='bg-[rgb(230,230,250)] py-9 my-9'>
       <div className='w-[70%] m-auto'>
            <p className='text-gray-500 mb-[-8px]'>CHECK NOW</p>
            <h2 className='text-3xl font-bold mb-3'>Our Feature Services</h2>
            <div className='grid grid-cols-3 mt-5 gap-8'>
                {Featureproducts.map((elem, i)=>{
                    return <div >
                             <Card key={i} {...elem}/>
                           </div>
                })}
            </div>
        </div> 
       </div> 
    </>
  )
}

export default FeaturedProduct

import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CartItem from './components/CartItem';

const Cart = () => {

  const {cart} = useContext(CartContext);
  return (
  <>
     <div className='mt-5 m-auto w-[70%]'>
      <div className='flex'>
        <p className='px-20'>ITEM</p>
        <p className='px-[100px]'>PRICE</p>
        <p className='px-7'>QTY</p>
        <p className='px-20'>SUBTOTAL</p>
        <p>REMOVE</p>
      </div>
        <hr className='h-1 mt-3 '/>
   </div>
        {
          cart.map((curElem)=>{
            return <CartItem key={curElem.id} {...curElem} />
          })
        }
  </>
  )
}

export default Cart

import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import IndianPrice from "./Helper/IndianPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_charges } =
    useContext(CartContext);

  let sumprice = Number(total_price) + Number(shipping_charges);

  // Remove the content if nothing is in the cart
  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-5 text-2xl mt-10 ">
        <p className="">No Item in the Cart</p>
        <NavLink to="/products" className="text-blue-500">
          Click for Shopping
        </NavLink>
      </div>
    );
  }
  return (
    <>
      <div className="mt-8 m-auto">
        <div className="flex justify-around ml-10 text-[14px] md:text-[18px] font-bold items-center justify-center">
          <p className="mr-[85px]">ITEM</p>
          <p className="hidden md:block">PRICE</p>
          <p className="mr-11 md:mx-12">QTY</p>
          <p className="">SUBTOTAL</p>
          <p>REMOVE</p>
        </div>
        <hr className="h-1 mt-3" />
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
        <hr />
        <div className="mt-5 flex justify-between text-[14px] md:flex-row gap-6 md:justify-between px-20">
          <NavLink to="/products">
            <button className="bg-[#3273dc] px-3 py-2 text-white">
              Continue Shopping
            </button>
          </NavLink>
          <button
            className="bg-[#D22B2B] px-3 py-2 w-fit text-white"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="mt-5 w-[70%] md:w-[30%] flex flex-col gap-3 bg-[rgba(211,211,211,0.6)] p-4 rounded-[5px]">
            <div className="flex justify-between">
              <p>SumTotal : </p>
              <span>
                <IndianPrice price={total_price} />
              </span>
            </div>
            <div className="flex justify-between">
              <p>Shipping Fee : </p>
              <span>
                <IndianPrice price={shipping_charges} />
              </span>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Order Total : </p>
              <span>
                <IndianPrice price={sumprice} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <p className="px-20">ITEM</p>
<p className="px-[90px]">PRICE</p>
<p className="px-12">QTY</p>
<p className="px-20">SUBTOTAL</p>
<p>REMOVE</p> */
}
export default Cart;

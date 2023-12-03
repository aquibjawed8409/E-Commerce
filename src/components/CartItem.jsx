import React, { useContext } from "react";
import IndianPrice from "../Helper/IndianPrice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id,image, name, clickColor, selectQty, price }) => {

    const {removeItem, qtyDecrease,qtyIncrease} = useContext(CartContext);


  return (
    <div className="mt-5 pr-[140px]">
      <div className="flex justify-between">
        <div className="flex">
        <figure className="w-[5rem] h-[5rem] mr-4">
          <img src={image} alt={name} />
        </figure>
        <div>
          <p>{name}</p>
          <p className="flex items-center">
            Color :
            <button
              className="w-3 h-3 ml-2 rounded-[50%]"
              style={{ backgroundColor: clickColor }}
            ></button>
          </p>
        </div>
        </div>
        <div>
          <IndianPrice price={price} />
        </div>
        <div className="flex gap-3">
          <FaMinus onClick={() => qtyDecrease(id)} />
          <p>{selectQty}</p>
          <FaPlus onClick={() => qtyIncrease(id)} />
        </div>
        <div><IndianPrice price={price * selectQty}/></div>
        <div>
          <FaTrash className="text-red-600" onClick={()=>removeItem(id)}/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

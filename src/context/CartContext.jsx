import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer"

 const CartContext = createContext()

 let getStorageData = () =>{
    let newCartData = localStorage.getItem("Ecom Cart");  // Data get in string form
    if(newCartData == []){
        return [];
    }else{
        return JSON.parse(newCartData)        // Convert string data to Json Object
    }
 }
 const InitialState = {
    cart : getStorageData(),
    total_items : "",
    total_price : "",
    shipping_charges : "50000" 
 }

 const CartProvider = (({children})=>{

    const [ state, dispatch] = useReducer(reducer, InitialState);

    // Add the Item in Cart
    const addToCart = (id,singleProduct,clickColor, selectQty) =>{
        dispatch({type: "ADD_CART", payload : {id,singleProduct,clickColor,selectQty}})
    }

    // Increase Qty in Cart
    const qtyIncrease =(id) =>{
        dispatch({type: "INCREASE_CART_QTY", payload : id})
    }

     // Decrease Qty in Cart
     const qtyDecrease =(id) =>{
        dispatch({type: "DECREASE_CART_QTY", payload : id})
     }

    // Remove Item from Cart
    const removeItem  =(id)=>{
        dispatch({type: "REMOVE_CART", payload : id})
    } 
  
    // Clear the Cart Item
    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"})
    }
    // Local Storage
    useEffect(()=>{
        dispatch({type: "NAV_CART_QTY"})
        dispatch({type: "CART_TOTAL_AMOUNT"})
        localStorage.setItem("Ecom Cart", JSON.stringify(state.cart))    // Local Storage set only string values, so we use JSON.stringify
    }, [state.cart])

  return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, qtyIncrease, qtyDecrease}}>{children}</CartContext.Provider>
 })

 export {CartContext, CartProvider} 
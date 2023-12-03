import { createContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer"

 const CartContext = createContext()

 const InitialState = {
    cart : [],
 }

 const CartProvider = (({children})=>{

    const [ state, dispatch] = useReducer(reducer, InitialState);

    const addToCart = (id,singleProduct,clickColor, selectQty) =>{
        dispatch({type: "ADD_CART", payload : {id,singleProduct,clickColor,selectQty}})
    }
    const removeItem  =(id)=>{
        dispatch({type: "REMOVE_CART", payload : id})
    } 


  return <CartContext.Provider value={{...state, addToCart, removeItem}}>{children}</CartContext.Provider>
 })

 export {CartContext, CartProvider} 
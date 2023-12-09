import axios from "axios";
import { createContext, useEffect, useReducer} from "react";
import  reducer from "../Reducer/ProductReducer";


const AppContext = createContext()
const api = "https://api.pujakaitem.com/api/products";
const InitialState = {
    isLoading : false,
    isError : false,
    products : [],
    Featureproducts : [],
    singleProduct : {},
}   

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, InitialState)
    
    const getSingleProducts = async (url) =>{
            dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            // console.log(singleProduct)
            dispatch({type : "SINGLEPRODUCT_API_DATA", payLoad: singleProduct})
        } catch (error) {
            dispatch({type: "SINGLE_API_ERROR"})
        }
    }
    
    const getProducts = async(url) =>{
        dispatch({type: "SET_LOADING"})
      try {
          const res = await axios.get(url);
          const products = res.data;
        //   console.log(products)
          dispatch({type: "PRODUCT_API_DATA", payLoad: products})
      } catch (error) {
        dispatch({type: "API_ERROR"})
      }
    }


    useEffect(()=>{
        getProducts(api)
    },[])

    return <AppContext.Provider value={{...state, getSingleProducts} }>{children}</AppContext.Provider>
}




export {AppProvider, AppContext} ;
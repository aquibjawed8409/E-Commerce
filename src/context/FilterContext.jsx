import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FilterReducer";
import {AppContext} from "../context/ProductContext";

const FilterContext = createContext();

const InitialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sort_value : "lowest",  // By Default lowest
    filters : {
        text : "",
        category : "All",
        company : "All",
        color : "All",
        minPrice : 0,
        maxPrice : 0,
        price: 0,
    }
}
const FilterProvider = ({children}) =>{
    const {products} = useContext(AppContext)
    // console.log(products)

    const [state, dispatch] = useReducer(reducer, InitialState);

    // Clear Filter 
    const clearFilter = () =>{
        dispatch({type : "CLEAR_FILTER_DATA"})
    }
 
    // Set the Grid View Mode
    const setGridView = () =>{ 
        dispatch({type: "SET_GRID_VIEW"});
    }

    // Set the List View Mode
    const setListView = () =>{ 
        dispatch({type: "SET_LIST_VIEW"});
    }

       // Sorting function
    const sorting = (event)=>{
        let userSortValue = event.target.value   // 2nd Method to target the user Selected value
        dispatch({type: "GET_SORT_VALUE", payload : userSortValue})
    }

    // update the filter data
    const updateFilterData = (e) => {
        // alert("click" + e.target.value)
        let name = e.target.name;
        let value = e.target.value;
        dispatch({type: "UPDATE_FILTER_DATA", payload : {name, value}}); 
    }
  

    useEffect(()=>{
        dispatch({type: "SORTING_PRODUCTS", payload : products})
        dispatch({type: "   "})
    }, [products, state.sort_value, state.filters])

    useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCTS", payload : products})
    }, [products])
    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterData,clearFilter} }> {children}</FilterContext.Provider>
}

export {FilterContext, FilterProvider}
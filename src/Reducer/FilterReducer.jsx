const FilterReducer = (state, action)=>{
    switch (action.type){
        case "LOAD_FILTER_PRODUCTS" : {

            // For Price Range Input
            let priceArr = action.payload.map((curElem)=>curElem.price)
            let maxPrice = Math.max(...priceArr)

            return {
                ...state,
                filter_products : [...action.payload],   // Copy of Original
                all_products : [...action.payload],   // Copy of Original
                filters : {
                    ...state.filters,
                    price : maxPrice,
                    maxPrice : maxPrice
                }
            }
        }
        case "SET_GRID_VIEW" : {
            return {
                ...state,
                grid_view : true,
            }
        }

        case "SET_LIST_VIEW" : {
            return {
                ...state,
                grid_view : false,
            }
        }
        case "GET_SORT_VALUE" : {
            // 1st Method to target the user selected value by DOM
            // const userselectedvalue = document.getElementById("sort");
            // const userSortValue = userselectedvalue.options[userselectedvalue.selectedIndex].value;
            return {
                ...state,
                sort_value: action.payload, 
            }
        }
        case "SORTING_PRODUCTS" :{
            let newSortData;
            let tempSortProduct = [...action.payload];

            if(state.sort_value === "lowest"){
                const sortingProducts = (a,b)=>{
                    return a.price - b.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }
            if(state.sort_value === "highest"){
                const sortingProducts = (a,b)=>{
                    return b.price - a.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }

            if(state.sort_value === "a-z"){
                newSortData = tempSortProduct.sort((a,b)=>{
                    return (
                        a.name.localeCompare(b.name)
                    )
                })
            }

            if(state.sort_value === "z-a"){
                newSortData = tempSortProduct.sort((a,b)=>{
                    return (
                        b.name.localeCompare(a.name)
                    )
                })
            }
            return {
                ...state,
                filter_products : newSortData,
            }
        }
        case "UPDATE_FILTER_DATA" :{
            const {name , value} = action.payload;
            return {
                ...state,
              filters  :{
                ...state.filters,
                [name] : value,       // At initial state it will put the value of text empty to the value of user input
                // [action.payload.name] : action.payload.value,
              }
            }
        }
        // console.log(filters.text)
        case "UPDATE_FILTER_PRODUCTS": {
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            // let tempFilterProduct = [...action.payload];
            const { text, category, company, color,price } = state.filters;
            // console.log(text)

            // For Search Filter
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text.toLowerCase());
                });
            }
            // For Category
            if(category !== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                })
            }
            // For Company
            if(company !== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company === company;
                })
            }
            // For Color
            if(color !== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.colors.includes(color);
                })
            }
            // For Price
            if(price){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price <= price
                })
            }
            
            return {
                ...state,
                filter_products: tempFilterProduct,
            };
        }
        // Clear fiilter data
        case "CLEAR_FILTER_DATA" : {
            return {
                ...state,
                filters : {
                    ...state.filters,
                    text : "",
                    category : "All",
                    company : "All",
                    color : "All",
                    minPrice : 0,
                    maxPrice : state.filters.maxPrice,
                    price: state.filters.maxPrice,
                }
            }
        }
        
        
        default:
        return {state}
    }

}
export default FilterReducer    
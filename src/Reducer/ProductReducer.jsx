const ProductReducer = (state, action)=>{
    switch (action.type) {

        case "SET_LOADING":
           return {
            ...state,
            isLoading: true,
           };
            
        case "PRODUCT_API_DATA":
            const featuredData = action.payLoad.filter((elem)=>{
                return elem.featured === true;
            })
            console.log(featuredData)
            return {
                ...state,
                isLoading : false,
                isError : false,
                products : action.payLoad,
                Featureproducts : featuredData,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading : false,
                isError : true
            }    

        case "SET_SINGLE_LOADING" :
            return {
            ...state,
            isSingleLoading : true
        }    
        case "SINGLEPRODUCT_API_DATA":
            return {
                ...state,
                isLoading : false,
                isError : false,
                singleProduct : action.payLoad,
            }
        case "SINGLE_API_ERROR":
            return {
                ...state,
                isLoading : false,
                isError : true
            } 
        default:
            return {
                ...state
            }
    }

}

export default ProductReducer 

const CartReducer = (state, action) => {
  switch (action.type) {
 
        case "ADD_CART" : {

            let {id,singleProduct,clickColor,selectQty} = action.payload;
             let selectedCartProduct;

             selectedCartProduct = {
                id : id,
                name : singleProduct.name,
                image : singleProduct.image[0].url,
                clickColor : clickColor,
                selectQty : selectQty,
                price : singleProduct.price,
                stock : singleProduct.stock
             }

            return {
                ... state,
                cart : [...state.cart, selectedCartProduct]
            }
        }
        case "REMOVE_CART" : {

            let updatedCart = state.cart.filter((curElem)=>{
                return curElem.id !== action.payload
            })
            return {
                ...state,
                cart : updatedCart,
            }
        }

   default :
   return {state}
  }
}

export default CartReducer

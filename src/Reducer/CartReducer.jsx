
const CartReducer = (state, action) => {
  switch (action.type) {
        // Add to cart
        case "ADD_CART" : {

            let {id,singleProduct,clickColor,selectQty} = action.payload;

            // Find the existing product in cart
            let isexistCart = state.cart.find((curElem)=>curElem.id === id + clickColor)

            // update the Qty of Item in cart rather than re-add to the cart of same product with same color 
            if(isexistCart) {
                let updateExistCartData = state.cart.map((curElem)=>{
                    if(curElem.id === id + clickColor) {                  
                        let updateQty = curElem.selectQty + selectQty 
                        if(updateQty >= curElem.stock){       // Check whether update Qty is greater than our stock value
                            updateQty =  curElem.stock   
                        }
                        return {
                            ...curElem,
                            selectQty: updateQty
                        }
                    }else{
                        return curElem
                    }
                  
                })
                return {
                    ...state,
                    cart : updateExistCartData
                }
            }else{
                // If there is no such item present in the cart than add this.
             let selectedCartProduct;
             selectedCartProduct = {
                id : id + clickColor,
                name : singleProduct.name,
                image : singleProduct.image[0].url,
                clickColor : clickColor,
                // clickColor : ((clickColor) ? clickColor : "Add Color"),
                selectQty : selectQty,
                price : singleProduct.price,
                stock : singleProduct.stock
             }

            return {
                ...state,
                cart : [...state.cart, selectedCartProduct]
            }
        }

        }

        // Increase Cart Qty
        case "INCREASE_CART_QTY" :{
            let updateIncrementQty = state.cart.map((curElem)=>{
                if(curElem.id === action.payload){
                    let increaseValue = curElem.selectQty + 1;
                    if(increaseValue >= curElem.stock){
                        increaseValue = curElem.stock
                    }
                    return {
                        ...curElem,
                        selectQty : increaseValue   
                    }

                }else{
                    return curElem
                }
            })
            return {
                ...state,
                cart : updateIncrementQty
        }}


        // Decrease Cart Qty
        case "DECREASE_CART_QTY" :{
            let updateDecrementQty = state.cart.map((curElem)=>{
                if(curElem.id === action.payload){
                    let decreaseValue = curElem.selectQty - 1;
                    if(decreaseValue <= 1){
                         decreaseValue = 1;
                    }
                    return {
                        ...curElem,
                        selectQty : decreaseValue,
                    }
                }else{
                    return curElem
                }

                })
                return {
                    ...state,
                    cart : updateDecrementQty
                }
            }
            
                
        

        // Remove from cart
        case "REMOVE_CART" : {

            let updatedCart = state.cart.filter((curElem)=>{
                return curElem.id !== action.payload
            })
            return {
                ...state,
                cart : updatedCart,
            }
        }
        // Clear Cart
        case "CLEAR_CART" : {
            return {
                ...state,
                cart : []
            }
        }
        // Nav Cart Qty
        case "NAV_CART_QTY" :{
            let variableCartQty = state.cart.reduce((InitialVal, curElem)=>{
                let {selectQty} = curElem;
                InitialVal = InitialVal + selectQty
                return InitialVal 
            }, 0)
            return {
                ...state,
                total_items : variableCartQty
            }
        }

        // Cart Total Amount
        case "CART_TOTAL_AMOUNT" :{
            let cartTotal = state.cart.reduce((InitialVal, curElem)=>{
                let {selectQty, price} = curElem
                InitialVal = InitialVal + selectQty * price
                return InitialVal
            }, 0)
            return {
                ...state,
                total_price : cartTotal
            }
        }


   default :
   return {state}
  }
}

export default CartReducer

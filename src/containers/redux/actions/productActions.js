import { Actiontypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) =>{
    return{
        type : Actiontypes.SELECTED_PRODUCT,
        payload: products,
    }
}
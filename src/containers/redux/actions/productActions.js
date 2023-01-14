import { Actiontypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeselectedProduct = (products) => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCT,

    }
}
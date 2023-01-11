
import { Actiontypes } from './../constants/action-types';
const initialState = {
    products : [{
        id : 1,
        title: 'adersh',
        category : 'developer'
    }]
}

// export const productReducer = (state, action) => {
//     switch(action.type) // without destructring action
export const productReducer = (state= initialState, {type, payload}) => {
    switch(type){
        case Actiontypes.SET_PRODUCTS :
            return state
        
        default:
            return state;
    }
}
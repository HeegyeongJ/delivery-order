import { createStore } from "redux";

const cartReducer = (state = {items:[], totalQuantity:0}, action) => {
    if(action.type === 'addCart'){
        return{
            totalQuantity: state.totalQuantity += action.quantity
        }
    }
    return state;
}

const store = createStore(cartReducer);

export default store;


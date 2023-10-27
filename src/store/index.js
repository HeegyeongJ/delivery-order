import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity += newItem.quantity;
            state.totalPrice += newItem.price*newItem.quantity;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:newItem.quantity,
                    title:newItem.title,
                    totalPrice:newItem.price*newItem.quantity
                });
            }else{
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.price*newItem.quantity;
            } 
        }
    }

})

const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartActions = cartSlice.actions;


export default store;


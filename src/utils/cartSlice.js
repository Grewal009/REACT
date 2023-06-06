import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        amount : 5,
        total : 999,
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload); 
        },
        clearCart : (state) => {
            state.items = [];
            state.amount = 0;
            state.total = 0;
        },
        removeItem : (state, action) => {
            state.items.pop();
        }
    }

});

export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
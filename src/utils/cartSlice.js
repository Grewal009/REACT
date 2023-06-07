import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],

    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload); 
        },
        clearCart : (state) => {
            state.items = [];

        },
        removeItem : (state, action) => {
            //state.items.pop();
         state.items = state.items.filter(
                (res)=>res.id !== action.payload
            );
        }
    }

});

export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";



const cartSlice= createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        // action ke corresponging reducer function
        // action:reducer function(state, action)
        addItem: (state, action)=>{
            // state means store ki initial state
            // action.payload means jo bhi data humne dispatch kiya hai
            state.items.push(action.payload);
        }, 
        removeItem: (state, action)=>{  
            state.items.pop(); 
        }, 
        resetCart: (state, action)=>{  
            state.items.length = 0;  
        }
    }
})

// named export
export const {addItem, removeItem, resetCart} = cartSlice.actions;

// default export
export default cartSlice.reducer;
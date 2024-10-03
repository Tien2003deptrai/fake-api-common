// src/slices/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';

const getCart = loadState();

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCart || [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


//! (state, action) : parameter : tham số đầu vào
//! () : không có tham số đầu vào

// có tham số đầu vào : gọi lại hàm phải có

// (a, b, c) => (1, 2, 3)
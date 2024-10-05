import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { saveState } from '../utils/localStorage';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

store.subscribe(() => {
    const state = store.getState();
    saveState(state.cart);
});
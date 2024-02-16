import { configureStore } from "@reduxjs/toolkit";

import userReducer from  './slices/userSlice.js';
import productsReducer from './slices/productsSlice.js';
import cartReducer from './slices/cartSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

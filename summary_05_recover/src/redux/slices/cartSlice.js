import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalCount: 0
}

const cartSlice = createSlice( {
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += action.payload.price;
      if (state[action.payload.id]) {
        state[action.payload.id].count += 1;
      }
      else {
        state[action.payload.id] = {
          ...action.payload,
          count: 1
        }
      }
    },

    dropProductFromCart: (state, action) => {
      const existingProduct = state[action.payload.id];
      if ( existingProduct ) {
        if (existingProduct.count > 1) {
          existingProduct.count -= 1;
        }
        else {
          delete state[action.payload.id];
        }
        state.totalCount -= action.payload.price;
      }
    }
  }
} );

export const { addProductToCart, dropProductFromCart } = cartSlice.actions
export default cartSlice.reducer;
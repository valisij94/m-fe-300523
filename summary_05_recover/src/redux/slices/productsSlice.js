import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productsList: [],
  isFetching: false,
  error: ''
}

const productsSlice = createSlice( {
  name: 'products',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.isFetching = true;
      state.error = '';
    },
    productsLoaded: (state, action) => {
      state.isFetching = false;
      state.productsList = action.payload;
    },
    productsLoadFailed: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
} );

export const { startFetching, productsLoadFailed, productsLoaded } = productsSlice.actions
export default productsSlice.reducer;